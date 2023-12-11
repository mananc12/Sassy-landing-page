import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 1 }}
      id="team"
      className="bg-white h-[100vh] flex flex-col justify-center items-center"
    >
      <div className="container mx-auto text-center">
        <motion.h2 className="text-5xl font-bold text-blue-500">Meet Our Team</motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-500 font-bold text-xl mb-10 p-10"
        >
          Our team is a diverse group of passionate individuals, each bringing a unique set of
          skills and expertise to the table. Together, we work towards a common goal – delivering
          innovative and top-notch solutions that empower your business.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={itemVariants}
        >
          <motion.div
            className="p-4 text-white hover:text-blue-500 hover:bg-white bg-blue-500 shadow-xl hover:scale-110 transform transition-transform cursor-pointer rounded-lg"
            variants={itemVariants}
          >
            <img
              src="/john.jpg"
              alt="Team Member 1"
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">John Doe</h3>
            <p className="mb-2">Founder & CEO</p>
            <p className="">Passionate leader driving innovation and success.</p>
            </motion.div>
          <motion.div
            className="p-4 bg-white hover:bg-blue-500 text-blue-500 hover:text-white shadow-xl hover:scale-110 transform transition-transform cursor-pointer rounded-lg"
            variants={itemVariants}
          >
            <img
              src="jane.jpg"
              alt="Team Member 2"
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
            <p className="mb-2">CTO</p>
            <p className="">Tech enthusiast shaping the future of our solutions.</p>
            </motion.div>
          <motion.div
            className="p-4 text-white hover:text-blue-500 hover:bg-white bg-blue-500 shadow-xl hover:scale-110 transform transition-transform cursor-pointer rounded-lg"
            variants={itemVariants}
          >
            <img
              src="mike.jpg"
              alt="Team Member 3"
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Mike Johnson</h3>
            <p className=" mb-2">Lead Developer</p>
            <p className="">Innovative coder crafting the heart of our software.</p>
            </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Team;
