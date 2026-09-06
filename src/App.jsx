import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";

import Header from "./components/Header";
import Works from "./components/Works";
import Review from "./components/Review";
import Path from "./components/Path";
import Experience from "./components/Experience";
import About from "./components/About";
import Table from "./components/Table";
import Footer from "./components/Footer";

const App = () => {
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

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-h-screen w-full"
    >
      <Header />

      <Works />

      <Review />

      <Path />

      <Experience></Experience>

      <About></About>

      <Table></Table>

      <Footer></Footer>
    </motion.main>
  );
};

export default App;