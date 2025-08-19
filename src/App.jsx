import React from "react";
import { Loader, Nav, ScrollToTopButton } from "./components";
import { ToastContainer } from "react-toastify";
import {
  AboutUs,
  BlogDetails,
  Blogs,
  Categories,
  CategoriesPage,
  Collection,
  ContactUs,
  Deal,
  Footer,
  Hero,
  News,
  ProductDetails,
  ShopIcons,
  ShopInstagram,
  Testimonial,
} from "./sections";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  // const location = useLocation();
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const { pathname } = useLocation();
  const scrollContainerRef = React.useRef(null);
  const locomotiveScroll = React.useRef(null);

  React.useEffect(() => {
    (async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;

        locomotiveScroll.current = new LocomotiveScroll({
          el: scrollContainerRef.current,
          smooth: true,
          lerp: 0.07,
          multiplier: 1.2,
          smartphone: { smooth: true },
          tablet: { smooth: true },
        });
      } catch (error) {
        console.error("Locomotive Scroll init failed:", error);
      }
    })();

    return () => {
      locomotiveScroll.current?.destroy();
    };
  }, []);

  // Update scroll on route change
  // React.useEffect(() => {
  //   locomotiveScroll.current?.update();
  // }, [location.pathname]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [animate, setAnimate] = React.useState(false);
  const [logoPosition, setLogoPosition] = React.useState(0);

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
      <div ref={scrollContainerRef} data-scroll-container>
        <Loader animate={animate} logoPosition={logoPosition} />
        {/* <div
        className={`pageContent mt-[3rem] ${animate ? "tPVisisble" : "tPMove"}`}
      ></div> */}
        <Nav setLogoPosition={setLogoPosition} cart={cart} setCart={setCart} />
        <div className="mt-[64px] bg-transparent" />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Categories setCart={setCart} />
                <Deal />
                <Testimonial />
                <News />
                <ShopInstagram />
                <ShopIcons />
              </>
            }
          />
          <Route
            path="/product/:productId"
            element={<ProductDetails setCart={setCart} />}
          />
          <Route path="/product" element={<Collection setCart={setCart} />} />
          <Route path="/collection" element={<CategoriesPage />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog/:blogId" element={<BlogDetails />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
        <ToastContainer className={"text-[12px] !text-[#181818] !font-[500]"} />
      </div>
    </>
  );
}

export default App;
