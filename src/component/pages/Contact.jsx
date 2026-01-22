import React from "react";
import { motion } from "framer-motion";

/* ================= ICONS ================= */
const Icons = {
  Mail: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  ),
  Phone: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  MapPin: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Message: (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
};

/* ================= COMPONENT ================= */
const Contact = () => {
  return (
    <div className="bg-white pt-28 pb-20">
      {/* --- HEADER --- */}
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 max-w-2xl mx-auto text-lg"
        >
          Have a question about our pricing, features, or need support? We're
          here to help you grow your business.
        </motion.p>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* --- LEFT: CONTACT INFO --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-pink-200 transition-colors">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-[#ec4899] mb-4">
                  <Icons.Mail className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900">Chat to sales</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Speak to our friendly team.
                </p>
                <a
                  href="mailto:sales@shopz.com"
                  className="text-[#ec4899] font-semibold hover:underline"
                >
                  sales@shopz.com
                </a>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-pink-200 transition-colors">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                  <Icons.Message className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900">Chat to support</h3>
                <p className="text-sm text-gray-500 mb-2">
                  We're here to help.
                </p>
                <a
                  href="mailto:support@shopz.com"
                  className="text-[#ec4899] font-semibold hover:underline"
                >
                  support@shopz.com
                </a>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-pink-200 transition-colors">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  <Icons.MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900">Visit us</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Visit our office HQ.
                </p>
                <span className="text-gray-600 font-medium">
                  1 Bouar close,
                  <br />
                  Wuse2, Abuja
                </span>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-pink-200 transition-colors">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                  <Icons.Phone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900">Call us</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Mon-Fri from 8am to 5pm.
                </p>
                <a
                  href="tel:+234000000000"
                  className="text-[#ec4899] font-semibold hover:underline"
                >
                  +234 (0) 123 456 78
                </a>
              </div>
            </div>

            {/* Support Image */}
            <div className="hidden lg:block relative h-64 rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
                alt="Support team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-medium">
                  "Shopz support helped us scale to 10k users in a month!"
                </p>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: FORM --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ec4899] focus:ring-1 focus:ring-[#ec4899] outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ec4899] focus:ring-1 focus:ring-[#ec4899] outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ec4899] focus:ring-1 focus:ring-[#ec4899] outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ec4899] focus:ring-1 focus:ring-[#ec4899] outline-none transition resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-[#ec4899] hover:bg-[#db2777] text-white font-bold py-4 rounded-xl shadow-lg shadow-pink-500/20 transition-all transform active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* --- FAQ SECTION --- */}
    </div>
  );
};

export default Contact;
