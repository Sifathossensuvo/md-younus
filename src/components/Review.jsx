import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import arrow from '../assets/bannerarrow.svg';

// Assets folder theke quote icon ar user image gulo import kore nio
import quoteIcon from '../assets/quote-icon.svg';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';

const Review = () => {
  // Reviews Data Array (3 ti user-er review)
  const reviews = [
    {
      id: 1,
      quote:
        "“Working with Younus was effortless from day one. He consistently turned ideas into thoughtful, polished designs, bringing clarity to every challenge and delivering results that exceeded our expectations.”",
      name: "Kas Andz",
      role: "Founder & CEO of KAMG",
      image: user2,
    },
    {
      id: 2,
      quote:
        "“Younus brought a thoughtful approach to every project. He understood our goals quickly, turned complex ideas into clear designs, and consistently delivered work that felt polished and purposeful.”",
      name: "David Kauzlaric",
      role: "Co-founder of Agency Elevation",
      image: user1,
    },
    {
      id: 3,
      quote:
        "“An excellent team player who was always open to feedback and collaboration. He communicated clearly, supported the team when needed, and brought a positive, thoughtful attitude to every project.”",
      name: "Ryan Battishill",
      role: "Think Creative Founder",
      image: user3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Infinity Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);

      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % reviews.length;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrev = () => {
    setDirection(-1);

    setCurrentIndex((prevIndex) => {
      return (prevIndex - 1 + reviews.length) % reviews.length;
    });
  };

  const handleNext = () => {
    setDirection(1);

    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % reviews.length;
    });
  };

  const handleAvatarClick = (index) => {
    if (index === currentIndex) return;

    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const activeReview = reviews[currentIndex];

  /*
   * Always 3 ta avatar show hobe:
   *
   * LEFT   = previous
   * CENTER = current review
   * RIGHT  = next
   *
   * Tai je review currently show hocche,
   * tar image always majhkhan-e thakbe.
   */

  const previousIndex =
    (currentIndex - 1 + reviews.length) % reviews.length;

  const nextIndex =
    (currentIndex + 1) % reviews.length;

  const visibleAvatars = [
    {
      ...reviews[previousIndex],
      position: 'left',
      actualIndex: previousIndex,
    },
    {
      ...reviews[currentIndex],
      position: 'center',
      actualIndex: currentIndex,
    },
    {
      ...reviews[nextIndex],
      position: 'right',
      actualIndex: nextIndex,
    },
  ];

  return (
    <section className="w-full bg-white pt-[150px] mb-[150px] px-4 font-sans relative overflow-hidden flex items-center justify-center max-sm:pt-[90px] max-sm:mb-[80px]">

      <div className="max-w-[1200px] w-full mx-auto text-center relative flex flex-col items-center">

        {/* =====================================================
            QUOTE TOP ICON
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -15,
            scale: 0.85,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-8 max-sm:mb-6"
        >
          <motion.img
            src={quoteIcon}
            alt="Quote"
            className="w-[34px] h-[25px] mx-auto opacity-80 max-sm:w-[30px] max-sm:h-[22px]"
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>


        {/* =====================================================
            MAIN REVIEW TEXT
        ===================================================== */}

        <div className="relative min-h-[140px] md:min-h-[120px] flex items-center justify-center mb-[25px] w-full px-6 md:px-12 max-sm:min-h-[250px] max-sm:px-8 max-sm:mb-[20px]">

          <AnimatePresence
            mode="wait"
            custom={direction}
          >

            <motion.p
              key={currentIndex}
              custom={direction}

              initial={{
                opacity: 0,
                x: direction > 0 ? 45 : -45,
                y: 10,
                filter: "blur(4px)",
              }}

              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                filter: "blur(0px)",
              }}

              exit={{
                opacity: 0,
                x: direction > 0 ? -45 : 45,
                y: -10,
                filter: "blur(4px)",
              }}

              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}

              className="text-xl md:text-[28px] w-[880px] lg:text-[28px] font-[350] text-[#1D1D1D] leading-[150%] max-w-3xl max-sm:w-full max-sm:max-w-full max-sm:text-[17px] max-sm:leading-[165%] max-sm:px-0"
            >
              {activeReview.quote}
            </motion.p>

          </AnimatePresence>

        </div>


        {/* =====================================================
            USER INFO
        ===================================================== */}

        <div className="relative min-h-[76px] mb-[24px] flex items-center justify-center max-sm:min-h-[65px] max-sm:mb-[18px]">

          <AnimatePresence
            mode="wait"
            custom={direction}
          >

            <motion.div
              key={`info-${currentIndex}`}
              custom={direction}

              initial={{
                opacity: 0,
                y: 15,
                filter: "blur(4px)",
              }}

              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}

              exit={{
                opacity: 0,
                y: -15,
                filter: "blur(4px)",
              }}

              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}

              className="text-center"
            >

              <h4 className="text-[22px] leading-[26px] md:text-xl font-semibold text-[#1d1d1d] mb-1 max-sm:text-[18px] max-sm:leading-[23px]">
                {activeReview.name}
              </h4>

              <p className="text-sm md:text-sm text-[#1d1d1d] font-[375] max-sm:text-[13px]">
                {activeReview.role}
              </p>

            </motion.div>

          </AnimatePresence>

        </div>


        {/* =====================================================
            USER AVATARS
            CURRENT REVIEW ALWAYS CENTER
        ===================================================== */}

        <div className="relative flex items-center justify-center h-[72px] w-[220px] mb-4 max-sm:h-[64px] max-sm:w-[190px] max-sm:mb-3">

          <AnimatePresence
            initial={false}
            mode="popLayout"
          >

            {visibleAvatars.map((rev) => {

              const isCenter = rev.position === "center";

              return (
                <motion.button
                  key={`${rev.id}-${rev.position}`}

                  onClick={() =>
                    handleAvatarClick(rev.actualIndex)
                  }

                  initial={{
                    opacity: 0,
                    scale: 0.65,
                    x:
                      rev.position === "left"
                        ? 45
                        : rev.position === "right"
                        ? -45
                        : 0,
                  }}

                  animate={{
                    opacity: 1,
                    scale: 1,
                    x:
                      rev.position === "left"
                        ? -85
                        : rev.position === "right"
                        ? 85
                        : 0,
                  }}

                  exit={{
                    opacity: 0,
                    scale: 0.6,
                    x:
                      rev.position === "left"
                        ? -105
                        : rev.position === "right"
                        ? 105
                        : 0,
                  }}

                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}

                  whileHover={{
                    scale: isCenter ? 1.08 : 0.86,
                    opacity: 1,
                  }}

                  whileTap={{
                    scale: 0.72,
                  }}

                  className={`
                    absolute
                    rounded-full
                    overflow-hidden
                    cursor-pointer
                    ${
                      isCenter
                        ? "w-[80px] h-[80px] border-1 border-[#1D1D1D] max-sm:w-[70px] max-sm:h-[70px]"
                        : "w-[56px] h-[56px] border-1 border-[#1D1D1D] max-sm:w-[48px] max-sm:h-[48px]"
                    }
                  `}
                  aria-label={`Show review from ${rev.name}`}
                >

                  <img
                    src={rev.image}
                    alt={rev.name}
                    draggable="false"
                    className="w-full h-full rounded-full object-cover"
                  />

                </motion.button>
              );
            })}

          </AnimatePresence>

        </div>


        {/* =====================================================
            NAVIGATION BUTTONS
        ===================================================== */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-0 pointer-events-none max-sm:px-1">

          {/* PREVIOUS */}

          <motion.button
            onClick={handlePrev}

            whileHover={{
              scale: 1.08,
              x: 3,
            }}

            whileTap={{
              scale: 0.92,
            }}

            className="
              pointer-events-auto
              w-[48px]
              h-[48px]
              rounded-[10px]
              border
              border-[#1d1d1d]
              bg-white
              flex
              items-center
              justify-center
              text-[#1d1d1d]
              hover:bg-[#FFE3FB]
              transition-all
              duration-200
              ease-in-out
              cursor-pointer
              outline-none
              shadow-[inset_0_-5px_0_#ddd]
              active:shadow-[inset_0_-2px_4px_rgba(29,29,29,0.15)]
              max-sm:w-[38px]
              max-sm:h-[38px]
              max-sm:rounded-[8px]
              max-sm:hidden
              sm:flex
              md:flex
            "

            aria-label="Previous Review"
          >
            <img
              className="rotate-180 mb-1 max-sm:w-[15px]"
              src={arrow}
              alt=""
            />
          </motion.button>


          {/* NEXT */}

          <motion.button
            onClick={handleNext}

            whileHover={{
              scale: 1.08,
              x: 3,
            }}

            whileTap={{
              scale: 0.92,
            }}

            className="
              pointer-events-auto
              w-[48px]
              h-[48px]
              rounded-[10px]
              border
              border-[#1d1d1d]
              bg-white
              flex
              items-center
              justify-center
              text-[#1d1d1d]
              hover:bg-[#FFE3FB]
              transition-all
              duration-200
              ease-in-out
              cursor-pointer
              outline-none
              shadow-[inset_0_-5px_0_#ddd]
              active:shadow-[inset_0_-2px_4px_rgba(29,29,29,0.15)]
              max-sm:w-[38px]
              max-sm:h-[38px]
              max-sm:rounded-[8px]
              max-sm:hidden
              sm:flex
              md:flex
            "

            aria-label="Next Review"
          >
            <img
              className="mb-1 max-sm:w-[15px]"
              src={arrow}
              alt=""
            />
          </motion.button>

        </div>

      </div>

    </section>
  );
};

export default Review;