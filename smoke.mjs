// Smoke test: every route renders, no console errors, mobile menu opens.
// Run the dev server first, then: node smoke.mjs
// ponytail: one script, no test framework. Add a runner when there is more than this to check.
import { spawn } from 'node:child_process'

const PORT = 9346
const BASE = process.env.BASE ?? 'http://localhost:5173'
const ROUTES = [
  '/', '/mission', '/team', '/events', '/gallery', '/features', '/sponsors', '/join',
  '/team/mechanical', '/team/electrical', '/team/gnc',
  '/team/firmware', '/team/software', '/team/business',
]
const CHROME = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const chrome = spawn(CHROME, [
  '--headless', '--disable-gpu', '--no-sandbox',
  `--remote-debugging-port=${PORT}`, '--user-data-dir=/tmp/cr-smoke', 'about:blank',
], { stdio: 'ignore' })

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function target() {
  for (let i = 0; i < 60; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json()
      const t = list.find((t) => t.type === 'page')
      if (t) return t.webSocketDebuggerUrl
    } catch {}
    await sleep(500)
  }
  throw new Error('Chrome did not start')
}

const ws = new WebSocket(await target())
await new Promise((r) => (ws.onopen = r))

let id = 0
const pending = new Map()
const errors = []
ws.onmessage = (e) => {
  const m = JSON.parse(e.data)
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id) }
  if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') {
    errors.push(m.params.args.map((a) => a.value ?? a.description).join(' '))
  }
  if (m.method === 'Runtime.exceptionThrown') {
    errors.push(m.params.exceptionDetails.text + ' ' + (m.params.exceptionDetails.exception?.description ?? ''))
  }
}
const send = (method, params = {}) =>
  new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })) })
const evaluate = async (expression) =>
  (await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })).result?.result?.value

await send('Page.enable')
await send('Runtime.enable')
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false })

const failures = []

for (const route of ROUTES) {
  errors.length = 0
  await send('Page.navigate', { url: BASE + route })
  await sleep(2500)
  const seen = await evaluate(`JSON.stringify({
    heading: document.querySelector('main h1, main h2')?.textContent ?? '',
    overflow: document.documentElement.scrollWidth > innerWidth + 1,
    links: document.querySelectorAll('main a').length,
  })`)
  const r = JSON.parse(seen ?? '{}')
  if (!r.heading) failures.push(`${route}: no heading rendered`)
  if (r.overflow) failures.push(`${route}: page scrolls sideways`)
  if (!r.links) failures.push(`${route}: no links rendered`)
  if (errors.length) failures.push(`${route}: console error — ${errors[0]}`)
  console.log(`${route.padEnd(14)} ${r.heading?.slice(0, 40) ?? ''}`)
}

// mobile: the menu button must reveal the nav
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true })
await send('Page.navigate', { url: BASE + '/' })
await sleep(2500)
const menu = await evaluate(`(async () => {
  const nav = document.querySelector('#primary-nav')
  const before = getComputedStyle(nav).display
  document.querySelector('.header__toggle').click()
  await new Promise(r => setTimeout(r, 300))
  const after = getComputedStyle(nav).display
  return JSON.stringify({ before, after })
})()`)
const m = JSON.parse(menu ?? '{}')
if (m.before !== 'none' || m.after === 'none') failures.push(`mobile menu did not open (${m.before} -> ${m.after})`)
console.log(`mobile menu    ${m.before} -> ${m.after}`)

ws.close()
chrome.kill()

if (failures.length) {
  console.error('\nFAIL\n' + failures.map((f) => '  - ' + f).join('\n'))
  process.exit(1)
}
console.log('\nOK — %d routes, no console errors, no sideways scroll.', ROUTES.length)
