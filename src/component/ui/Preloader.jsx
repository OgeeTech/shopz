import React from "react";
import { motion } from "framer-motion";

/* ================= ICON ================= */
const CartIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
  </svg>
);

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      // Full Pink Screen
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#ec4899]"
    >
      <div className="relative flex items-center justify-center">
        {/* --- 1. Cyclic Spinner Ring (Outer) --- */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-48 h-48 rounded-full border-4 border-white/30 border-t-white"
        />

        {/* --- 2. White Circle Container --- */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="w-40 h-40 bg-white rounded-full flex flex-col items-center justify-center shadow-2xl relative z-10"
        >
          {/* --- 3. The Logo (Pink) --- */}
          <div className="flex flex-col items-center gap-1">
            <CartIcon className="w-10 h-10 text-[#ec4899]" />
            <span className="text-2xl font-extrabold text-[#ec4899] tracking-tight">
              Traderz
            </span>
          </div>
        </motion.div>

        {/* Optional: Pulse Effect behind the white circle */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-white/20 rounded-full blur-md"
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
