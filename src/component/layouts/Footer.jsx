import React from "react";
import { Link } from "react-router-dom";

/* ================= ICONS ================= */ const Twitter = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    {" "}
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />{" "}
  </svg>
);
const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    {" "}
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />{" "}
  </svg>
);
const LinkedIn = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    {" "}
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />{" "}
  </svg>
);

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

/* ================= FOOTER ================= */
const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        {/* ===== TOP GRID ===== */}
        <div className="grid gap-12 md:grid-cols-3 items-start">
          {/* BRAND */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-[#5cac7d]">
                <CartIcon className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-600">Tradaz</h3>
            </div>

            <p className="text-sm text-gray-500 max-w-xs mx-auto md:mx-0">
              A modern commerce platform helping brands sell smarter, faster,
              and globally.
            </p>

            {/* SOCIALS */}
            <div className="flex justify-center md:justify-start gap-4">
              {[Twitter, Instagram, LinkedIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="
                    w-10 h-10
                    flex items-center justify-center
                    rounded-full
                    bg-gray-50
                    text-gray-400
                    hover:bg-[#5cac7d]
                    hover:text-white
                    transition
                    hover:scale-105
                  "
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}

          {/* NEWSLETTER */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-base font-semibold text-gray-900">
              Subscribe to our newsletter
            </h4>
            <p className="text-sm text-gray-500">
              Get product updates and e-commerce insights.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="
                  flex-1
                  px-4 py-3
                  text-sm
                  rounded-lg
                  bg-gray-50
                  border border-gray-200
                  focus:outline-none
                  focus:ring-2 focus:ring-[#5cac7d]
                "
              />
              <button
                type="submit"
                className="
                  px-6 py-3
                  text-sm font-semibold
                  text-white
                  bg-[#5cac7d]
                  hover:bg-[#6bc091]
                  rounded-lg
                  transition
                  active:scale-95
                "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* ===== BOTTOM ===== */}
        <div className="mt-14 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Tradaz. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
