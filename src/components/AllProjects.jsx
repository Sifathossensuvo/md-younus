import ProjectsBanner from "./ProjectsBanner";
import { motion } from "framer-motion";

// Project images (Tomar assets folder er path onujayi thik kore nio)
import work1 from '../assets/projects-thumbnail/Thumbnail.png';
import work2 from '../assets/projects-thumbnail/Thumbnail-1.png';
import work3 from '../assets/projects-thumbnail/Thumbnail-2.png';
import work4 from '../assets/projects-thumbnail/Thumbnail-3.png';
import work5 from '../assets/projects-thumbnail/Thumbnail-4.png';
import work6 from '../assets/projects-thumbnail/Thumbnail-5.png';
import work7 from '../assets/projects-thumbnail/Thumbnail-6.png';
import work8 from '../assets/projects-thumbnail/Thumbnail-7.png';
import work9 from '../assets/projects-thumbnail/Thumbnail-8.png';
import work10 from '../assets/projects-thumbnail/Thumbnail-9.png';
import work11 from '../assets/projects-thumbnail/Thumbnail-10.png';
import work12 from '../assets/projects-thumbnail/Thumbnail-11.png';
import work13 from '../assets/projects-thumbnail/Thumbnail-12.png';
import work14 from '../assets/projects-thumbnail/Thumbnail-13.png';
import work15 from '../assets/projects-thumbnail/Thumbnail-14.png';
import work16 from '../assets/projects-thumbnail/Thumbnail-15.png';
import work17 from '../assets/projects-thumbnail/Thumbnail-16.png';
import work18 from '../assets/projects-thumbnail/Thumbnail-17.png';
import work19 from '../assets/projects-thumbnail/Thumbnail-18.png';
import work20 from '../assets/projects-thumbnail/Thumbnail-19.png';
import work21 from '../assets/projects-thumbnail/Thumbnail-20.png';
import work22 from '../assets/projects-thumbnail/Thumbnail-21.png';
import work23 from '../assets/projects-thumbnail/Thumbnail-22.png';
import work24 from '../assets/projects-thumbnail/Thumbnail-23.png';
import work25 from '../assets/projects-thumbnail/Thumbnail-24.png';
import work26 from '../assets/projects-thumbnail/Thumbnail-25.png';
import work27 from '../assets/projects-thumbnail/Thumbnail-26.png';
import work28 from '../assets/projects-thumbnail/Thumbnail-27.png';
import work29 from '../assets/projects-thumbnail/Thumbnail-28.png';
import work30 from '../assets/projects-thumbnail/Thumbnail-29.png';
import work31 from '../assets/projects-thumbnail/Thumbnail-30.png';
import work32 from '../assets/projects-thumbnail/Thumbnail-31.png';
import work33 from '../assets/projects-thumbnail/Thumbnail-32.png';
import work34 from '../assets/projects-thumbnail/Thumbnail-33.png';
import work35 from '../assets/projects-thumbnail/Thumbnail-34.png';
import work36 from '../assets/projects-thumbnail/Thumbnail-35.png';
import work37 from '../assets/projects-thumbnail/Thumbnail-36.png';
import work38 from '../assets/projects-thumbnail/Thumbnail-37.png';
import work39 from '../assets/projects-thumbnail/Thumbnail-38.png';
import work40 from '../assets/projects-thumbnail/Thumbnail-39.png';


