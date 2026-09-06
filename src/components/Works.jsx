import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

// Project images (Tomar assets folder er path onujayi thik kore nio)
import work1 from '../assets/work1.png';
import work2 from '../assets/work2.png';
import work3 from '../assets/work3.png';
import work4 from '../assets/work1.png';
import work5 from '../assets/work2.png';
import work6 from '../assets/work3.png';
import work7 from '../assets/work1.png';
import work8 from '../assets/work2.png';

const worksData = [
  {
    id: 1,
    title: "Wren Kitchen - Website Design",
    category: "BRAND DESIGN, FRAMER",
    image: work1,
    link: "#"
  },
  {
    id: 2,
    title: "Sandbox - Mobile App Interface",
    category: "UI/UX, MOBILE DESIGN",
    image: work2,
    link: "#"
  },
  {
    id: 3,
    title: "Blume - Photography Portfolio",
    category: "WEB DESIGN, TYPOGRAPHY",
    image: work3,
    link: "#"
  },
  {
    id: 4,
    title: "Nutshell - Creative Agency",
    category: "WORDPRESS, DEVELOPMENT",
    image: work4,
    link: "#"
  },
  {
    id: 5,
    title: "Aura - SaaS Landing Page",
    category: "FRAMER, SAAS",
    image: work5,
    link: "#"
  },
  {
    id: 6,
    title: "Vivid - E-Commerce Store",
    category: "WEBFLOW, E-COMMERCE",
    image: work6,
    link: "#"
  },
  {
    id: 7,
    title: "Nova - Crypto Dashboard",
    category: "UI/UX, WEB APP",
    image: work7,
    link: "#"
  },
  {
    id: 8,
    title: "Zenith - Minimalist Blog",
    category: "DESIGN SYSTEM",
    image: work8,
    link: "#"
  }
];

const Works = () => {

  return (
    <section className="w-full bg-white mt-[155px] px-4 font-sans relative overflow-hidden">

      {/* =========================================================
          SECTION HEADER
      ========================================================= */}

      <div className="max-w-[1200px] mb-[90px] mx-auto text-center ">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
          className="text-4xl md:text-5xl lg:text-[48px] font-medium w-[850px] mx-auto text-[#1D1D1D] tracking-[-2] mb-4"
        >
          My selected works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut"
          }}
          className="text-[#1d1d1d] text-lg md:text-[22px] max-w-[850px] mx-auto leading-relaxed font-light"
        >
          A collection of ideas turned into thoughtful experiences, purposeful interfaces, and products people enjoy using.
        </motion.p>

      </div>


      {/* =========================================================
          8 CARDS GRID
      ========================================================= */}

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">

        {worksData.map((work, index) => (

          <AnimatedProjectCard
            key={work.id}
            work={work}
            index={index}
          />

        ))}

      </div>


      {/* =========================================================
          SEE ALL WORKS
      ========================================================= */}

      <div className="block text-center mt-23">

        <h2 className="text-[#1d1d1d] font-[300] mb-[30px] text-2xl">
          Are you ready to see more?
        </h2>

        <a
          className="
            inline-flex
            items-center
            gap-3
            px-6
            py-4
            rounded-[10px]
            border
            border-[#1D1D1D]
            text-[#1d1d1d]
            font-medium
            hover:bg-black
            hover:text-white
            hover:border-black
            transition-all
    shadow-[inset_0_-3px_6px_rgba(29,29,29,0.15)]

            duration-300
           
            group/btn
            hover:cursor-pointer
          "
        >
          <span>See all works</span>
        </a>

      </div>

    </section>
  );
};


/* ===============================================================
   ANIMATED PROJECT CARD

   Odd card  -> LEFT side theke ashbe
   Even card -> RIGHT side theke ashbe

   Scroll korar shomoy:
   - card side theke slide korbe
   - slight rotate thakbe
   - scale gradually settle korbe
   - opacity smoothly ashbe
   - spring physics er jonno movement ta natural lagbe
================================================================ */

