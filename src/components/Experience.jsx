
import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const stats = [
    {
      id: 1,
      value: "98%",
      label: "Satisfied happy customers",
      strokeColor: "#E88CA3",
      fillColor: "#FDF4F5"
    },
    {
      id: 2,
      value: "8+",
      label: "Years of work experience",
      strokeColor: "#333333",
      fillColor: "#F5F5F5"
    },
    {
      id: 3,
      value: "80+",
      label: "Successful projects done",
      strokeColor: "#6A9BD8",
      fillColor: "#F0F5FC"
    },
    {
      id: 4,
      value: "10+",
      label: "Design awards received",
      strokeColor: "#5CB895",
      fillColor: "#F0F8F4"
    },
    {
      id: 5,
      value: "45",
      label: "Travelled around the country",
      strokeColor: "#E88CA3",
      fillColor: "#FDF4F5"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 45,
      scale: 0.92,
      filter: "blur(8px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="w-full bg-[#E3E3FF] pt-1 pb-12 border-b border-[#1D1D1D] px-4 md:px-12 font-sans relative overflow-hidden">

      {/* Background Glow 01 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.45, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        animate={{
          x: [0, 25, -15, 0],
          y: [0, -20, 15, 0]
        }}
        className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-pink-200/30 blur-[100px] pointer-events-none"
      />

      {/* Background Glow 02 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.4, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        animate={{
          x: [0, -25, 20, 0],
          y: [0, 20, -15, 0]
        }}
        className="absolute -bottom-40 -right-32 w-[450px] h-[450px] rounded-full bg-blue-200/30 blur-[110px] pointer-events-none"
      />

      {/* Tiny Floating Orb */}
      <motion.div
        animate={{
          y: [0, -18, 0],
          opacity: [0.25, 0.6, 0.25]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[22%] left-[8%] w-3 h-3 rounded-full bg-white/80 blur-[1px]"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.55, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-[25%] right-[10%] w-4 h-4 rounded-full bg-white/70 blur-[1px]"
      />

      {/* Section Header */}
      <div className="max-w-[900px] mx-auto text-center mb-16 relative z-10">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="inline-flex items-center gap-2 mb-5"
        >
          <motion.span
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-2 h-2 rounded-full bg-[#E88CA3]"
          />

          <span className="text-xs uppercase tracking-[0.25em] text-gray-500 font-semibold">
            Experience & Impact
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-4xl md:text-5xl lg:text-[52px] font-medium text-[#1A1A1A] tracking-tight mb-4"
        >
          My numbers say it all
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-gray-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          These numbers reflect the experience and consistency, and measurable impact behind the work I've delivered over the years.
        </motion.p>
      </div>

      {/* Cards Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15
        }}
        className="max-w-[1050px] mx-auto flex flex-col items-center gap-6 relative z-10"
      >

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

          {stats.slice(0, 3).map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.035,
                transition: {
                  duration: 0.35,
                  ease: "easeOut"
                }
              }}
              whileTap={{
                scale: 0.98
              }}
              className="group relative overflow-hidden bg-white rounded-full border border-gray-300/80 px-8 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex items-center justify-start gap-6 transition-shadow duration-500 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
            >

              {/* Moving Shine */}
              <motion.div
                initial={{
                  x: "-150%",
                  opacity: 0
                }}
                whileHover={{
                  x: "150%",
                  opacity: 1
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-[-20deg] pointer-events-none"
              />

              {/* Soft Hover Glow */}
              <div
                className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundColor: item.strokeColor
                }}
              />

              {/* Number */}
              <motion.span
                whileHover={{
                  scale: 1.12,
                  x: 3
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut"
                }}
                className="relative z-10 text-3xl md:text-[40px] font-bold tracking-tight"
                style={{
                  color: item.fillColor,
                  WebkitTextStroke: `1.5px ${item.strokeColor}`,
                  paintOrder: 'stroke fill'
                }}
              >
                {item.value}
              </motion.span>

              {/* Label */}
              <span className="relative z-10 text-normal md:text-[16px] font-medium text-gray-700 text-left leading-snug">
                {item.label}
              </span>

            </motion.div>
          ))}

        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[700px]">

          {stats.slice(3, 5).map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.035,
                transition: {
                  duration: 0.35,
                  ease: "easeOut"
                }
              }}
              whileTap={{
                scale: 0.98
              }}
              className="group relative overflow-hidden bg-white rounded-full border border-gray-300/80 px-8 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex items-center justify-start gap-6 transition-shadow duration-500 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
            >

              {/* Moving Shine */}
              <motion.div
                initial={{
                  x: "-150%",
                  opacity: 0
                }}
                whileHover={{
                  x: "150%",
                  opacity: 1
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-[-20deg] pointer-events-none"
              />

              {/* Soft Hover Glow */}
              <div
                className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundColor: item.strokeColor
                }}
              />

              {/* Number */}
              <motion.span
                whileHover={{
                  scale: 1.12,
                  x: 3
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut"
                }}
                className="relative z-10 text-3xl md:text-[40px] font-bold tracking-tight"
                style={{
                  color: item.fillColor,
                  WebkitTextStroke: `1.5px ${item.strokeColor}`,
                  paintOrder: 'stroke fill'
                }}
              >
                {item.value}
              </motion.span>

              {/* Label */}
              <span className="relative z-10 text-normal md:text-[16pxpx] font-medium text-gray-700 text-left leading-snug">
                {item.label}
              </span>

            </motion.div>
          ))}

        </div>

      </motion.div>

      {/* Bottom Decorative Line */}
      <motion.div
        initial={{
          width: 0,
          opacity: 0
        }}
        whileInView={{
          width: "120px",
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 1,
          delay: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="h-[1px] bg-gray-400/40 mx-auto mt-20 relative z-10"
      />

    </section>
  );
};

export default Experience;

