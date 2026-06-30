import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { PageOrbit } from "./components/PageOrbit";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-[#050510] text-white">
      <div className="relative z-10">
        <Nav />
        <Hero />
        <div className="h-[200vh]" />
        <Footer />
      </div>
      <PageOrbit />
    </div>
  );
}

export default App;
