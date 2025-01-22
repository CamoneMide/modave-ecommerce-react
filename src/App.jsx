import React from "react";
import Lenis from "lenis";
import { Nav } from "./components";
import { Categories, Deal, Hero, Testimonial } from "./sections";

function App() {
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Categories />
      <Deal />
      <Testimonial />
    </>
  );
}

export default App;
