import React from 'react';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import gmail from '../assets/gmail.svg'
import spinningText from '../assets/spinneing-text.svg'



import profileImg from '../assets/profile.png'; //

const About = () => {
  // Skills Data Array (Ordered row-by-row matching your reference image with pastel colors)
  const skills = [
    { name: "UX / Product Design", level: "95%", width: "95%", color: "bg-[#D1E8E2]" },
    { name: "UI Design", level: "95%", width: "95%", color: "bg-[#E3ECCF]" },
    { name: "Web Design", level: "85%", width: "85%", color: "bg-[#F9D5E5]" },
    { name: "Design Systems", level: "80%", width: "80%", color: "bg-[#E4D8F4]" },
    { name: "UX Research", level: "90%", width: "90%", color: "bg-[#D1F2EB]" },
    { name: "Prototyping", level: "90%", width: "90%", color: "bg-[#FCF3CF]" },
    { name: "Figma", level: "92%", width: "92%", color: "bg-[#D1E8E2]" },
    { name: "WordPress", level: "60%", width: "60%", color: "bg-[#E3ECCF]" },
    { name: "HTML / CSS", level: "85%", width: "85%", color: "bg-[#F9D5E5]" },
    { name: "Adobe Photoshop", level: "80%", width: "80%", color: "bg-[#E4D8F4]" },
    { name: "Adobe Illustrator", level: "90%", width: "90%", color: "bg-[#D1F2EB]" },
    { name: "Interaction Design", level: "70%", width: "70%", color: "bg-[#FCF3CF]" }
  ];

  return (
    <section id='about' className="w-full bg-white mt-40 mb-3 px-4 md:px-12 font-sans relative overflow-hidden">
      
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-30">
        
        {/* --- LEFT SIDE: Profile Image Card with Inner Spinning Badge --- */}
        {/* --- LEFT SIDE: Profile Image Card with Inner Spinning Badge --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full mt-2 mx-h-[660px] max-w-[560px]"
        >
          {/* Pink Background Card Container (Fixed with GPU rendering style for perfect border radius) */}
          <div 
            className="w-full bg-[#FCECEF] rounded-[20px] overflow-hidden border border-[#1D1D1D] shadow-[0_15px_40px_rgba(0,0,0,0.03)] relative"
            style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
          >
            <img 
              src={profileImg} 
              alt="Younus" 
              className="w-full h-auto object-cover block"
              style={{ transform: 'translateZ(0)' }}
            />
            
            {/* Infinite Spinning Circular Badge */}
<div className="absolute bottom-6 border border-[#1D1D1D] rounded-full left-6 md:bottom-[30px] md:left-[30px] w-[150px] h-[150px] pointer-events-none z-10">

  {/* Rotating Circle */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      repeat: Infinity,
      duration: 12,
      ease: "linear",
    }}
    className="w-full  h-full relative flex items-center justify-center bg-[#E3F2FF] rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-gray-100"
  >

    {/* SVG Text Image */}
    <img
      src={spinningText}
      alt=""
      className="absolute inset-0 w-full h-full object-contain p-4"
    />

  </motion.div>

  {/* Static Center Mail Icon */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center ">
      <img
        src={gmail}
        alt=""
        className="w-[28px] h-[19px] object-contain"
      />
    </div>
  </div>

</div>

          </div>
        </motion.div>

        {/* --- RIGHT SIDE: Heading, Bio, and Skill Progress Bars --- */}
        <div className="w-full  flex flex-col items-start text-left">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[52px] font-medium text-[#1A1A1A]  mb-6 tracking-[-2px]"
          >
            Hey! That’s me.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#1D1D1D]  text-base md:text-lg leading-relaxed mb-6"
          >
            I am Younus, a multidisciplinary designer and blogger based in the vibrant city of Los Angeles. With a keen eye for aesthetics and a knack for innovative solutions, I thrive in the dynamic intersection of design.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#1D1D1D] text-base md:text-[17px] leading-[160%] mb-6"
          >
            My journey in this dynamic and ever-evolving field has been a testament to my unwavering passion for meticulously crafting meaningful user experiences, leveraging cutting-edge technologies, and fearlessly pushing the boundaries of digital creativity.
          </motion.p>

          {/* Skills Grid (2 Columns Layout with 12 Skills matching the reference design) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 w-full">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + (index * 0.05) }}
                className="flex flex-col w-full"
              >
                {/* Skill Title & Percentage */}
                <div className="flex justify-between items-center mb-[16px]">
                  <span className="text-sm md:text-[15px] font-medium text-[#1D1D1D]">
                    {skill.name}
                  </span>
                  <span className="text-sm md:text-[15px] font-medium text-[#1D1D1D]">
                    {skill.level}
                  </span>
                </div>

                {/* Capsule Progress Track */}
                <div className="w-full h-2.5 bg-white rounded-full overflow-hidden border border-[#1D1D1D]  shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 + (index * 0.05), ease: "easeOut" }}
                    className={`h-full rounded-l-full border-r border-r-[#1D1D1D] ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;