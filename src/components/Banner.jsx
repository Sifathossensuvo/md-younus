import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiGlobe, FiClipboard, FiMail } from 'react-icons/fi';
import download from '../assets/download.svg';


// Tomar SVG assets
import uiuxSvg from '../assets/uiux.svg';
import penToolSvg from '../assets/pentool.svg';
import drinkSvg from '../assets/drink.svg';
import nocodeSvg from '../assets/nocode.svg';

// Profile pictures for animation
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';

// card image
import card1 from '../assets/card1.svg';
import card2 from '../assets/card2.svg';
import card3 from '../assets/card3.svg';

const Banner = () => {
  // ======================================================
  // PROFILE IMAGE CYCLER
  // ======================================================

  const profileImages = [profile1, profile2, profile3];
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % profileImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // ======================================================
  // CARDS DATA
  // ======================================================

const cards = [
  {
    id: 1,
    title: 'My Portfolio',
    description:
      'Explore selected projects that showcase my design skills and creative approach.',
    icon: card1,
    btnBg: 'bg-[#E3F2FF]',
    link: '/portfolio',
  },

  {
    id: 2,
    title: 'About Me',
    description:
      'Discover my background, skills, experience, and journey as a designer.',
    icon: card2,
    btnBg: 'bg-yellow-100',
    link: '/about',
  },

  {
    id: 3,
    title: 'Contact Me',
    description:
      "Let’s work together to turn your ideas into meaningful digital experiences.",
    icon: card3,
    btnBg: 'bg-[#E3F2FF]',
    link: '/contact',
  },
];
  return (
    <section className="w-full flex flex-col relative overflow-hidden">

      {/* ======================================================
          TOP SECTION
      ====================================================== */}

      <div
        className="
          bg-[#E3E3FF]
          w-full
          relative
          px-4

          pt-20
          pb-48

          sm:pt-24
          sm:pb-52

          md:pt-37
          md:pb-56

          lg:pt-40
          lg:pb-72
        "
      >

        <div
          className="
            max-w-[1200px]
            mx-auto
            relative
            flex
            flex-col
            items-center
            text-center
          "
        >

          {/* ======================================================
              FLOATING DECORATIVE SVGs
              ONLY DESKTOP
          ====================================================== */}

          <motion.img
            src={uiuxSvg}
            alt="UI/UX Design"
            className="
              absolute
              -left-6
              top-10
              hidden
              lg:block
              w-[158px]
            "
            initial={{
              opacity: 0,
              x: -35,
              y: 10,
              rotate: -8,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -12, 0],
              rotate: [0, -2, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
              x: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
              y: {
                repeat: Infinity,
                duration: 4,
                ease: 'easeInOut',
              },
              rotate: {
                repeat: Infinity,
                duration: 4,
                ease: 'easeInOut',
              },
            }}
          />

          <motion.img
            src={penToolSvg}
            alt="Pen Tool"
            className="
              absolute
              left-12
              bottom-3
              hidden
              lg:block
              w-[76px]
              h-[76-px]
            "
            initial={{
              opacity: 0,
              x: -25,
              y: 20,
              rotate: -10,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, 10, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              },
              x: {
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              },
              y: {
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut',
              },
              rotate: {
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut',
              },
            }}
          />

          <motion.img
            src={drinkSvg}
            alt="Drink"
            className="
              absolute
              right-12
              top-10
              hidden
              lg:block
              w-[46px]
              h-[74px]
            "
            initial={{
              opacity: 0,
              x: 35,
              y: 10,
              rotate: 8,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              },
              x: {
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              },
              y: {
                repeat: Infinity,
                duration: 4.5,
                ease: 'easeInOut',
              },
              rotate: {
                repeat: Infinity,
                duration: 4.5,
                ease: 'easeInOut',
              },
            }}
          />

          <motion.img
            src={nocodeSvg}
            alt="No-code Design"
            className="
              absolute
              -right-8
              bottom-5
              hidden
              lg:block
              w-[158px]
             
            "
            initial={{
              opacity: 0,
              x: 35,
              y: 20,
              rotate: 8,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, 12, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              },
              x: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              },
              y: {
                repeat: Infinity,
                duration: 5.5,
                ease: 'easeInOut',
              },
              rotate: {
                repeat: Infinity,
                duration: 5.5,
                ease: 'easeInOut',
              },
            }}
          />

          {/* ======================================================
              MOBILE PROFILE IMAGE
              Screenshot-er moto title-er UPOR
          ====================================================== */}

          <motion.div
            className="
              md:hidden
              relative
              w-[132px]
              h-[132px]
              mb-10
              flex
              items-center
              justify-center
            "
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.85,
              filter: 'blur(8px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImg}
                src={profileImages[currentImg]}
                alt="Meeko"
                initial={{
                  opacity: 0,
                  scale: 0.85,
                  rotate: -8,
                  filter: 'blur(6px)',
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  filter: 'blur(0px)',
                }}
                exit={{
                  opacity: 0,
                  scale: 0.92,
                  rotate: 8,
                  filter: 'blur(5px)',
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  rounded-full
                  object-cover
                  bg-pink-200
                  border
                  border-[#202020]
                "
              />
            </AnimatePresence>
          </motion.div>

          {/* ======================================================
              MAIN HERO TEXT
          ====================================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.97,
              filter: 'blur(10px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
            }}
            transition={{
              duration: 1,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              md:w-[805px]
              z-10
              text-[#1D1D1D]
              tracking-[-4.5px]
              font-medium

              text-[48px]
              

              sm:text-[56px]
              sm:leading-[1.05]

              md:text-6xl
              md:leading-[94.4px]

              lg:text-[90px]
              lg:leading-[94.5px]
              
              
            "
          >

            {/* ======================================================
                DESKTOP TITLE
                Existing design preserved
            ====================================================== */}

            <span className="hidden md:inline">
              Hello
              <span className="">!</span>

              {/* Desktop inline profile */}
              <span
                className="
                  inline-flex
                  items-center
                  justify-center
                  align-middle
                  mx-3
                  relative
                  w-[105px]
                  h-[105px]

                  lg:w-[105px]
                  lg:h-[105px]
                  
                "
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImg}
                    src={profileImages[currentImg]}
                    alt="Meeko"
                    initial={{
                      opacity: 0,
                      scale: 0.72,
                      rotate: -18,
                      filter: 'blur(8px)',
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                      filter: 'blur(0px)',
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.82,
                      rotate: 18,
                      filter: 'blur(6px)',
                    }}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      absolute
                      -top-3
                      left-0
                      w-full
                      h-full
                      rounded-full
                      object-cover
                      
                      bg-pink-200
                      border-2
                      border-[#1D1D1D]
                    "
                  />
                </AnimatePresence>
              </span>

              I'm Younus,
              <br className="hidden md:block" />
              a UI & UX Designer.
            </span>

            {/* ======================================================
                MOBILE TITLE
                Screenshot-er exact structure
            ====================================================== */}

            <span className="md:hidden block">
              I'm Younus,
              <br />
              a UI & UX Designer.
            </span>

          </motion.h1>

          {/* ======================================================
              SUBTITLE
          ====================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
              filter: 'blur(8px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-10
              mx-auto

              mt-[40px]

              text-[#1d1d1d]

              text-[18px]
             

              max-w-[360px]

              sm:text-[19px]
              sm:max-w-[430px]

              md:text-lg
              md:max-w-3xl
              md:leading-[150%]
              lg:text-xl
            "
          >
I create intuitive, user-centered digital experiences that balance beautiful design with seamless functionality. With expertise in HTML, CSS, and WordPress, I also bring designs to life as responsive and engaging websites.
          </motion.p>

<div className="flex items-center justify-center mt-[55px]">
  <button
    onClick={() => alert('Downloading Resume...')}
    className="
      flex items-center gap-3 
      px-6 py-4 
      bg-white text-slate-800 
      font-medium text-base 
      rounded-[8px]
      border-1 border-[#1D1D1D]
      
      shadow-[inset_0_-3px_6px_rgba(29,29,29,0.15)]

      hover:shadow-[inset_0_-3px_6px_rgba(29,29,29,0.15),0_6px_16px_rgba(0,0,0,0.08)]
      hover:bg-slate-50/50
      active:scale-95
      active:shadow-[inset_0_-2px_4px_rgba(29,29,29,0.15)]
      transition-all duration-200 ease-in-out
      cursor-pointer
      outline-none
    "
  >
    <span>Download My Resume</span>
    {/* dasdfsadfasfsa */}
<img src={download} alt="" ></img>
  </button>
</div>
        </div>
      </div>

      {/* ======================================================
          BOTTOM SECTION
      ====================================================== */}

      <div
        className="
          bg-white
          w-full
          px-4
          relative
          z-20
          border-t
         border-[#000000]
        "
      >

        <div
          className="
            max-w-[1200px]
            mx-auto

            -mt-32
            sm:-mt-36

            md:-mt-40

            pb-[5px]

            relative
          "
        >

          {/* ======================================================
              MOBILE
              Normal stacked cards
              NO spread / tilt animation
          ====================================================== */}

          <div
            className="
              md:hidden
              flex
              flex-col
              gap-6
              max-w-[430px]
              
              mx-auto
            "
          >
            {cards.map((card) => (
              <motion.div
                key={card.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  w-full
                  bg-white
                  rounded-3xl
                  p-8
                  shadow-[0_15px_40px_rgb(0,0,0,0.08)]
                  border
                  border-[#000000]
                  
                  flex
                  flex-col
                  items-center

                  text-center
                "
              >

                {/* Icon */}
                <div className="mb-6 flex justify-center items-center">
                 <img
    src={card.icon}
    alt={card.title}
    className="w-20 h-20 object-contain"
  />
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold text-[#1D1D1D] mb-3">
                  {card.title}
                </h3>

                <p className="text-[#1D1D1D] text-sm leading-relaxed mb-8">
                  {card.description}
                </p>

                {/* Button */}
                <Link
                  to={card.link}
                  className={`
                    w-12
                    h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    transition-all
                    hover:scale-110
                    shadow-sm
                    ${card.btnBg}
                  `}
                >
                  <FiArrowRight className="text-gray-700 text-lg" />
                </Link>

              </motion.div>
            ))}
          </div>

          {/* ======================================================
              DESKTOP
              EXISTING SPREAD ANIMATION
          ====================================================== */}

          <div
            className="
              hidden
              md:block
              relative
              h-[380px]
              max-w-5xl
              mx-auto
            "
          >
            {cards.map((card, index) => {

              // Desktop positions
              const desktopXValues = [
                '-105%',
                '0%',
                '105%',
              ];

              const desktopRotations = [
                -12,
                -4,
                6,
              ];

              const zIndices = [
                10,
                20,
                30,
              ];

              return (
                <motion.div
                  key={card.id}

                  initial={{
                    x: '0%',
                    y: 0,
                    rotate: desktopRotations[index],
                    scale: 0.95,
                    opacity: 0.9,
                  }}

                  whileInView={{
                    x: desktopXValues[index],
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    opacity: 1,
                  }}

                  viewport={{
                    once: false,
                    amount: 0.3,
                  }}

                  transition={{
                    type: 'spring',
                    stiffness: 60,
                    damping: 14,
                    delay: index * 0.1,
                  }}

                  whileHover={{
                    y: -10,
                    transition: {
                      duration: 0.2,
                    },
                  }}

                  style={{
                    zIndex: zIndices[index],
                  }}

                  className="
                    w-[378px]
                    absolute
                    top-0
                    left-0
                    right-0
                    mx-auto

                    bg-white
                    rounded-[20px]

                    p-10
                    md:p-10

                   

                    border
                    border-[#000000]

                    flex
                    flex-col
                    items-center
                    text-center
                  "
                >

                  {/* Icon */}
                  <div className="mb-[30px] flex justify-center items-center">
                     <img
    src={card.icon}
    alt={card.title}
    className="w-[92px] h-17 object-contain"
  />
                  </div>

                  {/* Card Text */}
                  <h3 className="text-xl leading-[28px] font-medium text-[#1d1d1d] mb-6">
                    {card.title}
                  </h3>

                  <p className="text-[#1d1d1d] text-sm md:text-[17px] leading-[150%] mb-[30px] flex-grow">
                    {card.description}
                  </p>

                  {/* Action Button */}
<Link
  to={card.link}
  className={`
    w-14
    h-11
    rounded-[50px]
    flex
    items-center
    justify-center
    border
    border-[#1d1d1d]
    bg-[#eef3f9]
    transition-all
    duration-200
    ease-in-out
    hover:scale-105
    hover:bg-[#e2ecf7]
    active:scale-95
    
    ${card.btnBg}
  `}
>
  <FiArrowRight className="w-5 h-5 text-slate-800 transition-transform duration-200 group-hover:translate-x-0.5" />
</Link>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
};

export default Banner;