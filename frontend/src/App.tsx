import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Leads } from "./components/Leads";
import { Timeline } from "./components/Timeline";
import { Footer } from "./components/Footer";
import { PageOrbit } from "./components/PageOrbit";

function App() {
  return (
    <div className="bg-[#050510] text-white">
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Leads />
        <Timeline />
        <Footer />
      </div>
      <PageOrbit />
    </div>
  );
}

export default App;
