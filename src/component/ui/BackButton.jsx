import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BackButton = ({ className = "" }) => {
  return (
    <div className={`absolute top-28 left-6 md:left-12 z-20 ${className}`}>
      <Link
        to="/"
        className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#ec4899] transition-colors"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ x: 0 }}
          whileHover={{ x: -4 }} // Slide arrow left on hover
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </motion.svg>
        Back to Home
      </Link>
    </div>
  );
};

export default BackButton;
