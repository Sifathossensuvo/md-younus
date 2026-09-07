// src/App.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllProjects from "./components/AllProjects";
import Contact from "./pages/Contact";


const App = () => {
  const location = useLocation();

  // Shudhu Navbar-er pechoner background color route onujaye change hobe
  const getNavBackground = () => {
    switch (location.pathname) {
      case "/portfolio":
        return "bg-[#FAF3F0]"; // Portfolio page-e nav er pechone ei color thakbe
      default:
        return "bg-[#E3E3FF]"; // Home page ba onnanno page-e ei color thakbe
    }
  };

  // Lenis smooth scroll setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35,
      smoothWheel: true,
      wheelMultiplier: 0.75,
      touchMultiplier: 1,
      syncTouch: true,
      gestureOrientation: "vertical",
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    // route change hole lenis ke force kore top-e pathanor jonno window.lenis assign kora holo
    window.lenis = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // Proti bar route change hole 100% reliable vabe top-e niye jabe
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen w-full flex flex-col justify-between"
    >
      {/* 1. Shudhu Navbar er wrapper-e dynamic background thakbe */}
      <div className={getNavBackground()}>
        <Navbar />
      </div>

      {/* 2. Routes er maddhome page change hobe */}
      <div className="flex-grow">
       
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<AllProjects />} />
          <Route path="/contact" element={<Contact></Contact>} />
          
        </Routes>
      </div>

      {/* 3. Footer shobar jonno common thakbe */}
      <Footer />
    </motion.main>
  );
};

export default App;