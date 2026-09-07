
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import gmail from '../assets/gmail.svg'
import spinningText from '../assets/spinneing-text.svg'


// Arrow asset import (Make sure arrow.svg is in your assets folder)
import arrowSvg from '../assets/arrow.svg'; 

const Footer = () => {
  return (
    <footer className="w-full bg-[#1A1A1A] text-white pt-40 pb-10 font-sans relative overflow-visible">
 <div className='max-w-[1200px] mx-auto'>
         

            {/* Infinite Spinning Circular Badge */}
<Link to="/contact">
  <div className="absolute left-1/2 -translate-x-1/2 -top-20 border border-[#1D1D1D] rounded-full w-[150px] h-[150px]">

    {/* Rotating Circle */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 12,
        ease: "linear",
      }}
      className="w-full h-full relative flex items-center justify-center bg-[#FFE7A9] rounded-full border border-[#1d1d1d]"
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
      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center">
        <img
          src={gmail}
          alt=""
          className="w-[28px] h-[19px] object-contain"
        />
      </div>
    </div>

  </div>
</Link>

      {/* Container */}
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center relative z-10">
<div className=''>
    {/* div content */}
<div className='space-y-0 -mb-[50px]'>
        {/* --- MAIN HEADING WITH ANIMATION --- */}
        <motion.h2 
          initial={{ 
            opacity: 0, 
            y: 55, 
            scale: 0.94,
            filter: "blur(12px)"
          }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            filter: "blur(0px)"
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-4xl md:text-6xl lg:text-[70px] font-medium tracking-tight mb-[45px] leading-[1.1]"
        >
          Let's talk about <br /> your project.
        </motion.h2>

        {/* --- SUBTITLE WITH ANIMATION --- */}
        <motion.p 
          initial={{ 
            opacity: 0, 
            y: 35,
            filter: "blur(10px)"
          }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            filter: "blur(0px)"
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-white text-base md:text-[25px] max-w-[940px] mx-auto leading-[150%] mb-[48px] font-[350]"
        >
         Have an idea worth building? Let’s turn it into a thoughtful digital product that looks great, works seamlessly, and creates real value.
        </motion.p>

{/* ......button.... */}
<Link to="/contact">
  <div className="inline-block border mt-[30px] rounded-[10px] border-[#1d1d1d]">
    <button
    
    className="
      flex  items-center
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
    "
  >
    <span>Get in Touch</span>
  

  </button>
</div>
</Link>
</div>

{/* arrow */}
          <motion.div 
            initial={{ 
              opacity: 0,
              x: 35,
              y: 10,
              scale: 0.85,
              rotate: 4
            }}
            whileInView={{ 
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotate: 0
            }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.9,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            className=" w-[125.68px] h-[102.09]  ml-140 mb-[120px]"
          >
            {/* Pure White Arrow pointing directly to the button */}
          <motion.img  
            src={arrowSvg}  
            alt="Arrow pointing to button"  
            initial={{
              opacity: 0,
              pathLength: 0,
              x: 15
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }}
            animate={{
              y: [0, -4, 0]
            }}
            className="scale-x-100 w-[500px] rotate-[-12deg] filter invert brightness-0 opacity-100 ml-4 w-full"  
          />
            
            {/* Ultra-stylish Cursive/Handwritten Text */}

          </motion.div>
</div>


        {/* --- DIVIDER LINE --- */}
        <motion.div 
          initial={{
            opacity: 0,
            scaleX: 0,
            transformOrigin: "center"
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 1.1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="w-full h-[1px] bg-[#414141] opacity-5 mb-8 " 
        />


        {/* --- BOTTOM BAR: Copyright & Nav Links --- */}
        <motion.div 
          initial={{
            opacity: 0,
            y: 25,
            filter: "blur(6px)"
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="w-full flex flex-col md:flex-row items-center justify-between text-[#FFFFFF] text-sm gap-4"
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1]
            }}
            className='text-gray-400 font-[375]'
          >
            Copyright © 2026 By Younus
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="flex items-center gap-8 font-[525]"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </motion.div>
        </motion.div>

      </div>

 </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;