const AnimatedProjectCard = ({ work, index }) => {

  const cardRef = useRef(null);

  const isLeftCard = index % 2 === 0;


  /* =========================================================
     CARD SCROLL PROGRESS
  ========================================================= */

  const { scrollYProgress } = useScroll({
    target: cardRef,

    offset: [
      "start 1.08",
      "start 0.58"
    ]
  });


  /* =========================================================
     RAW TRANSFORMS
  ========================================================= */

  // Left card:
  // -220px theke center e ashbe

  // Right card:
  // +220px theke center e ashbe

  const rawX = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    [
      isLeftCard ? -220 : 220,
      isLeftCard ? -45 : 45,
      0
    ]
  );


  const rawY = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [75, 18, 0]
  );


  const rawRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      isLeftCard ? -8 : 8,
      isLeftCard ? -2 : 2,
      0
    ]
  );


  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.88, 0.97, 1]
  );


  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.6, 1],
    [0, 0.45, 0.9, 1]
  );


  /* =========================================================
     SPRING PHYSICS

 
  ========================================================= */

  const x = useSpring(rawX, {
    stiffness: 100,
    damping: 22,
    mass: 0.65
  });

  const y = useSpring(rawY, {
    stiffness: 100,
    damping: 22,
    mass: 0.65
  });

  const rotate = useSpring(rawRotate, {
    stiffness: 100,
    damping: 22,
    mass: 0.65
  });

  const scale = useSpring(rawScale, {
    stiffness: 100,
    damping: 22,
    mass: 0.65
  });

  const opacity = useSpring(rawOpacity, {
    stiffness: 100,
    damping: 22,
    mass: 0.65
  });


  return (

    <motion.div
      ref={cardRef}

      style={{
        x,
        y,
        rotate,
        scale,
        opacity,

        // Animation er shomoy overlap holeo
        // image/card er border clean thakbe
        transformOrigin: "center center"
      }}

      className="
        relative
        bg-white
        rounded-[20px]
        border
        border-[#1d1d1d]
        p-5
        md:p-5
   
        flex
        flex-col
        justify-between
        transition-shadow
        duration-500
        hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]
        group
        will-change-transform
      "
    >

      {/* =====================================================
          INNER IMAGE BOX
      ===================================================== */}

      <div
        className="
          w-full
          
          rounded-[16px]
          
          
          border
          border-[#000000]
          flex
          items-center
          justify-center
          overflow-hidden
          
        "
      >

        <motion.img
          src={work.image}
          alt={work.title}

          whileHover={{
            scale: 1.025
          }}

          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1]
          }}

          className="
            w-full
            h-auto
            object-cover
            rounded-2xl
            shadow-sm
            will-change-transform
          "
        />

      </div>


      {/* =====================================================
          CONTENT AREA
      ===================================================== */}

      <div className="flex flex-col items-start text-left px-3">

        {/* CATEGORY */}

        <span
          className="
            text-[10px]
            md:text-[12.3px]
            font-[400]
            mt-10
            tracking-[18.3]
            text-[#1d1d1d]
            uppercase
            bg-[#FFE3FB]
            px-[10px]
            py-[8px]
            rounded-[6px]
            mb-[21px]
          "
        >
          {work.category}
        </span>


        {/* TITLE */}

        <h3
          className="
            text-3xl
            md:text-[24px]
            font-medium
            text-[#1D1D1D]
            tracking-tight
            mb-7
            leading-[39px]
          "
        >
          {work.title}
        </h3>


        {/* LIVE SITE BUTTON */}

<a
  href={work.link}

  className="
    inline-flex
    items-center
    gap-[21px]
    mb-5
    px-6
    py-3
    rounded-[10px]
    border
    border-[#1D1D1D]
    text-[#1d1d1d]
    text-sm
    font-medium
    shadow-[inset_0_-3px_6px_rgba(29,29,29,0.15)]
    hover:bg-black
    hover:text-white
    hover:border-black
    transition-all
    duration-300
  
    group/btn
  "
>

  <span>
    Live Site
  </span>

  <FiArrowRight
    className="
      text-base
      transition-transform
      duration-300
      group-hover/btn:translate-x-1
    "
  />

</a>

      </div>

    </motion.div>

  );
};


export default Works;