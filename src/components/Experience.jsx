

import { motion } from 'framer-motion';

const Experience = () => {
  const stats = [
    {
      id: 1,
      value: "98%",
      label: <>Satisfied happy <br /> customers</>,
      strokeColor: "#1d1d1d",
      fillColor: "#FBEBEA"
    },
    {
      id: 2,
      value: "8+",
      label: <>Years of work <br />experience</>,
      strokeColor: "#1d1d1d",
      fillColor: "#E3E3FF"
    },
    {
      id: 3,
      value: "800+",
      label: <>Successful <br /> projects done</>,
      strokeColor: "#1d1d1d",
      fillColor: "#E3F2FF"
    },
    {
      id: 4,
      value: "04+",
      label: <>Design awards <br /> received</>,
      strokeColor: "#1d1d1d",
      fillColor: "#DBF5F0"
    },
    {
      id: 5,
      value: "06",
      label: <>Travelled around <br /> the country</>,
      strokeColor: "#1d1d1d",
      fillColor: "#FFE3FB"
    },
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
    <section className="w-full bg-[#E3E3FF] pt-1 pb-[160px] border-b border-[#1D1D1D] px-4 md:px-12 font-sans relative overflow-hidden">

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
      <div className="max-w-[1200px] mx-auto text-center mb-[70px] relative z-10">


   <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
          className="text-4xl md:text-5xl lg:text-[48px] font-medium w-[850px] mx-auto text-[#1D1D1D] tracking-[-2] mb-[18px]"
        >
          The numbers tell the story
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
          className="text-[#1d1d1d] text-lg md:text-[22px] max-w-[940px] mx-auto font-[375] leading-[150%]"
        >
         Years of experience, countless design decisions, and measurable results these numbers reflect the consistency, impact, and value I bring to every project.
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
<div className="flex flex-wrap justify-center gap-6 w-full">

  {stats.slice(0, 3).map((item) => (
    <motion.div
      key={item.id}
      variants={cardVariants}
      
     
      className="group relative overflow-hidden bg-white rounded-full border border-[#1d1d1d] h-[92px] w-fit px-[30px] flex items-center justify-start gap-[16px]"
    >

      {/* Moving Shine */}
      <motion.div

       
        className="absolute inset-0   to-transparent skew-x-[-20deg] pointer-events-none"
      />

      {/* Soft Hover Glow */}
      <div
        className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full blur-2xl opacity-0 s pointer-events-none"
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
        className="relative z-10 text-3xl md:text-[54px] font-semibold tracking-tight"
        style={{
          color: item.fillColor,
          WebkitTextStroke: `2.5px ${item.strokeColor}`,
          paintOrder: 'stroke fill'
        }}
      >
        {item.value}
      </motion.span>

      {/* Label */}
      <span className="relative z-10 text-normal md:text-[16px] font-[375] text-[#1d1d1d] text-left leading-[150%]">
        {item.label}
      </span>

    </motion.div>
  ))}

</div>

        {/* Bottom Row */}
        <div className="flex justify-center flex-wrap gap-6 w-full">

          {stats.slice(3, 5).map((item) => (
    <motion.div
      key={item.id}
      variants={cardVariants}
      
     
      className="group relative overflow-hidden bg-white rounded-full border border-[#1d1d1d] h-[92px] w-fit px-[30px] flex items-center justify-start gap-[16px]"
    >

      {/* Moving Shine */}
      <motion.div

       
        className="absolute inset-0   to-transparent skew-x-[-20deg] pointer-events-none"
      />

      {/* Soft Hover Glow */}
      <div
        className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full blur-2xl opacity-0 s pointer-events-none"
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
        className="relative z-10 text-3xl md:text-[54px] font-semibold tracking-tight"
        style={{
          color: item.fillColor,
          WebkitTextStroke: `2.5px ${item.strokeColor}`,
          paintOrder: 'stroke fill'
        }}
      >
        {item.value}
      </motion.span>

      {/* Label */}
      <span className="relative z-10 text-normal md:text-[16px] font-[375] text-[#1d1d1d] text-left leading-[150%]">
        {item.label}
      </span>

    </motion.div>
          ))}

        </div>

      </motion.div>



    </section>
  );
};

export default Experience;

