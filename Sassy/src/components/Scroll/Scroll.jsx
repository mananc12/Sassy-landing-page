import "./styles.css";
import { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { list } from "./list-scroll";

function ListItem({ item }) {
  // Pass 'item' as a prop
  const [click, setClick] = useState(true);
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setClick(false);
    setCount(1);
  };

  const handleDecrease = () => {
    count === 1 && setClick(true);
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <li>
      <div className="img-div">
        <img className="w-full h-full" src={item.image} alt={item.name} />
      </div>
      <div className="flex flex-col w-full">
        <span className="name ">{item.name}</span>
      </div>
    </li>
  );
}

export default function Scroll() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="flex justify-center items-center flex-col">
      <span className="font-semibold text-xl md:text-xm text-blue-400">
  Trusted by Innovative Businesses 🚀
</span>
<p className="opacity-80 text-lg mt-8 mb-5 w-3/5 font-semibold">
  Our cutting-edge solutions empower businesses to achieve new heights of success. From startups to enterprises, we've been the trusted partner for those seeking innovation and efficiency. Join the league of forward-thinking companies that have harnessed the power of our SaaS platform to transform their operations. Explore the possibilities, streamline your processes, and elevate your business with our tailored solutions.
</p>

      <div className="scroll flex max-sm:flex-col">
        <svg id="progress" width="150" height="150" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
        <ul ref={ref}>
          {list.map((item) => (
            <ListItem key={item.image} item={item} /> // Pass 'item' as a prop
          ))}
        </ul>
      </div>
    </div>
  );
}
