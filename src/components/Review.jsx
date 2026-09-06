import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

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
        "“From the very beginning the collaboration felt effortless. Every idea was carefully refined into something meaningful, and the final result was exactly what we hoped for.”",
      name: "Natalie Brooks",
      role: "Marketing Manager",
      image: user1,
    },
    {
      id: 2,
      quote:
        "“Working together was an absolute game-changer for our brand. The attention to detail and creative execution exceeded all our expectations.”",
      name: "Alex Morgan",
      role: "Product Designer",
      image: user2,
    },
    {
      id: 3,
      quote:
        "“Fast turnaround, exceptional communication, and a world-class eye for design. Highly recommended for anyone looking to elevate their digital presence.”",
      name: "Sophia Chen",
      role: "Founder & CEO",
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
    <section className="w-full bg-white  pt-[150px] mb-[150px] px-4 font-sans relative overflow-hidden flex items-center justify-center">

      <div className="max-w-[900px] w-full mx-auto text-center relative flex flex-col items-center">

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
          className="mb-8"
        >
          <motion.img
            src={quoteIcon}
            alt="Quote"
            className="w-[34px] h-[25px] mx-auto opacity-80"
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

        <div className="relative min-h-[140px] md:min-h-[120px] flex items-center justify-center mb-[25px] w-full px-6 md:px-12">

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

              className="text-xl md:text-[28px] lg:text-[28px] font-[300] text-[#1D1D1D] leading-relaxed tracking-tight max-w-3xl"
            >
              {activeReview.quote}
            </motion.p>

          </AnimatePresence>

        </div>


        {/* =====================================================
            USER INFO
        ===================================================== */}

        <div className="relative min-h-[76px] mb-[40px] flex items-center justify-center">

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

              <h4 className="text-[22px] leading-[26px] md:text-xl font-semibold text-[#1d1d1d] mb-1">
                {activeReview.name}
              </h4>

              <p className="text-sm md:text-sm text-[#1d1d1d] font-[300]">
                {activeReview.role}
              </p>

            </motion.div>

          </AnimatePresence>

        </div>


        {/* =====================================================
            USER AVATARS
            CURRENT REVIEW ALWAYS CENTER
        ===================================================== */}

<div className="relative flex items-center justify-center h-[72px] w-[220px] mb-4">

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
                    opacity: isCenter ? 1 : 0.58,
                    scale: isCenter ? 1 : 0.78,
                    x:
                      rev.position === "left"
                        ? -72  // Left avatar-er gap barano holo
                        : rev.position === "right"
                        ? 72   // Right avatar-er gap barano holo
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
                        ? "w-[80px] h-[80px]  border-2 border-[#1D1D1D] shadow-[0_6px_25px_rgba(99,102,241,0.22)]"
                        : "w-[56px] h-[56px] border border-[#1D1D1D]"
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

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-0 md:-mx-12 pointer-events-none">

          {/* PREVIOUS */}

          <motion.button
            onClick={handlePrev}

            whileHover={{
              scale: 1.08,
              x: -3,
            }}

            whileTap={{
              scale: 0.92,
            }}

            className="
              pointer-events-auto
              w-11
              h-11
              rounded-full
              border
              border-gray-300
              bg-white
              flex
              items-center
              justify-center
              text-gray-700
              hover:bg-black
              hover:text-white
              hover:border-black
              transition-colors
              duration-300
              shadow-sm
            "

            aria-label="Previous Review"
          >
            <FiArrowLeft className="text-lg" />
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
              w-11
              h-11
              rounded-full
              border
              border-gray-300
              bg-white
              flex
              items-center
              justify-center
              text-gray-700
              hover:bg-black
              hover:text-white
              hover:border-black
              transition-colors
              duration-300
              shadow-sm
            "

            aria-label="Next Review"
          >
            <FiArrowRight className="text-lg" />
          </motion.button>

        </div>

      </div>

    </section>
  );
};

export default Review;