import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true, // The animation will only happen once
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true, // The animation will only happen once
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true, // The animation will only happen once
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          ref={ref1}
          variants={containerVariants}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold mb-6 text-blue-500">Our Story</h2>
          <p className="text-gray-600 text-lg font-semibold">
            Welcome to SaaSy, where innovation meets excellence. We believe in
            pushing boundaries and redefining what's possible.
          </p>
          <p className="text-gray-500 leading-loose mt-4 text-lg font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <p className="text-gray-500 leading-loose mt-4 text-lg font-semibold">
            Our journey began with a vision to create cutting-edge solutions
            that empower businesses. Today, we stand proud as a leader in the
            SaaS industry, driven by passion and a commitment to excellence.
          </p>
        </motion.div>
        <div className="mt-10 flex p-10 justify-around items-center gap-10">
          <motion.div
            ref={ref2}
            variants={containerVariants}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-bold mb-2 text-blue-500">
              Our Mission
            </h3>
            <p className="text-gray-500 leading-loose font-bold text-lg">
              To empower businesses with innovative and scalable SaaS solutions,
              fostering growth and success in the digital era.
            </p>
          </motion.div>
          <div className=" w-3/5 h-auto">
            <img src="/mission.jpg" />
          </div>
        </div>
        <div className="mt-10 flex justify-around items-center p-10 gap-10">
          <div className=" w-3/5 h-auto">
            <img src="/vision.jpg" />
          </div>
          <motion.div
            ref={ref3}
            variants={containerVariants}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-bold mb-2 text-blue-500">
              Our Vision
            </h3>
            <p className="text-gray-500 leading-loose text-lg font-bold">
              To be the catalyst for transformative change, revolutionizing the
              way businesses operate and thrive in the global market.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
