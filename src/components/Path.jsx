import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import process1 from "../assets/process1.svg";
import process2 from "../assets/process2.svg";
import process3 from "../assets/process.svg";
import process4 from "../assets/process4.svg";


const Path = () => {
  const steps = [
    {
      id: "(01)",
      title: "Problem Framing",
      description:
        "I explore insights, and market context to clearly define the problem. Research findings are translated into ideas that shape direction, inform decisions, and establish a strong foundation for the project.",
      bgColor: "bg-[#FBEBEA]",
       image: process1,
    },
    {
      id: "(02)",
      title: "Shaping the Idea",
      description:
        "Here, I refine initial ideas into clear concepts by aligning strategy and creativity. I develop structural directions that balance innovation with feasibility, while supporting both brand goals and user expectations.",
      bgColor: "bg-[#DBF5F0]",
       image: process2,
    },
    {
      id: "(03)",
      title: "Prototyping & Testing",
      description:
        "In this phase, I bring concepts to life through prototyping and real-world testing. I validate functionality, usability, and clarity by iterating on feedback, refining details, and resolving issues before final delivery.",
      bgColor: "bg-[#FFE3FB]",
       image: process3,
    },
    {
      id: "(04)",
      title: "Polishing the Outcome",
      description:
        "In the final stage of design, thorough attention is given to refine the product, ensuring it meets high standards of quality and functionality through testing, tweaking, and iteration to address any remaining issues.",
      bgColor: "bg-[#E3F2FF]",
       image: process4,
    },
  ];

  return (
    <section className="relative w-full bg-[#E3E3FF] px-4 py-25 sm:px-6 md:px-10 md:py-30 lg:px-12 lg:py-38">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        
        {/* =========================================
            LEFT SIDE
        ========================================= */}
        <div className="relative">
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
            

              <h2 className="max-w-[600px] text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-[#1A1A1A] sm:text-5xl md:text-[48px] lg:text-[48px]">
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
              className="mt-7 max-w-[530px] text-base leading-[1.75] text-gray-600 md:text-lg"
            >
              My working process revolves around an approach aimed at
              maximizing productivity and creativity with clarity and focus.
              It begins with thorough research and planning, where I gather
              relevant information and outline key objectives.
            </motion.p>

        <a
          className="
            inline-flex
            items-center
            gap-3
            px-6
            py-3
            rounded-[10px]
            border
            border-[#1D1D1D]
            text-gray-900
            text-sm
            font-medium
            hover:bg-black
            hover:text-white
            hover:border-black
            transition-all
            duration-300
            shadow-sm
            group/btn
            hover:cursor-pointer
            mt-8
          "
        >
          <span>Explore more</span>
        </a>
          </div>
        </div>

        {/* =========================================
            RIGHT SIDE
            PREMIUM STICKY CARD STACK
        ========================================= */}
        <div className="relative">
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
                    min-h-[420px]
                    w-full
                    rounded-[28px]
                    border
                    border-[#1D1D1D]
                    p-7
                    shadow-[0_25px_70px_rgba(0,0,0,0.07)]
                    sm:rounded-[32px]
                    sm:p-9
                    md:min-h-[460px]
                    md:p-12
                    ${step.bgColor}
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
                    <div className="flex items-center justify-between">
                      
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
                        className="flex h-18 w-18 items-center justify-center rounded-full border border-[#1D1D1D] p-[13px] bg-white shadow-sm md:h-20 md:w-20"
                      >
  
  <img
  src={step.image}
  alt={step.title}
  className="h-full w-full rounded-full object-cover"
/>
                      </motion.div>

                      {/* Number */}
                      <span className="text-sm font-normal tracking-[0.08em] text-gray-500 md:text-base">
                        {step.id}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="mt-10 md:mt-12">
                      <motion.h3
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.7,
                          delay: 0.35 + index * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-2xl font-medium tracking-[-0.03em] text-[#1A1A1A] sm:text-3xl"
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
                        className="mt-5 max-w-[600px] text-base leading-[1.75] text-gray-600 md:text-[17px]"
                      >
                        {step.description}
                      </motion.p>
                    </div>

                    {/* BOTTOM PROGRESS DOTS */}
                    <div className="mt-12 flex items-center gap-2">
                      {steps.map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`h-1 rounded-full transition-all duration-500 ${
                            dotIndex === index
                              ? "w-10 bg-gray-800"
                              : "w-2 bg-gray-400/40"
                          }`}
                        />
                      ))}
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