import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Blogs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // The animation will only happen once
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section id="blogs" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-5xl text-blue-500 font-bold mb-4"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1 }}
        >
          Latest Blogs
        </motion.h2>
        <motion.p
          className="text-gray-500 mb-20 text-xl font-bold"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1 }}
        >
          Stay tuned for our latest insights, industry trends, and expert
          perspectives in our blog section.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="p-4 cursor-pointer transform transition-transform hover:scale-110 bg-white shadow-md"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-bold mb-2">Blog Title 1</h3>
            <img src="/blog1.jpg" alt="Blog 1" />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="#" className="text-blue-500 mt-2 inline-block">
              Read More
            </a>
          </motion.div>
          <motion.div
            className="p-4 cursor-pointer transform transition-transform hover:scale-110 bg-white shadow-md"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-bold mb-2">Blog Title 2</h3>
            <img src="/blog2.jpg" alt="Blog 2" />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="#" className="text-blue-500 mt-2 inline-block">
              Read More
            </a>
          </motion.div>
          <motion.div
            className="p-4 cursor-pointer transform transition-transform hover:scale-110 bg-white shadow-md"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-bold mb-2">Blog Title 3</h3>
            <img src="/blog3.jpg" alt="Blog 3" />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="#" className="text-blue-500 mt-2 inline-block">
              Read More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
