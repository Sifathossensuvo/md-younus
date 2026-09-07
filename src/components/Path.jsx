import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import process1 from "../assets/process1.svg";
import process2 from "../assets/process2.svg";
import process3 from "../assets/process.svg";
import process4 from "../assets/process4.svg";
import { Link } from "react-router-dom";


const Path = () => {
  const steps = [
    {
      id: "01",
      title: "Discover What Matters",
      description:
        "I start by getting to the heart of the problem. I explore users, business goals, existing experiences, and market context to understand what needs to be solved and why before making any design decisions.",
      bgColor: "bg-[#FBEBEA]",
      image: process1,
    },
    {
      id: "02",
      title: "Find the Right Direction",
      description:
        "With the right insights in place, I define the direction. I connect user needs with business objectives to create a clear strategy and structure for the experience that guides the design forward.",
      bgColor: "bg-[#DBF5F0]",
      image: process2,
    },
    {
      id: "03",
      title: "Design & Validate",
      description:
        "I turn ideas into intuitive interfaces and interactive prototypes, then test and refine them through feedback. Every iteration helps make the experience clearer, easier, and more effective.",
      bgColor: "bg-[#FFE3FB]",
      image: process3,
    },
    {
      id: "(04)",
      title: "Refine & Deliver",
      description:
        "I obsess over the details that make a product feel complete. From usability and visual consistency to responsive behavior, I refine, test, and prepare the final experience for real-world use.",
      bgColor: "bg-[#E3F2FF]",
      image: process4,
    },
  ];

  return (
    <section className="relative w-full bg-[#E3E3FF] px-4 py-25 sm:px-6 md:px-10 md:py-30 lg:px-12 lg:py-38 max-sm:px-4 max-sm:py-20">
      <div className="mx-auto flex w-full max-w-[1200px] justify-between max-sm:flex-col max-sm:gap-12">

        {/* =========================================
            LEFT SIDE
        ========================================= */}
        <div className="relative max-sm:w-full">
          <div className="lg:sticky lg:top-28 w-[550px] max-sm:w-full">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <h2 className="text-4xl font-medium leading-[120%] tracking-[-2px] text-[#1A1A1A] sm:text-5xl md:text-[48px] lg:text-[48px] max-sm:text-[34px] max-sm:leading-[118%] max-sm:tracking-[-1.5px]">
                High-quality work with real value considered.
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-[18px] text-base leading-[160%] text-[#1d1d1d] md:text-[16px] max-sm:text-[15px] max-sm:leading-[165%]"
            >
              My process blends research, strategy, and creativity to turn complex ideas into clear, purposeful experiences. I start by understanding the problem, users, and goals before shaping solutions that are both meaningful and effective.
            </motion.p>

            <Link to="/contact">
              <div className="inline-block border mt-[30px] rounded-[10px]">
                <button
                  className="
                    flex items-center
                    px-6 h-[54px]
                    justify-center
                    bg-white text-[#1d1d1d]
                    font-medium text-base
                    rounded-[10px]
                    border-b-5 border-[#ddd]
                    w-[180px]
                    text-[14px]
                    tracking-[-0.3]
                    active:scale-95
                    active:shadow-[inset_0_-2px_4px_rgba(29,29,29,0.15)]
                    transition-all duration-200 ease-in-out
                    cursor-pointer
                    outline-none
                    hover:bg-[#FFE3FB]
                    max-sm:w-[165px]
                    max-sm:h-[50px]
                  "
                >
                  <span>Explore More</span>
                  {/* dasdfsadfasfsa */}
                </button>
              </div>
            </Link>
          </div>
        </div>

        {/* =========================================
            RIGHT SIDE
            PREMIUM STICKY CARD STACK
        ========================================= */}
        <div className="relative max-sm:w-full">
          <div className="relative">
            {steps.map((step, index) => {
              /*
               * Every card gets a different sticky position.
               * This creates the physical "one card over another"
               * stacking effect while scrolling.
               */
              const desktopTop = 112 + index * 18;

              return (
                <motion.div
                  key={step.id}
                  initial={{
                    opacity: 0,
                    y: 80,
                    scale: 0.96,
                    rotateX: 5,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    top: `calc(${desktopTop}px)`,
                    zIndex: index + 1,
                  }}
                  className={`
                    sticky
                    mb-6
                    
                    w-[520px]
                    rounded-[20px]
                    border
                    border-[#1D1D1D]
                    p-7
                    
                    sm:rounded-[20px]
                    sm:p-9
                   
                    md:p-[35px]
                    ${step.bgColor}

                    max-sm:w-full
                    max-sm:rounded-[16px]
                    max-sm:p-5
                    max-sm:mb-5
                    max-sm:static
                  `}
                >
                  {/* Card inner animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.25 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex h-full flex-col justify-between"
                  >
                    {/* TOP */}
                    <div className="flex items-start justify-between">

                      {/* Icon */}
                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.08,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                        className="flex h-18 w-18 items-center justify-center rounded-full border border-[#1D1D1D] p-[13px] bg-white md:h-18 md:w-18 max-sm:h-[62px] max-sm:w-[62px] max-sm:p-[11px]"
                      >

                        <img
                          src={step.image}
                          alt={step.title}
                          className="h-[42px] w-[42px] object-cover max-sm:h-[34px] max-sm:w-[34px]"
                        />
                      </motion.div>

                      {/* Number */}
                      <span
                        className="
                          text-[10px]
                          md:text-[12px]
                          font-medium
                          text-[#1d1d1d]
                          flex
                          items-center
                          uppercase
                          h-[18px]
                          bg-[#1d1d1d1a]
                          px-[8px]
                          rounded-[4px]
                          max-sm:text-[10px]
                          max-sm:h-[17px]
                          max-sm:px-[7px]
                        "
                      >
                        Step - {step.id}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="mt-10 md:mt-[30px] max-sm:mt-7">
                      <motion.h3
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.7,
                          delay: 0.35 + index * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-[22px] font-medium tracking-[-0.38] text-[#1A1A1A] sm:text-3xl max-sm:text-[21px] max-sm:leading-[125%]"
                      >
                        {step.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.7,
                          delay: 0.42 + index * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-5 text-base font-[375] leading-[160%] text-[#1d1d1d] md:text-[16px] max-sm:mt-4 max-sm:text-[14px] max-sm:leading-[165%]"
                      >
                        {step.description}
                      </motion.p>
                    </div>

                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Path;