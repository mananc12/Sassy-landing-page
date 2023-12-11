import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureCard = ({ title, image, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, type: "spring", stiffness: 150 }}
      className="p-6 flex flex-col bg-white shadow-md cursor-pointer rounded-lg hover:shadow-xl transition duration-300"
    >
      <h3 className="text-2xl font-bold mb-4 text-blue-500">{title}</h3>
      <motion.img
        className="h-60 mb-10"
        src={image}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, type: "spring", stiffness: 150 }}
      />
      <motion.p
        className="text-gray-700 leading-loose"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, type: "spring", stiffness: 150 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="bg-gray-100 py-16">
      <div className="container flex flex-col justify-center items-center mx-auto text-center">
        <h2 className="text-5xl font-bold mb-10 text-blue-500">
          Unlocking Possibilities
        </h2>
        <p className="text-gray-600 text-lg font-semibold mb-16 w-[90%]">
          Elevate your business with our comprehensive suite of features...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Feature 1"
            image="/feature1.jpg"
            description="Revolutionize your workflow with Feature 1. Lorem ipsum..."
          />
          <FeatureCard
            title="Feature 2"
            image="/feature2.jpeg"
            description="Experience the power of Feature 2. Lorem ipsum dolor sit..."
          />
          <FeatureCard
            title="Feature 3"
            image="/feature3.jpeg"
            description="Elevate your business with Feature 3. Lorem ipsum dolor..."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