import arrow from '../assets/bannerarrow.svg'
import { useRef, useState } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";
// data
const allWorksData = [
  {
    id: 1,
    title: "Wren Contracts - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work1,
    liveLink: "https://www.wrencontracts.com/"
  },
  {
    id: 1,
    title: "Royston Glass - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work2,
    liveLink: "https://roystonglass.co.uk/"
  },
  {
    id: 1,
    title: "University of Sheffield | EIC - Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work3,
    liveLink: "https://eic.sheffield.ac.uk/"
  },
  {
    id: 1,
    title: "Becertain - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work4,
    liveLink: "https://becertain.ai/"
  },
  {
    id: 1,
    title: "ArreoBlue - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work5,
    liveLink: "https://www.arreoblue.com/"
  },
  {
    id: 1,
    title: "Hipco - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work6,
    liveLink: "https://hipco.co.uk/"
  },
  {
    id: 1,
    title: "Medicine Drop - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work7,
    liveLink: "https://medicinedrop.co.uk/"
  },
  {
    id: 1,
    title: "Tedbar Tools - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work8,
    liveLink: "https://tedbartools.co.uk/"
  },
  {
    id: 1,
    title: "Westpack - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work9,
    liveLink: "https://westpack.co.uk/"
  },
  {
    id: 1,
    title: "Playinltd - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work10,
    liveLink: "https://playinltd.com/"
  },
  {
    id: 1,
    title: "S.P. Fields - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work11,
    liveLink: "https://spfields.co.uk/"
  },
  {
    id: 1,
    title: "Furd - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work12,
    liveLink: "https://furd.org/"
  },
  {
    id: 1,
    title: "ShopLentor - WordPress Plugin",
    category: "ui/ux designer",
    studio: "Hastech",
    studioLink: "https://hastechit.com/",
    image: work13,
    liveLink: "https://woolentor.com/"
  },
  {
    id: 1,
    title: "HT Mega - WordPress Plugin",
    category: "ui/ux designer",
    studio: "Hastech",
    studioLink: "https://hastechit.com/",
    image: work14,
    liveLink: "https://wphtmega.com/"
  },
  {
    id: 1,
    title: "Waffle and More - Website Design",
    category: "ui/ux designer",
    studio: "Kamg",
    studioLink: "https://kasandz.com/",
    image: work15,
    liveLink: "https://waffleandmore.com/"
  },
  {
    id: 1,
    title: "Vistafolia - Website Design",
    category: "ui/ux designer",
    studio: "Kamg",
    studioLink: "https://kasandz.com/",
    image: work16,
    liveLink: "https://vistafolia.com/gb/"
  },
  {
    id: 1,
    title: "Hexitime - Web App & Website Design",
    category: "ui/ux designer",
    studio: "Kamg",
    studioLink: "https://kasandz.com/",
    image: work17,
    liveLink: "https://hexitime.com/"
  },
  {
    id: 1,
    title: "Hurley Write - Website Design",
    category: "ui/ux designer",
    studio: "Kamg",
    studioLink: "https://kasandz.com/",
    image: work18,
    liveLink: "https://www.hurleywrite.com/"
  },
  {
    id: 1,
    title: "Ledger Union Market - Website Design",
    category: "ui/ux designer",
    studio: "Kamg",
    studioLink: "https://kasandz.com/",
    image: work19,
    liveLink: "https://ledgerunionmarket-com.azurewebsites.net/"
  },
  {
    id: 1,
    title: "Couples Retreat - Website Design",
    category: "ui/ux designer",
    studio: "Kamg",
    studioLink: "https://kasandz.com/",
    image: work20,
    liveLink: "https://couplesretreatatoceancoral.com/"
  },
  {
    id: 1,
    title: "Strategy Ladders - Website Design",
    category: "ui/ux designer",
    studio: "Kamg",
    studioLink: "https://kasandz.com/",
    image: work21,
    liveLink: "https://www.strategyladders.com/"
  },
  {
    id: 1,
    title: "Bulgarian Businesses - Website Design",
    category: "ui/ux designer",
    studio: "fome agency",
    studioLink: "https://fome.agency/",
    image: work22,
    liveLink: "https://bulgarianbusinesses.com/"
  },
  {
    id: 1,
    title: "Fome Female - Website Design",
    category: "ui/ux designer",
    studio: "fome agency",
    studioLink: "https://fome.agency/",
    image: work23,
    liveLink: "https://fome.agency/"
  },
  {
    id: 1,
    title: "Trivr Eats - Website Design",
    category: "ui/ux designer",
    studio: "Kamg",
    studioLink: "https://kasandz.com/",
    image: work24,
    liveLink: "https://trivreats.com/"
  },
  {
    id: 1,
    title: "Lifetime Land USA - Website Design",
    category: "ui/ux designer",
    studio: "Kamg",
    studioLink: "https://kasandz.com/",
    image: work25,
    liveLink: "https://lifetimelandusa.com/"
  },
  {
    id: 1,
    title: "Redmile Homes - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work26,
    liveLink: "https://redmilehomes.com/"
  },
  {
    id: 1,
    title: "Wellington Corporate Stays - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work27,
    liveLink: "https://wellingtonstays.co.uk/"
  },
  {
    id: 1,
    title: "Medhut - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work28,
    liveLink: "https://www.medhut.co.uk/"
  },
  {
    id: 1,
    title: "The travel fox - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work29,
    liveLink: "https://thetravelfox.co.uk/"
  },
  {
    id: 1,
    title: "CRCI - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work30,
    liveLink: "https://casualtyriskconsulting.com/"
  },
  {
    id: 1,
    title: "Physio Brite - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work31,
    liveLink: "https://physiobrite.co.uk/"
  },
  {
    id: 1,
    title: "UK Search Limited - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work32,
    liveLink: "https://www.uksearchlimited.com/"
  },
  {
    id: 1,
    title: "Mullock Accountancy - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work33,
    liveLink: "https://mullockaccountancy.co.uk/"
  },
  {
    id: 1,
    title: "Renewfood - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work34,
    liveLink: "https://renewfood.co.uk/"
  },
  {
    id: 1,
    title: "Elements Green Limited - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work35,
    liveLink: "https://elementsgreen.com/"
  },
  {
    id: 1,
    title: "YPIP - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work36,
    liveLink: "https://ypip.org.uk/"
  },
  {
    id: 1,
    title: "Wizard Guitars - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work37,
    liveLink: "https://wizardguitars.com/"
  },
  {
    id: 1,
    title: "LWT Dental Care - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work38,
    liveLink: "https://www.lwtdentalcare.co.uk/"
  },
  {
    id: 1,
    title: "VeryPC - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work39,
    liveLink: "https://very-pc.co.uk/"
  },
  {
    id: 1,
    title: "Oven Revive - Website Design",
    category: "ui/ux designer",
    studio: "Edge Studio",
    studioLink: "https://edge.studio/",
    image: work40,
    liveLink: "https://www.ovenrevive.co.uk/"
  },
  
];



