import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    <span className="inline-flex items-center" style={{ color: "#4b9469" }}>
      {WORDS[index].substring(0, subIndex)}
      <motion.span
        animate={{ opacity: blink ? 1 : 0 }}
        className="ml-1 inline-block w-[3px] h-[0.9em]"
        style={{ backgroundColor: "#4b9469" }}
      />
    </span>
  );
};

/* ================= PULSE CARD COMPONENT ================= */
const FounderBadge = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, type: "spring" }}
    className="
      inline-flex items-center gap-3 
      bg-white border border-orange-100 
      px-4 py-2 rounded-full shadow-md shadow-orange-500/5 mb-4
      cursor-default hover:scale-105 transition-transform
    "
  >
    <div className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
    </div>
    <span className="text-sm font-bold text-gray-700">
      Early birds get <span className="text-orange-500">Founder's Badge</span>{" "}
      🏆
    </span>
  </motion.div>
);

/* ================= HERO ================= */
const Hero = () => {
  return (
    // UPDATED: h-[100dvh] ensures it fits exactly in viewport height
    <section className="relative h-[100dvh] flex items-center bg-[#f5f0f0] overflow-hidden">
      <motion.div
        className="
          container mx-auto 
          px-6 md:px-12 
          grid md:grid-cols-2 
          items-center 
          gap-8 lg:gap-16
          relative z-10
          h-full
        "
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* LEFT TEXT */}
        {/* UPDATED: Removed top margins, tightened spacing (space-y-5) */}
        <motion.div className="space-y-5 text-center md:text-left order-1 flex flex-col items-center md:items-start justify-center h-full pt-16 md:pt-0">
          <FounderBadge />

          <motion.h1
            variants={fadeUp}
            className="
              font-extrabold text-gray-600 leading-[1.05]
              text-4xl sm:text-6xl md:text-5xl lg:text-7xl
            "
          >
            Launch Your
            <span className="block min-h-[1.2em] my-1 whitespace-nowrap text-[#4b9469]">
              <Typewriter />
            </span>
            With Tradaz
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
            Tradaz helps small and large businesses build stunning, scalable
            e-commerce websites from one powerful platform.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2 w-full md:w-auto"
          >
            {/* Primary Button */}
            <Link
              to="/register"
              className="bg-[#4b9469] text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-green-600/30 hover:bg-[#6bc091] hover:scale-105 active:scale-95 transition-all w-full sm:w-auto inline-block text-center"
            >
              Join Wait List
            </Link>

            {/* Secondary Button */}
            <button className="border border-gray-300 bg-white text-gray-700 font-bold px-8 py-4 rounded-full hover:bg-gray-50 hover:text-[#4b9469] hover:border-[#4b9469] active:scale-95 transition-all w-full sm:w-auto">
              View Demo
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={imageVariants}
          className="hidden md:flex justify-center md:justify-end order-2 h-full items-center"
        >
          <motion.img
            src="/img/hero1.png"
            alt="Tradaz dashboard preview"
            // Keep image large, but use max-h to ensure it doesn't overflow viewport height
            className="
              w-full
              max-w-[800px] lg:max-w-[1100px] xl:max-w-[1500px]
              max-h-[85vh]
              object-contain
              drop-shadow-2xl
            "
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
