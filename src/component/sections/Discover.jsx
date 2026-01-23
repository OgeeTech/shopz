import React from "react";
import { motion } from "framer-motion";

/* ================= ICONS ================= */
const Icons = {
  MultiStore: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
      <path d="M2 9h20" />
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  Theme: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="13.5" cy="6.5" r=".5" />
      <circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" />
      <circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  Cart: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
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
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  AI: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
  ),
  Easy: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    </svg>
  ),
};

/* ================= BENTO GRID ITEMS ================= */
const ITEMS = [
  {
    title: "Multi-Brand Command Center",
    desc: "Manage multiple unique storefronts from a single dashboard. Different themes, different brands, one login.",
    icon: Icons.MultiStore,
    colSpan: "md:col-span-2", // Takes up 2 columns
    bg: "bg-gray-900",
    text: "text-white",
    iconColor: "text-[#ec4899]",
  },
  {
    title: "AI Smart Assistant",
    desc: "Automate customer support and get smart business insights with our integrated AI copilot.",
    icon: Icons.AI,
    colSpan: "md:col-span-1",
    bg: "bg-purple-100",
    text: "text-gray-900",
    iconColor: "text-purple-600",
  },
  {
    title: "App-Like Experience (PWA)",
    desc: "Your store installs like an app on phones. Push notifications and lightning-fast speeds included.",
    icon: Icons.Mobile,
    colSpan: "md:col-span-1",
    bg: "bg-blue-50",
    text: "text-gray-900",
    iconColor: "text-blue-500",
  },
  {
    title: "Limitless Inventory",
    desc: "Track unlimited products and variants with real-time stock control.",
    icon: Icons.Inventory,
    colSpan: "md:col-span-1",
    bg: "bg-white border border-gray-100",
    text: "text-gray-900",
    iconColor: "text-orange-500",
  },
  {
    title: "Complete Customization",
    desc: "Tailor your look with advanced themes. Your brand, your rules.",
    icon: Icons.Theme,
    colSpan: "md:col-span-1",
    bg: "bg-white border border-gray-100",
    text: "text-gray-900",
    iconColor: "text-[#ec4899]",
  },
  {
    title: "Global Checkout",
    desc: "Pre-integrated with Stripe, PayPal, and more for seamless payments.",
    icon: Icons.Cart,
    colSpan: "md:col-span-1",
    bg: "bg-green-50",
    text: "text-gray-900",
    iconColor: "text-green-600",
  },
  {
    title: "Zero Coding Required",
    desc: "Visual builders make it easy for anyone to launch.",
    icon: Icons.Easy,
    colSpan: "md:col-span-1",
    bg: "bg-white border border-gray-100",
    text: "text-gray-900",
    iconColor: "text-gray-600",
  },
  {
    title: "Deep Data Analytics",
    desc: "Visualize your growth with comprehensive dashboards monitoring traffic and conversions.",
    icon: Icons.Analytics,
    colSpan: "md:col-span-2", // Takes up 2 columns
    bg: "bg-[#ec4899]",
    text: "text-white",
    iconColor: "text-white",
  },
];

/* ================= COMPONENT ================= */
const Discover = () => {
  return (
    <section className="py-24 bg-white" id="discover">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-gray-600 mb-6"
          >
            Scale Your Online Business <br />
            <span className="text-[#ec4899] ">Without Limits</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            From your first sale to your first million, Traderz provides the
            powerful infrastructure you need to grow.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`
                ${item.colSpan} 
                ${item.bg} 
                rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 min-h-[240px]
              `}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 mb-6`}
                >
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${item.text}`}>
                  {item.title}
                </h3>
              </div>
              <p className={`text-sm leading-relaxed opacity-90 ${item.text}`}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
