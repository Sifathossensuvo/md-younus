import React from 'react';
import { motion } from 'framer-motion';

const ProjectsBanner = () => {
  return (
    <div className="w-full bg-[#FAF3F0]  py-[140px]  flex flex-col items-center justify-center">
      {/* Animated text container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col text-center justify-center items-center max-w-[850px] mx-auto"
      >
        {/* Main Title */}
        <h1 className="text-[40px] md:text-[48px] font-medium text-[#1D1D1D] tracking-[-2px] mb-[18px]">
          My selected works
        </h1>

        {/* Description Paragraph */}
        <p className="text-[18px] md:text-[22px] font-light text-[#1d1d1d] leading-[150%] max-w-[850px] mx-auto">
          A collection of ideas turned into thoughtful experiences, purposeful interfaces, and products people enjoy using.
        </p>
      </motion.div>
    </div>
  );
};

export default ProjectsBanner;