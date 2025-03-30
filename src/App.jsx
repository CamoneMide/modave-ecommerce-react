import React from "react";
import Lenis from "lenis";
import { Nav } from "./components";
import {
  Categories,
  Deal,
  Footer,
  Hero,
  News,
  ShopIcons,
  ShopInstagram,
  Testimonial,
} from "./sections";

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
      <div className="mt-[64px] bg-transparent" />
      <Hero />
      <Categories />
      <Deal />
      <Testimonial />
      <News />
      <ShopInstagram />
      <ShopIcons />
      <Footer />
    </>
  );
}

export default App;
