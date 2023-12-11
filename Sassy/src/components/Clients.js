import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Scroll from "./Scroll/Scroll";

const Clients = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="clients" className="py-16">
      <div className="container mx-auto text-center">
        <motion.h2
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-1 text-blue-500"
        >
          Our Clients
        </motion.h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1 }}
          className="flex items-center justify-center space-x-8"
        >
          <Scroll />
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
