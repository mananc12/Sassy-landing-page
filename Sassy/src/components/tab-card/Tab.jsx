import "./styles.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Tab(props) {
  const [selectedTab, setSelectedTab] = useState(props.tabs[0]);

  return (
    <div className="window tab-bar">
      <nav>
        <ul>
          {props.tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            // exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col justify-center items-center">
              {selectedTab ? selectedTab.image : "😋"}
              {selectedTab ? selectedTab.desc : "😋"}
              <button className="text-xl text-white bg-blue-500 h-12 w-32 mt-5 font-bold rounded-3xl hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-solid hover:border-2">
                Buy Now
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
