// components/ArtisticGrid.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ArtisticGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // The animation will only happen once
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const containerVariants2 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-blue-500 pl-20 pr-20 gap-20 flex flex-row justify-center items-center">
      
      <div className="border-solid border-2 border-white w-[50%] text-2xl font-semibold p-5 text-white">
<motion.div
      ref={ref}
      variants={containerVariants2}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 1 }}
    >
        At SaaSy Company, we believe in pushing boundaries and transforming
        possibilities into reality, one grid at a time. Explore the artistry of
        our services and witness the seamless fusion of technology and
        creativity that defines our commitment to your success.
        </motion.div>
      </div>
      
      <section className="container bg-white mx-auto mb-16 w-[50%]">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 2 }}
        >
          <div className="grid-container grid grid-cols-3 gap-4 bg-cover bg-center">
            <div className="item1 h-20 cursor-pointer transition-transform transform hover:scale-105 bg-white hover:bg-blue-500 hover:text-white  text-blue-500 flex items-center justify-center text-center text-[100%] font-bold ">
              Elevate your business with our innovative SaaS solutions tailored
              for your success.
            </div>
            <div className="item2 h-20   "></div>
            <div className="item3 h-20 bg-white  text-blue-500 "></div>
            <div className="item4 h-20   "></div>
            <div className="item5 h-20 cursor-pointer transition-transform transform hover:scale-105 hover:bg-blue-500 hover:text-white bg-white  text-blue-500 flex items-center justify-center text-[100%] font-bold">
              Powerful SaaS Solutions
            </div>
            <div className="item6 h-20   "></div>
            <div className="item7 h-20 cursor-pointer transition-transform transform hover:scale-105 hover:bg-blue-500 hover:text-white bg-white  flex items-center justify-center text-blue-500 text-[100%] font-bold ">
              Intuitive User Interface
            </div>
            <div className="item8 h-20   "></div>
            <div className="item9 h-20 bg-white  text-blue-500 "></div>
            <div className="item10 h-20 bg-white  text-blue-500 "></div>
            <div className="item11 h-20   "></div>
            <div className="item12 h-20 bg-white  text-blue-500 "></div>
            <div className="item13 h-20   "></div>
            <div className="item14 h-20   "></div>
            <div className="item15 h-20 cursor-pointer transition-transform transform hover:scale-105 hover:bg-blue-500 hover:text-white bg-white  flex items-center justify-center text-center text-blue-500 text-[100%] font-bold ">
              Flexible Customization
            </div>
            <div className="item16 h-20   "></div>
            <div className="item17 h-20 cursor-pointer transition-transform transform hover:scale-105 hover:bg-blue-500 hover:text-white bg-white  flex items-center justify-center text-center text-blue-500 text-[100%] font-bold   ">
              Easy Options
            </div>
            <div className="item18 h-20   "></div>
            <div className="item19 h-20   "></div>
            <div className="item20 h-20   "></div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ArtisticGrid;
