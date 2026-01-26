import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= ICONS ================= */
const Icons = {
  Design: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  ),
  Speed: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Payment: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  ),
  Mobile: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  // New Icons
  Analytics: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  ),
  Seo: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  ),
  Support: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
    </svg>
  ),
  Inventory: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  ),
};

/* ================= DATA ================= */
const ALL_FEATURES = [
  {
    title: "Intuitive Design",
    desc: "Drag, drop, and customize. Build stunning sites without writing code.",
    icon: Icons.Design,
    bg: "bg-pink-100",
    color: "text-[#ec4899]",
  },
  {
    title: "Lightning Fast",
    desc: "Optimized performance ensuring your store loads instantly.",
    icon: Icons.Speed,
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    title: "Secure Payments",
    desc: "Accept global payments seamlessly with bank-level security.",
    icon: Icons.Payment,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Mobile Responsive",
    desc: "Your website looks perfect on every device, automatically.",
    icon: Icons.Mobile,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  // --- New Features (Initially Hidden) ---
  {
    title: "Real-time Analytics",
    desc: "Track sales, visitors, and growth with detailed dashboards.",
    icon: Icons.Analytics,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    title: "SEO Optimization",
    desc: "Rank higher on Google with built-in SEO tools and sitemaps.",
    icon: Icons.Seo,
    bg: "bg-indigo-100",
    color: "text-indigo-600",
  },
  {
    title: "24/7 Support",
    desc: "Our dedicated team is here to help you succeed day or night.",
    icon: Icons.Support,
    bg: "bg-red-100",
    color: "text-red-600",
  },
  {
    title: "Inventory Mgmt",
    desc: "Track stock levels and automate reordering effortlessly.",
    icon: Icons.Inventory,
    bg: "bg-teal-100",
    color: "text-teal-600",
  },
];

/* ================= SECTION ================= */
const Features = () => {
  const [showAll, setShowAll] = useState(false);

  // If showAll is true, use ALL features. If false, slice the first 4.
  const visibleFeatures = showAll ? ALL_FEATURES : ALL_FEATURES.slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-600"
        >
          Why Choose Traderz?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-gray-500 max-w-xl mx-auto"
        >
          We provide all the tools you need to build, scale, and manage your
          online business effortlessly.
        </motion.p>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <AnimatePresence mode="popLayout">
            {visibleFeatures.map((item, i) => (
              <motion.div
                key={item.title} // Use unique key for AnimatePresence
                layout // Smooth layout animation when list changes
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center ${item.bg}`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>

                <h3 className="mt-6 text-sm font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500 max-w-[220px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setShowAll(!showAll)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-1 mt-14 text-sm font-medium text-[#ec4899] hover:text-[#db2777] hover:underline transition-all"
        >
          {showAll ? "Show less features ↑" : "See full feature list →"}
        </motion.button>
      </div>
    </section>
  );
};

export default Features;