// data end
const AllProjects = () => {
    const [visibleCount, setVisibleCount] = useState(8);
    const [loading, setLoading] = useState(false);

    const handleLoadMore = () => {
        

        

        setLoading(true);
        setTimeout(() => {
            setVisibleCount((prev) => prev + 8);
            setLoading(false);
        }, 800);
    };

    const worksData = allWorksData.slice(0, visibleCount);

    return (
        <div>
          <ProjectsBanner></ProjectsBanner>
          {/* projects */}

          <section className="mt-[160px] mb-[160px] max-sm:mt-[90px] max-sm:mb-[90px] max-sm:px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-[50px] max-sm:gap-6">

        {worksData.map((work, index) => (

          <AnimatedProjectCard
            key={work.id}
            work={work}
            index={index}
          />

        ))}

      </div>


<div className="flex justify-center mt-[90px] max-sm:mt-[50px]">
    <div className="inline-block border  rounded-[10px] border-[#1d1d1d]">
    <button
    onClick={handleLoadMore}
    disabled={loading}
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

      max-sm:w-[160px]
      max-sm:h-[50px]
      max-sm:px-4
      max-sm:text-[13px]
    "
  >
    {loading ? (
      <span className="w-5 h-5 border-2 border-[#1d1d1d] border-t-transparent rounded-full animate-spin"></span>
    ) : (
      <span>Load more</span>
    )}
    {/* dasdfsadfasfsa */}

  </button>
</div>
</div>
          </section>
        </div>
    );
};



/* ===============================================================
   ANIMATED PROJECT CARD

   Odd card  -> LEFT side theke ashbe
   Even card -> RIGHT side theke ashbe

   Scroll korar shomoy:
   - card side theke slide korbe
   - slight rotate thakbe
   - scale gradually settle korbe
   - opacity smoothly ashbe
   - spring physics er jonno movement ta natural lagbe
================================================================ */

