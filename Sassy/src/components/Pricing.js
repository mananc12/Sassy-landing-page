// components/Pricing.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tab from './tab-card/Tab';
import { initialTabs1 as tabs1 } from './tab-card/ingredients';
const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section id="pricing" className="bg-gray-100 py-16 ">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl text-blue-500 font-bold">Pricing Plans</h2>
        <p className='text-gray-600 text-lg font-semibold mt-5 mb-5'>Elevate your business with the perfect plan tailored for your success.💸</p>
        {/* <div className="tab-container flex justify-center items-center"> */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 1 }}
          className="tab-container flex justify-center items-center"
        >
          <Tab tabs={tabs1}/>
          </motion.div>
        {/* </div> */}
      </div>
      
      
    </section>
  );
}

export default Pricing;
