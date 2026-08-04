import { Routes, Route, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Slideshow } from "./components/Slideshow";
import { Team } from "./pages/Team";
import { Footer } from "./components/Footer";
import { PageOrbit } from "./components/PageOrbit";

function Layout({ children }: { children: React.ReactNode }) {
  const loc = useLocation();
  const isHome = loc.pathname === "/";

  return (
    <div className="bg-[#050510] text-white">
      <div className="relative z-10">
        <Nav />
        {children}
        <Footer />
      </div>
      <PageOrbit satellite={isHome} />
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Slideshow />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/team"
        element={
          <Layout>
            <Team />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
