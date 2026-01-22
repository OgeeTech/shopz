import React from "react";

/* ================= ICONS ================= */
const Twitter = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedIn = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
    <footer className="border-t border-gray-100 bg-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* --- Top Row: Logo | Links | Socials --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 mb-12">
          {/* 1. Brand Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-[#ec4899]">
              <CartIcon className="w-5 h-5" />
            </div>
            <span className="text-2xl font-extrabold text-gray-900">
              Shop<span className="text-[#ec4899]">z</span>
            </span>
          </div>

          {/* 2. Navigation Links (One Line) */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a
              href="https://shopz.com/about"
              className="text-sm font-medium text-gray-500 hover:text-[#ec4899] transition-colors"
            >
              About Us
            </a>
            <a
              href="https://shopz.com/terms"
              className="text-sm font-medium text-gray-500 hover:text-[#ec4899] transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="https://shopz.com/privacy"
              className="text-sm font-medium text-gray-500 hover:text-[#ec4899] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://shopz.com/contact"
              className="text-sm font-medium text-gray-500 hover:text-[#ec4899] transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* 3. Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-[#ec4899] hover:text-white transition-all"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-[#ec4899] hover:text-white transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-[#ec4899] hover:text-white transition-all"
            >
              <LinkedIn className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* --- Divider --- */}
        <div className="w-full h-px bg-gray-100 mb-12"></div>

        {/* --- Bottom Row: Newsletter Input --- */}
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-gray-900">
              Stay in the loop
            </h4>
            <p className="text-gray-500 text-sm max-w-sm mx-auto">
              Join 15,000+ creators getting product updates and e-commerce tips.
            </p>
          </div>

          <form className="flex w-full max-w-sm gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                flex-1
                px-4 py-3
                text-sm
                bg-gray-50
                border border-gray-200
                rounded-lg
                focus:outline-none
                focus:border-[#ec4899]
                focus:ring-1 focus:ring-[#ec4899]
                transition-all
              "
            />
            <button
              type="submit"
              className="
                px-6 py-3
                text-sm font-bold
                text-white
                bg-[#ec4899]
                hover:bg-[#db2777]
                rounded-lg
                shadow-md shadow-pink-500/20
                hover:shadow-lg
                transition-all
                transform active:scale-95
              "
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-gray-400 pt-6">
            © {new Date().getFullYear()} Shopz Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
