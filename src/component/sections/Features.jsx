import React from "react";
import { motion } from "framer-motion";

/* ================= ICONS (Updated for Shopz) ================= */
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
};

/* ================= DATA (Updated Content) ================= */
const FEATURES = [
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
];

/* ================= SECTION ================= */
const Features = () => {
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
          Why Choose Shopz?
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
          {FEATURES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
        </div>

        {/* Learn more */}
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-1 mt-14 text-sm font-medium text-[#ec4899] hover:text-[#db2777] hover:underline"
        >
          See full feature list →
        </motion.a>
      </div>
    </section>
  );
};

export default Features;
