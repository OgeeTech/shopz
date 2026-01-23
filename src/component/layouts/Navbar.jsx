import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

/* ================= LINKS ================= */
export const NAV_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Contact Us", href: "/contact" },
];

/* ================= ICONS ================= */
const MenuIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path d="M18 6 6 18" />
    <path d="M6 6 18 18" />
  </svg>
);

const CartIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
  </svg>
);

/* ================= NAVBAR ================= */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled
    ? "bg-white/90 backdrop-blur-md shadow-sm"
    : "bg-transparent";

  const hoverStyle =
    "text-gray-600 hover:text-[#ec4899] transition-colors duration-200";

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            className={`flex items-center gap-2 group ${hoverStyle}`}
          >
            <CartIcon className="w-7 h-7" />
            <span className="text-2xl font-extrabold tracking-tight">
              Shopz
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium ${hoverStyle}`}
              >
                {link.name}
              </Link>
            ))}

            {/* AUTH BUTTONS (Desktop) */}
            <Link to="/login" className={`text-sm font-semibold ${hoverStyle}`}>
              Sign in
            </Link>

            <Link
              to="/register"
              className="bg-[#ec4899] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#db2777] transition"
            >
              Register
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className={`md:hidden ${hoverStyle}`}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* MOBILE SLIDE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 p-6"
            >
              <div className="flex items-center justify-between mb-10">
                {/* Mobile Drawer Logo */}
                <div className="flex items-center gap-2 text-gray-600">
                  <CartIcon className="w-6 h-6" />
                  <span className="text-xl font-bold">Shopz</span>
                </div>

                <button onClick={() => setMobileOpen(false)}>
                  <XIcon className="w-7 h-7 text-gray-500 hover:text-[#ec4899] transition-colors" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-lg font-medium text-gray-600 hover:text-[#ec4899] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                <hr className="my-4 border-gray-100" />

                {/* FIXED: Mobile Sign In */}
                <Link
                  to="/login"
                  className="text-lg font-semibold text-gray-600 hover:text-[#ec4899] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign in
                </Link>

                {/* FIXED: Mobile Register (Changed href to to) */}
                <Link
                  to="/register"
                  className="bg-[#ec4899] text-white text-center py-3 rounded-full font-semibold hover:bg-[#db2777] transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Register
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
