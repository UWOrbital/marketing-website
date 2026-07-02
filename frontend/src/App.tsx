import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Slideshow } from "./components/Slideshow";
import { Footer } from "./components/Footer";
import { PageOrbit } from "./components/PageOrbit";

function App() {
  return (
    <div className="bg-[#050510] text-white">
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Slideshow />
        <Footer />
      </div>
      <PageOrbit />
    </div>
  );
}

export default App;
