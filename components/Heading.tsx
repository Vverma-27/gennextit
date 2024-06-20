"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const Heading = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const top = useTransform(scrollY, [0, 100], ["13vh", "8vh"]);
  //   const backgroundPosition = useTransform(scrollY, [0, 150], [100, 45]);

  return (
    <div className="mb-[5vh]">
      <h1 className="font-manrope font-medium text-[9vmin] text-center">
        <motion.span
          //   style={{
          //     background: `linear-gradient(to right, #fff, ${backgroundPosition.current}%, #1332d7)`,
          //     backgroundClip: "text",
          //   }}
          style={{ top }}
          className="fixed left-0 right-0 text-gradient-white"
        >
          IT Consulting
        </motion.span>
        <br />
        <motion.span style={{ opacity }}>
          Development <br />
          <span className="text-gradient-blue"> and Training</span>
        </motion.span>
      </h1>
      <motion.p
        style={{ opacity }}
        className="font-poppins text-[20px] text-gradient-black text-center"
      >
        We have helped over 100 companies reach their <br /> potential within 2
        years with our supervision.
      </motion.p>
    </div>
  );
};

export default Heading;
