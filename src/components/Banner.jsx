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
import arrow from '../assets/bannerarrow.svg';

// Profile pictures for animation
import profile1 from '../assets/photo.png';
import profile2 from '../assets/photo.png';
import profile3 from '../assets/photo.png';

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
      description: (
        <>
          Discover my background,
          <br />
          skills, experience, and journey as a designer.
        </>
      ),
      icon: card2,
      btnBg: 'bg-[#FFE7A9]',
      link: '/portfolio',
    },

    {
      id: 3,
      title: 'Contact Me',
      description: (
        <>
          Let’s work together to turn
          <br />
          your ideas into meaningful digital experiences.
        </>
      ),
      icon: card3,
      btnBg: 'bg-[#DBF5F0]',
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
          lg:pb-[318px]

          max-sm:pt-12
          max-sm:pb-36
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
              w-[188px]
              h-[83px]
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
              w-[77px]
              h-[77px]
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
              w-[186px]
              h-[93px]
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

              max-sm:w-[105px]
              max-sm:h-[105px]
              max-sm:mb-7
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

              max-sm:text-[37px]
              max-sm:leading-[112%]
              max-sm:tracking-[-2.5px]
              max-sm:w-full
              max-sm:px-1
            "
          >

            {/* ======================================================
                DESKTOP TITLE
                Existing design preserved
            ====================================================== */}

            <span className="hidden md:inline">
              <div className=''>
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
                        border-1
                        border-[#1D1D1D]
                      "
                    />
                  </AnimatePresence>
                </span>

                I'm Younus,
              </div>

              <div>
                a UI & UX Designer.
              </div>
            </span>

            {/* ======================================================
                MOBILE TITLE
                Screenshot-er exact structure
            ====================================================== */}

            <span className="md:hidden block">
              Hello! I'm Younus,
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

              mt-[50px]

              text-[#1d1d1d]

              text-[18px]
              font-[375]

              max-w-[360px]

              sm:text-[19px]
              sm:max-w-[430px]

              md:text-lg
              md:max-w-[880px]
              md:leading-[150%]
              lg:text-xl

              max-sm:mt-7
              max-sm:text-[15px]
              max-sm:leading-[165%]
              max-sm:max-w-[350px]
              max-sm:px-2
            "
          >
            I create intuitive, user-centered digital experiences that balance beautiful design with seamless functionality. With expertise in HTML, CSS, and WordPress, I also bring designs to life as responsive and engaging websites.
          </motion.p>

          <div className="flex items-center justify-center mt-[50px] max-sm:mt-7">
            <div className="border rounded-[10px] border-[#1d1d1d]">
              <button
                onClick={() => alert('Downloading Resume...')}
                className="
                  flex items-center gap-5
                  px-6 h-[52px]
                  bg-white text-[#1d1d1d]
                  font-medium text-base
                  rounded-[10px]
                  border-b-5 border-[#ddd]

                  text-[14px]

                  tracking-[-0.3]

                  active:scale-95
                  active:shadow-[inset_0_-2px_4px_rgba(29,29,29,0.15)]
                  transition-all duration-200 ease-in-out
                  cursor-pointer
                  outline-none

                  hover:bg-[#FFE3FB]

                  max-sm:h-[48px]
                  max-sm:px-5
                  max-sm:gap-4
                  max-sm:text-[13px]
                "
              >
                <span>Download My Resume</span>
                {/* dasdfsadfasfsa */}
                <img src={download} alt="" />
              </button>
            </div>
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

            -mt-[158px]

            md:

            pb-[5px]

            relative

            max-sm:mt-[-100px]
            max-sm:pb-5
          "
        >

          {/* ======================================================
              MOBILE
              Normal stacked cards
              NO spread / tilt animation
          ====================================================== */}



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
                '-411px',
                '0%',
                '411px',
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
                    h-full

                    bg-white
                    rounded-[20px]

                    pt-[40px] pb-[50px] px-[40px]

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
                  <h3 className="text-xl leading-[28px] font-medium text-[#1d1d1d] mb-[12px]">
                    {card.title}
                  </h3>

                  <p className="text-[#1d1d1d] text-sm md:text-[17px] leading-[150%] mb-[24px] flex-grow font-[375]">
                    {card.description}
                  </p>

                  {/* Action Button */}
                  <Link
                    to={card.link}
                    className={`
                      w-[52px]
                      h-[40px]
                      rounded-[50px]
                      flex
                      items-center
                      justify-center
                      border
                      border-[#1d1d1d]
                      
                      transition-all
                      duration-200
                      ease-in-out
                      hover:scale-105
                      hover:bg-[#e2ecf7]
                      active:scale-95

                      ${card.btnBg}
                    `}
                  >
                    <img src={arrow} alt="" />
                  </Link>

                </motion.div>
              );
            })}
          </div>

          {/* ======================================================
              MOBILE CARDS
              Only added for phone
          ====================================================== */}

          <div
            className="
              md:hidden
              flex
              flex-col
              items-center
              gap-4
              w-full
              max-sm:gap-4
            "
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="
                  w-full
                  max-w-[360px]
                  min-h-[270px]
                  bg-white
                  rounded-[20px]
                  pt-7
                  pb-7
                  px-6
                  border
                  border-[#000000]
                  flex
                  flex-col
                  items-center
                  text-center
                  max-sm:min-h-[250px]
                  max-sm:pt-6
                  max-sm:pb-6
                  max-sm:px-5
                "
              >

                {/* Icon */}
                <div className="mb-5 flex justify-center items-center">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-[78px] h-[58px] object-contain"
                  />
                </div>

                {/* Card Text */}
                <h3 className="text-xl leading-[28px] font-medium text-[#1d1d1d] mb-3">
                  {card.title}
                </h3>

                <p className="text-[#1d1d1d] text-[14px] leading-[150%] mb-5 flex-grow font-[375]">
                  {card.description}
                </p>

                {/* Action Button */}
                <Link
                  to={card.link}
                  className={`
                    w-[52px]
                    h-[40px]
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
                    active:scale-95

                    ${card.btnBg}
                  `}
                >
                  <img src={arrow} alt="" />
                </Link>

              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default Banner;