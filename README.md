# UW Orbital site

A static site: one `index.html` plus images. There is no build step.

## Deploy to Vercel

From the command line (needs Node.js installed):

    cd uworbital-site
    npx vercel          # sign in, accept the defaults; gives a preview URL
    npx vercel --prod   # publishes to production

Or through GitHub: push this folder to a repository, then in Vercel choose
Add New > Project, import the repository, set Framework Preset to "Other",
leave the Build Command empty and the Output Directory as the default, and deploy.

Pages are addressed with `#` links (`/#mission`, `/#team`, `/#firmware`), so no
rewrites are needed. three.js loads from cdn.jsdelivr.net and fonts from Google Fonts.
