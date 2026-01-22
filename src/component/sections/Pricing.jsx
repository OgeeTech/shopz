import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= ICONS ================= */
const CheckIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ================= DATA ================= */
const PLANS = [
  {
    name: "Starter",
    desc: "Perfect for small businesses just getting started.",
    priceMonthly: "5,000",
    priceYearly: "50,000",
    popular: false,
    features: [
      "1 Online Store",
      "Shopz Branding",
      "Standard Analytics",
      "50 Product Uploads",
      "Basic Support",
    ],
  },
  {
    name: "Growth",
    desc: "For growing brands that need custom identity.",
    priceMonthly: "15,000",
    priceYearly: "150,000",
    popular: true, // Highlights this card
    features: [
      "Everything in Starter",
      "Custom Domain (.com)",
      "Custom Logo & Branding",
      "Remove Shopz Badge",
      "Unlimited Products",
      "Priority Support",
    ],
  },
  {
    name: "Scale",
    desc: "For multi-vendor marketplaces and large scale ops.",
    priceMonthly: "40,000",
    priceYearly: "400,000",
    popular: false,
    features: [
      "Everything in Growth",
      "Multi-Tenant / Vendor System",
      "Allow Vendors to Register",
      "Vendor Commission Logic",
      "Advanced API Access",
      "Dedicated Account Manager",
    ],
  },
];

/* ================= COMPONENT ================= */
const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 bg-gray-50" id="pricing">
      <div className="container mx-auto px-6 md:px-12">
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-600 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose the plan that's right for your business. No hidden fees.
          </p>

          {/* --- Toggle Switch --- */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm font-semibold ${!isYearly ? "text-gray-900" : "text-gray-400"}`}
            >
              Monthly
            </span>

            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 rounded-full bg-gray-200 p-1 transition-colors hover:bg-gray-300 focus:outline-none"
            >
              {/* Sliding Knob */}
              <motion.div
                className="w-6 h-6 bg-[#ec4899] rounded-full shadow-md"
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>

            <span
              className={`text-sm font-semibold ${isYearly ? "text-gray-900" : "text-gray-400"}`}
            >
              Yearly{" "}
              <span className="text-[#ec4899] text-xs ml-1">(Save ~20%)</span>
            </span>
          </div>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan, index) => (
            <div
              key={index}
              className={`
                relative p-8 rounded-2xl border transition-all duration-300
                ${
                  plan.popular
                    ? "bg-white border-[#ec4899] shadow-xl scale-105 z-10"
                    : "bg-white border-gray-100 shadow-sm hover:shadow-lg"
                }
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ec4899] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-sm text-gray-500 mt-2 h-10">{plan.desc}</p>

              {/* Price Animation */}
              <div className="my-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">
                  ₦
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isYearly ? "year" : "month"}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isYearly ? plan.priceYearly : plan.priceMonthly}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span className="text-gray-400 ml-2">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>

              {/* Button */}
              <button
                className={`
                  w-full py-3 rounded-xl font-bold transition-all mb-8
                  ${
                    plan.popular
                      ? "bg-[#ec4899] text-white hover:bg-[#db2777] shadow-lg shadow-pink-500/30"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }
                `}
              >
                Choose {plan.name}
              </button>

              {/* Features List */}
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <div className="mt-0.5 min-w-[18px] min-h-[18px] bg-green-100 rounded-full flex items-center justify-center">
                      <CheckIcon className="w-3 h-3 text-green-600" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