const AnimatedProjectCard = ({ work, index }) => {

  const cardRef = useRef(null);

  const isLeftCard = index % 2 === 0;


  /* =========================================================
     CARD SCROLL PROGRESS
  ========================================================= */

  const { scrollYProgress } = useScroll({
    target: cardRef,

    offset: [
      "start 1.08",
      "start 0.58"
    ]
  });


  /* =========================================================
     RAW TRANSFORMS
  ========================================================= */

  // Left card:
  // -220px theke center e ashbe

  // Right card:
  // +220px theke center e ashbe

  const rawX = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    [
      isLeftCard ? -220 : 220,
      isLeftCard ? -45 : 45,
      0
    ]
  );


  const rawY = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [75, 18, 0]
  );


  const rawRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      isLeftCard ? -8 : 8,
      isLeftCard ? -2 : 2,
      0
    ]
  );


  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.88, 0.97, 1]
  );


  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.6, 1],
    [0, 0.45, 0.9, 1]
  );


  /* =========================================================
     SPRING PHYSICS

 
  ========================================================= */

  const x = useSpring(rawX, {
    stiffness: 100,
    damping: 22,
    mass: 0.65
  });

  const y = useSpring(rawY, {
    stiffness: 100,
    damping: 22,
    mass: 0.65
  });

  const rotate = useSpring(rawRotate, {
    stiffness: 100,
    damping: 22,
    mass: 0.65
  });

  const scale = useSpring(rawScale, {
    stiffness: 100,
    damping: 22,
    mass: 0.65
  });

  const opacity = useSpring(rawOpacity, {
    stiffness: 100,
    damping: 22,
    mass: 0.65
  });


  return (

    <motion.div
      ref={cardRef}

      style={{
        x,
        y,
        rotate,
        scale,
        opacity,

        // Animation er shomoy overlap holeo
        // image/card er border clean thakbe
        transformOrigin: "center center"
      }}

      className="
        relative
        bg-white
        rounded-[20px]
        border
        border-[#1d1d1d]
        p-5
        md:pb-10
        md:pt-5
        md:pr-5
        md:pl-5
   
        flex
        flex-col
        justify-between
        transition-shadow
        duration-500
        gap-
        
        group
        will-change-transform
      "
    >

      {/* =====================================================
          INNER IMAGE BOX
      ===================================================== */}

      <div
        className="
          w-full
          
          rounded-[16px]
          
          
          border
          border-[#000000]
          flex
          items-center
          justify-center
          overflow-hidden
          
        "
      >

        <motion.img
          src={work.image}
          alt={work.title}

          whileHover={{
            scale: 1.025
          }}

          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1]
          }}

          className="
            w-full
            h-auto
            object-cover
            rounded-2xl
            shadow-sm
            will-change-transform
          "
        />

      </div>


      {/* =====================================================
          CONTENT AREA
      ===================================================== */}
<div className="flex flex-col items-start text-left px-3">

  {/* CATEGORY */}

  <div className='md:flex '>
    <span
      className="
        text-[10px]
        md:text-[12px]
        font-[475]
        mt-10
        mr-3
        text-[#1d1d1d]
        flex
        items-center
        
        h-[25px]
        bg-[#FFE3FB]
        px-[10px]
       
        rounded-[6px]
        mb-[16px]
        uppercase
      "
    >
      <span className='text-[10px]
        md:text-[12px]
        font-[475]    
        text-gray-500 md:mr-1 uppercase'>
        Role:
      </span>

      {work.category}

    </span>


    <a
      href={work.studioLink}
      target="_blank"
      rel="noopener noreferrer"
      className="contents cursor-pointer"
    >
      <span
        className="
          text-[10px]
          md:text-[12px]
          font-[475]
          sm:mt-[1px]
          md:mt-10
          
          
          text-[#1d1d1d]
          flex
          items-center
          
          h-[25px]
          bg-[#DBF5F0]
          px-[10px]
         
          rounded-[6px]
          mb-[16px]
          uppercase
        "
      >
        <span className='text-[10px]
          md:text-[12px]
          font-[475]    
          text-gray-500 mr-1 uppercase'>
          Worked through:

        </span>

        {work.studio}

      </span>
    </a>

  </div>


  {/* TITLE */}

  <h3
    className="
      text-[22px]
      md:text-[24px]
      leading-[120%]
      font-medium
      text-[#1D1D1D]
      tracking-[-1]
      mb-[18px]
     
    "
  >
    {work.title}
  </h3>


  {/* LIVE SITE BUTTON */}

  <div className="border rounded-[10px] border-[#1d1d1d]">
    <a
      href={work.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center gap-5 
        px-6 h-[48px] 
        bg-white text-[#1d1d1d]
        font-medium text-base 
        rounded-[10px]
        border-b-5 border-[#ddd]
        
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
      <span>Live site</span>
      {/* dasdfsadfasfsa */}
      <img src={arrow} alt=""></img>
    </a>
  </div>

</div>

    </motion.div>

  );
};



export default AllProjects;