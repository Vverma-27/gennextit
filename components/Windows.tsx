import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";

const Windows = ({
  consulting,
  dev,
  training,
}: {
  consulting: DOMRect;
  dev: DOMRect;
  training: DOMRect;
}) => {
  const { scrollY } = useScroll();
  const rotationRight = useTransform(scrollY, [0, 200], [-27, 0]);
  const inputs = [
    0,
    consulting.top - 170,
    consulting.top + 80,
    dev.top - 170,
    dev.top + 80,
    training.top - 170,
  ];
  const top = useTransform(scrollY, inputs, [
    `${(13 * window.outerHeight) / 100}px`,
    `${consulting.top + 20}px`,
    `${consulting.top + 20}px`,
    `${dev.top + dev.height * 0.05}px`,
    `${dev.top + dev.height * 0.05}px`,
    `${training.top + 40}px`,
  ]);
  const bottomSecond = useTransform(scrollY, inputs, [
    `${(60 * window.outerHeight) / 100}px`,
    `${consulting.top + (consulting.height - 40) / 2}px`,
    `${consulting.top + (consulting.height - 40) / 2}px`,
    `${
      dev.top +
      dev.height * 0.05 +
      (((14 * window.innerWidth) / 100) * 7) / 9 +
      30
    }px`,
    `${
      dev.top +
      dev.height * 0.05 +
      (((14 * window.innerWidth) / 100) * 7) / 9 +
      30
    }px`,
    `${
      training.top +
      training.height -
      20 -
      (((20 * window.innerWidth) / 100) * 7) / 9
    }px`,
  ]);
  const bottom = useTransform(scrollY, inputs, [
    `${(60 * window.outerHeight) / 100}px`,
    `${consulting.top + (consulting.height - 40) / 2}px`,
    `${consulting.top + (consulting.height - 40) / 2}px`,
    `${
      dev.top +
      dev.height * 0.05 +
      (2 * (((14 * window.innerWidth) / 100) * 7)) / 9 +
      60
    }px`,
    `${
      dev.top +
      dev.height * 0.05 +
      (2 * (((14 * window.innerWidth) / 100) * 7)) / 9 +
      60
    }px`,
    `${training.top + (training.height - 40) / 2}px`,
  ]);
  const leftRight = useTransform(scrollY, inputs, [
    `${(5 * window.outerWidth) / 100}px`,
    `${consulting.left + consulting.width / 6}px`,
    `${consulting.left + consulting.width / 6}px`,
    `${(43 * window.innerWidth) / 100}px`,
    `${(43 * window.innerWidth) / 100}px`,
    `${training.left + training.width / 10}px`,
  ]);
  const centeredLeftRight = useTransform(scrollY, inputs, [
    `${(5 * window.outerWidth) / 100}px`,
    `${consulting.left + consulting.width / 6}px`,
    `${consulting.left + consulting.width / 6}px`,
    `${(43 * window.innerWidth) / 100}px`,
    `${(43 * window.innerWidth) / 100}px`,
    `${(40 * window.innerWidth) / 100}px`,
  ]);
  const width = useTransform(scrollY, inputs, [
    "18vw",
    "20vw",
    "20vw",
    "14vw",
    "14vw",
    "20vw",
  ]);
  const opacity = useTransform(
    scrollY,
    [0, consulting.top, dev.top - 170, training.top - 170],
    [1, 1, 0, 1]
  );
  const opacityBottom = useTransform(
    scrollY,
    [consulting.top, dev.top, training.top - 170],
    [1, 1, 0]
  );
  const rotationLeft = useTransform(scrollY, [0, 200], [27, 0]);
  return (
    <>
      <motion.img
        src={"/window2.png"}
        alt={"window"}
        style={{ rotate: rotationRight, top, left: leftRight, width }}
        className="absolute z-20 aspect-[9/7]"
      />
      <motion.img
        src={"/window2.png"}
        alt={"window"}
        style={{
          rotate: rotationRight,
          left: leftRight,
          top: bottom,
          width,
          opacity: opacityBottom,
        }}
        className="absolute z-20 aspect-[9/7]"
      />
      <motion.img
        src={"/window2.png"}
        alt={"window"}
        style={{ right: leftRight, rotate: rotationLeft, top, width, opacity }}
        className="absolute z-20 aspect-[9/7]"
      />
      <motion.img
        src={"/window2.png"}
        alt={"window"}
        style={{
          right: centeredLeftRight,
          rotate: rotationLeft,
          top: bottomSecond,
          width,
        }}
        className="absolute z-20 aspect-[9/7]"
      />
    </>
  );
};

export default Windows;