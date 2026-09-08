import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Assets folder theke image gulo import kore nao
import rainbowImg from '../assets/rainbow.svg';
import planeImg from '../assets/plane.svg';
import addressIcon from '../assets/address.svg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');
  const [openFaq, setOpenFaq] = useState(0);

  const sendEmail = async (e) => {
    e.preventDefault();

    setSending(true);
    setStatus('');

    try {
await emailjs.sendForm(
  'service_a3cn27e',
  'template_rtd1bqb',
  form.current,
  {
    publicKey: 'IzJPSJPsCRjsCeeHX',
  }
);

      setStatus('Message sent successfully!');

      form.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="w-full bg-white">

{/* 1. Uporer Purple Banner Section */}
      <div className="w-full pt-[140px] bg-[#E3E3FF] pb-[420px] relative overflow-hidden max-sm:pt-[90px] max-sm:pb-[300px]">

        {/* Banner er vitor shobkichu 1200px container-er moddhe thakbe */}
        <div className="max-w-[1200px] mx-auto px-4 relative">

          {/* Left Asset: Rainbow Icon */}
          <motion.div 
            className="absolute left-4 md:left-8 top-16 hidden lg:block w-28 z-20 pointer-events-none"
            animate={{ 
              y: [-10, 10, -10],
              rotate: [-2, 3, -2]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            {/* Claude-style Lighting Beams / Sparkles */}
            <motion.div 
              className="absolute -top-3 -left-3 w-2 h-2 rounded-full bg-white blur-[1px]"
              animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-1/2 -right-2 w-1.5 h-1.5 rounded-full bg-purple-400 blur-[1px]"
              animate={{ scale: [0, 1.8, 0], opacity: [0, 0.8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            />
            <motion.div 
              className="absolute -bottom-2 left-1/3 w-2 h-2 rounded-full bg-indigo-300 blur-[1px]"
              animate={{ scale: [0, 1.4, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            />

            <img
              src={rainbowImg}
              alt="Rainbow"
              className="w-full h-auto object-contain drop-shadow-md"
            />
          </motion.div>

          {/* Right Asset: Paper Airplane Icon */}
          <motion.div 
            className="absolute right-4 md:right-8 top-5 hidden lg:block w-32 z-20 pointer-events-none"
            animate={{ 
              y: [12, -12, 12],
              rotate: [3, -4, 3],
              x: [-5, 5, -5]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            {/* Claude-style Lighting Beams / Sparkles */}
            <motion.div 
              className="absolute -top-2 right-4 w-2 h-2 rounded-full bg-white blur-[1px]"
              animate={{ scale: [0, 1.6, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
            <motion.div 
              className="absolute bottom-2 -left-3 w-1.5 h-1.5 rounded-full bg-indigo-400 blur-[1px]"
              animate={{ scale: [0, 1.5, 0], opacity: [0, 0.9, 0] }}
              transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div 
              className="absolute -bottom-3 right-1/2 w-2 h-2 rounded-full bg-purple-300 blur-[1px]"
              animate={{ scale: [0, 1.7, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />

            <img
              src={planeImg}
              alt="Paper Airplane"
              className="w-full h-auto object-contain drop-shadow-md"
            />
          </motion.div>

          {/* Heading & Subtitle */}
          <div className="max-w-3xl mx-auto text-center relative z-10 max-sm:w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1 className="text-3xl md:text-5xl font-medium text-[#1D1D1D] tracking-[-2px] mb-[18px] leading-[56px] max-sm:text-[30px] max-sm:leading-[115%] max-sm:tracking-[-1px] max-sm:mb-[14px]">
                How can I help you with your
                <br className="hidden sm:block" />
                next project?
              </h1>

              <p className="text-[#1d1d1d] text-base md:text-[22px] mx-auto font-[350] leading-[150%] max-sm:text-[15px] max-sm:leading-[165%] max-sm:max-w-[340px]">
                Have an idea or a clear vision? Let's turn it into a meaningful
                <br className="hidden sm:block" />
                digital experience.
              </p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* 2. Nicher Form Card Container */}
      <div className="max-w-[1200px] mx-auto px-3 sm:px-4 -mt-[280px] relative z-20 pb-20 sm:pb-28 md:pb-[160px] max-sm:-mt-[210px] max-sm:px-4 max-sm:pb-[90px]">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            bg-white
            rounded-[20px]
            border-[1px]
            border-[#1d1d1d]
            px-8
            py-10
            sm:px-12
            sm:py-12
            md:px-[90px]
            md:py-[90px]
            lg:px-[100px]
            lg:py-[100px]
            grid
            grid-cols-1
            md:grid-cols-[1fr_1fr]
            gap-12
            md:gap-[70px]
            lg:gap-[120px]
            items-start

            max-sm:px-5
            max-sm:py-7
            max-sm:gap-10
            max-sm:rounded-[18px]
          "
        >

          {/* Left Column: Contact Info */}
          <div className="flex flex-col">

            {/* Intro */}
            <div>
              <h2 className="
                text-[30px]
                sm:text-[32px]
                md:text-[36px]
                leading-[1.15]
                font-medium
                tracking-[-1.14px]
                text-[#1d1d1d]
                mb-[12px]

                max-sm:text-[27px]
                max-sm:tracking-[-0.8px]
              ">
                Let's get in touch
              </h2>

              <p className="
                text-[16px]
                sm:text-[16px]
                leading-[160%]
                font-[375]
                text-[#1d1d1d]
                max-w-[350px]

                max-sm:text-[14px]
                max-sm:leading-[160%]
              ">
                Have a project, idea, or opportunity in mind?
                <br />
                Let’s connect and explore what we can create
                <br className="hidden sm:block" />
                together.
              </p>
            </div>

            {/* Contact Details */}
            <div className="mt-[48px] sm:mt-[52px] md:mt-[50px] space-y-[30px] max-sm:mt-9 max-sm:space-y-6">

              {/* Address */}
              <div className="flex items-start gap-[25px] max-sm:gap-4">

                <div className="
                  w-[40px]
                  h-[43px]
                  shrink-0
                  flex
                  items-center
                  justify-center
                  relative
                  mt-[1px]

                  max-sm:w-[34px]
                  max-sm:h-[37px]
                ">
                  <img
                    src={addressIcon}
                    alt="Address"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="pt-[0px]">
                  <p className="
                    text-[18px]
                    sm:text-[18px]
                    leading-[-0.4px]
                    font-medium
                    text-[#1d1d1d]
                    mb-[5px]

                    max-sm:text-[16px]
                  ">
                    Address
                  </p>

                  <p className="
                    text-[16px]
                    font-[375]
                    text-[#1d1d1d]

                    max-sm:text-[14px]
                  ">
                    Savar, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-[25px] max-sm:gap-4">

                <div className="
                   w-[40px]
                  h-[43px]
                  shrink-0
                  flex
                  items-center
                  justify-center
                  mt-[0px]

                  max-sm:w-[34px]
                  max-sm:h-[37px]
                ">
                  <img
                    src={phoneIcon}
                    alt="Phone"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <p className="
                    text-[18px]
                    sm:text-[18px]
                    leading-[-0.4px]
                    font-medium
                    text-[#1d1d1d]
                    mb-[5px]

                    max-sm:text-[16px]
                  ">
                    Phone
                  </p>

                  <p className="
                    text-[16px]
                    font-[375]
                    text-[#1d1d1d]

                    max-sm:text-[14px]
                  ">
                    +880 1729 324 206
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-[25px] max-sm:gap-4">

                <div className="
                  w-[40px]
                  h-[43px]
                  shrink-0
                  flex
                  items-center
                  justify-center
                  mt-[0px]

                  max-sm:w-[34px]
                  max-sm:h-[37px]
                ">
                  <img
                    src={emailIcon}
                    alt="Email"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <p className="
                   text-[18px]
                    sm:text-[18px]
                    leading-[-0.4px]
                    font-medium
                    text-[#1d1d1d]
                    mb-[5px]

                    max-sm:text-[16px]
                  ">
                    E-mail
                  </p>

                  <p className="
                    text-[16px]
                    font-[375]
                    text-[#1d1d1d]

                    max-sm:text-[13px]
                    max-sm:break-all
                  ">
                    rubel.monpura@gmail.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Form Inputs */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full"
          >

            <div className="w-full">

              {/* Name Field */}
              <div className="mb-[37px] max-sm:mb-7">
                <label className="
                  block
                  text-[14px]
                  sm:text-[14px]
                  leading-none
                  font-[375]
                  text-[#888888]
                  mb-[10px]
                ">
                  Name
                </label>

                <input
                  type="text"
                  name="user_name"
                  placeholder="What is your name?"
                  required
                  className="
                    w-full
                    h-[30px]
                    bg-transparent
                    border-0
                    border-b-[1.5px]
                    border-[#1d1d1d]
                    rounded-none
                    pb-[10px]
                    pt-0
                    text-[16px]
                    sm:text-[16px]
                    font-[375]
                    text-[#1d1d1d]
                    placeholder:text-[#1d1d1d]
                    focus:outline-none
                    focus:border-[#222222]
                    transition-colors
                  "
                />
              </div>

              {/* Email Field */}
              <div className="mb-[37px] max-sm:mb-7">
                <label className="
                  block
                  text-[14px]
                  sm:text-[14px]
                  leading-none
                  font-[375]
                  text-[#888888]
                  mb-[10px]
                ">
                  Email
                </label>

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your email address*"
                  required
                  className="
                    w-full
                    h-[34px]
                    bg-transparent
                    border-0
                    border-b-[1.5px]
                    border-[#1d1d1d]
                    rounded-none
                    pb-[10px]
                    pt-0
                    text-[15px]
                    sm:text-[16px]
                    font-normal
                    text-[#242424]
                    placeholder:text-[#292929]
                    focus:outline-none
                    focus:border-[#222222]
                    transition-colors
                  "
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="
                   block
                  text-[14px]
                  sm:text-[14px]
                  leading-none
                  font-[375]
                  text-[#888888]
                  mb-[10px]
                ">
                  Message
                </label>

                <textarea
                  name="message"
                  placeholder="Tell me about your idea*"
                  rows={4}
                  required
                  className="
                    w-full
                    h-[150px]
                    resize-none
                    bg-transparent
                    border-0
                    border-b-[1.5px]
                    border-[#1d1d1d]
                    rounded-none
                    pb-[10px]
                    pt-0
                    text-[15px]
                    sm:text-[16px]
                    font-normal
                    text-[#242424]
                    placeholder:text-[#292929]
                    focus:outline-none
                    focus:border-[#222222]
                    transition-colors

                    max-sm:h-[120px]
                  "
                />
              </div>

            </div>

{/* Submit Button */}
<div className="mt-[40px] sm:mt-[42px] max-sm:mt-8">
  <div className="inline-block border rounded-[10px] border-[#1d1d1d]">
    <button
      type="submit"
      disabled={sending}
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
        tracking-[-0.3px]

        active:scale-95
        active:shadow-[inset_0_-2px_4px_rgba(29,29,29,0.15)]
        transition-all duration-200 ease-in-out
        cursor-pointer
        outline-none

        hover:bg-[#FFE3FB]

        disabled:opacity-60
        disabled:cursor-not-allowed

        max-sm:w-[160px]
        max-sm:h-[50px]
        max-sm:text-[13px]
      "
    >
      <span>
        {sending ? 'Sending...' : 'Send Message'}
      </span>
    </button>
  </div>
</div>

{/* Status Message */}
{status && (
  <p
    className={`mt-4 text-sm ${
      status.includes('successfully')
        ? 'text-green-600'
        : 'text-red-500'
    } max-sm:text-[12px]`}
  >
    {status}
  </p>
)}

          </form>

        </motion.div>
      </div>

      {/* 3. FAQ / Need More Details Section */}
<section className="w-full bg-white pb-[190px] max-sm:pb-[90px]">
  <div className="w-full max-w-[1200px] mx-auto px-[120px] max-sm:px-4">

    {/* FAQ Heading */}
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-center"
    >
      <h2 className="text-[48px] font-medium tracking-[-2px] text-[#1d1d1d] max-sm:text-[30px] max-sm:leading-[115%] max-sm:tracking-[-1px]">
        Need more details?
      </h2>

      <p className="mt-[18px] text-[22px] leading-[150%] font[350] text-[#1d1d1d] max-sm:mt-3 max-sm:text-[15px] max-sm:leading-[165%]">
        A few answers to the questions clients often have before
        <br className="hidden sm:block" />
        starting a project together.
      </p>
    </motion.div>

    {/* FAQ Items */}
    <div className="mt-[70px] flex flex-col gap-[25px] max-sm:mt-9 max-sm:gap-4">

      {[
        {
          question: 'Do you create custom design solutions?',
          answer:
            'Yes. Every project is shaped around its unique goals, users, and challenges. I focus on creating thoughtful solutions that are visually refined, practical, and built to scale.',
        },
        {
          question: 'What types of projects do you work on?',
          answer:
            'I work on websites, landing pages, portfolio websites, brand experiences, and custom digital products tailored to each project’s goals.',
        },
        {
          question: "Can you help if my idea isn't fully defined?",
          answer:
            'Absolutely. You do not need to have everything figured out before starting. We can explore your idea together and turn it into a clear direction.',
        },
        {
          question: 'How do we collaborate throughout the project?',
          answer:
            'We stay connected throughout the project with clear communication, feedback rounds, progress updates, and an organized workflow from start to finish.',
        },
        {
          question: 'What does your design process look like?',
          answer:
            'The process usually starts with understanding the goals, followed by research, direction, design, refinement, and final delivery.',
        },
      ].map((faq, index) => {
        const isOpen = openFaq === index;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full"
          >

            <div className="w-full rounded-[20px] border-[1px] border-[#1d1d1d] bg-white overflow-hidden max-sm:rounded-[16px]">

              {/* Question */}
              <button
                type="button"
                onClick={() => setOpenFaq(index)}
                className="
                  flex
                  w-full
                  min-h-[64px]
                  cursor-pointer
                  items-center
                  justify-between
                  px-[24px]
                  
                  text-left
                  text-[19px]
                 
                  font-medium
                  tracking-[-0.4px]
                  text-[#1d1d1d]
                  outline-none

                  max-sm:min-h-[60px]
                  max-sm:px-4
                  max-sm:text-[15px]
                  max-sm:leading-[140%]
                  max-sm:tracking-[-0.2px]
                "
              >
                <span>{faq.question}</span>

<motion.span
  animate={{
    rotate: 0,
  }}
  transition={{
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    ml-5
    shrink-0
    text-[22px]
    w-5
    h-5
    leading-none
    font-normal

    max-sm:ml-3
    max-sm:text-[20px]
    max-sm:w-4
    max-sm:h-4
  "
>
  {isOpen ? "-" : "+"}
</motion.span>
              </button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  gridTemplateRows: isOpen ? '1fr' : '0fr',
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{
                  gridTemplateRows: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  opacity: {
                    duration: 0.3,
                    ease: 'easeOut',
                  },
                }}
                className="grid overflow-hidden"
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="px-[21px] pb-[18px] text-[16px] leading-[26px] font-[375] tracking-[-0.4px] text-[#1d1d1d] max-sm:px-4 max-sm:pb-4 max-sm:text-[14px] max-sm:leading-[155%] max-sm:tracking-[-0.2px]">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>

            </div>

          </motion.div>
        );
      })}

    </div>

  </div>
</section>

    </div>
  );
};

export default Contact;