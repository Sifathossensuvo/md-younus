import React from 'react';
import { motion } from 'framer-motion';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';
import { BiShapeTriangle, BiHeart, BiStar } from 'react-icons/bi';
import { BsFlower1 } from 'react-icons/bs';
import icon1 from '../assets/table-icons/1.svg';
import icon2 from '../assets/table-icons/2.svg';
import icon3 from '../assets/table-icons/3.svg';
import icon4 from '../assets/table-icons/4.svg';
import icon5 from '../assets/table-icons/5.svg';
import icon6 from '../assets/table-icons/6.svg';
import icon7 from '../assets/table-icons/7.svg';
import icon8 from '../assets/table-icons/8.svg';
import icon9 from '../assets/table-icons/9.svg';
import icon10 from '../assets/table-icons/10.svg';
import icon11 from '../assets/table-icons/11.svg';
import icon12 from '../assets/table-icons/12.svg';

const Table = () => {
  // Exact 4 rows layout matching the reference image (4, 4, 3, 1 items)
  const rows = [
    [
      { name: "UX / Product Design", icon: icon1 },
      { name: "UI Design", icon: icon2 },
      { name: "Web Design", icon: icon3},
      { name: "Mobile App Design", icon: icon4 }
    ],
    [
      { name: "Design Systems", icon: icon5 },
      { name: "UX Research", icon: icon6},
      { name: "CRO Focused Website Design", icon: icon7 },
      { name: "Interaction Design", icon: icon8 }
    ],
    [
      { name: "Landing Page Design", icon: icon9 },
      { name: "Prototyping", icon: icon10},
      { name: "Dashboard & SaaS Design", icon: icon11 }
    ],
    [
      { name: "WordPress Development", icon: icon12 }
    ]
  ];

  return (
    <section className="w-full pt-40 pb-40 px-4 md:px-12 font-sans relative overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-[800px] mx-auto text-center mb-[70px]">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl tracking-[-2px] lg:text-[52px] font-medium text-[#1A1A1A]  mb-[35px]"
        >
          What’s on the Table
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-[#1D1D1D] font-[375] text-base md:text-[22px] max-w-[912px] mx-auto leading-relaxed"
        >
          Strategy, creativity, and thoughtful design come together to create digital experiences that solve real problems and deliver lasting value.
        </motion.p>
      </div>

      {/* Exact Grid Layout Container */}
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-5">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap items-center justify-center gap-5 w-full">
            {row.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.4, 
                  delay: (rowIndex * 0.1) + (index * 0.05), 
                  ease: "easeOut" 
                }}
                whileHover={{ y: -3, scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-white rounded-full border border-[#1D1D1D] px-6 py-3.5 flex items-center gap-2 cursor-pointer transition-all"
              >
               <img src={item.icon} className='' alt="" />
                <span className="text-sm md:text-[19px] font-medium text-gray-800 tracking-tight">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

    </section>
  );
};

export default Table;