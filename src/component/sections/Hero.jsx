import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ================= CONFIG ================= */
const TYPING_SPEED = 120;
const DELETING_SPEED = 80;
const PAUSE_DURATION = 1800;

const WORDS = [
  "Custom Website",
  "Online Store",
  "Brand Identity",
  "SaaS Platform",
];

/* ================= ANIMATIONS ================= */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96, x: 20 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { type: "spring", stiffness: 70, damping: 20 },
  },
};

/* ================= TYPEWRITER ================= */
const Typewriter = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!reverse && subIndex === WORDS[index].length) {
      setTimeout(() => setReverse(true), PAUSE_DURATION);
      return;
    }

    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((i) => (i + 1) % WORDS.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((i) => i + (reverse ? -1 : 1)),
      reverse ? DELETING_SPEED : TYPING_SPEED,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  return (
    <span className="inline-flex items-center">
      {WORDS[index].substring(0, subIndex)}
      <motion.span
        animate={{ opacity: blink ? 1 : 0 }}
        className="ml-1 inline-block w-[3px] h-[0.9em] bg-[#ec4899]"
      />
    </span>
  );
};

/* ================= HERO ================= */
const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center bg-[#f5f0f0] overflow-hidden">
      {/* Background Blobs (Optional - Uncomment to use) */}
      {/* <div className="absolute -top-32 -right-32 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#ec4899]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-100/40 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" /> */}

      <motion.div
        className="
          container mx-auto 
          px-6 md:px-12 
          pt-28 pb-12 md:pt-0 md:pb-0 
          grid md:grid-cols-2 
          items-center 
          gap-12 md:gap-8 lg:gap-16
          relative z-10
        "
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* LEFT TEXT */}
        <motion.div className="space-y-6 text-center md:text-left order-1">
          <motion.h1
            variants={fadeUp}
            className="
    font-extrabold text-gray-600 leading-[1.1]
    text-5xl sm:text-7xl md:text-5xl lg:text-7xl
  "
          >
            Launch Your
            {/* Typewriter text */}
            <span className="block h-[1.2em] text-[#ec4899]">
              <Typewriter />
            </span>
            With Shopz
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="
              text-base sm:text-lg md:text-xl 
              text-gray-600 
              max-w-lg mx-auto md:mx-0 
              leading-relaxed
            "
          >
            Shopz helps small and large businesses build stunning, scalable
            e-commerce websites from one powerful platform.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2"
          >
            {/* Primary Button */}
            <button className="bg-[#ec4899] text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-pink-500/30 hover:bg-[#db2777] hover:scale-105 active:scale-95 transition-all w-full sm:w-auto">
              Get Started Free
            </button>

            {/* Secondary Button */}
            <button className="border border-gray-300 bg-white text-gray-700 font-bold px-8 py-4 rounded-full hover:bg-gray-50 hover:text-[#ec4899] hover:border-[#ec4899] active:scale-95 transition-all w-full sm:w-auto">
              View Demo
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={imageVariants}
          className="hidden md:flex justify-center md:justify-end order-2"
        >
          <motion.img
            src="/img/hero.png"
            alt="Shopz dashboard preview"
            className="
              w-full
              mt-[10px]
              max-w-[200px] sm:max-w-[400px] md:max-w-[520px] 
              h-[100dvh] object-contain 
              drop-shadow-2xl
            "
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
