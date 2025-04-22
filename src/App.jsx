import React from "react";
import Lenis from "lenis";
import { Loader, Nav } from "./components";
import {
  Categories,
  Collection,
  Deal,
  Footer,
  Hero,
  News,
  ProductDetails,
  ShopIcons,
  ShopInstagram,
  Testimonial,
} from "./sections";
import { Route, Routes } from "react-router-dom";

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

  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => {
        setAnimate(true);
      }, 3000);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  return (
    <>
      <Loader animate={animate} />
      {/* <div
        className={`pageContent mt-[3rem] ${animate ? "tPVisisble" : "tPMove"}`}
      ></div> */}
      <Nav />
      <div className="mt-[64px] bg-transparent" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <Deal />
              <Testimonial />
              <News />
              <ShopInstagram />
              <ShopIcons />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product" element={<Collection />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
