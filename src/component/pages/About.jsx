import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-28 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* --- LEFT: IMAGE SECTION --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative shadow-2xl shadow-pink-500/30 rounded-2xl overflow-hidden shrink-0 group"
          >
            {/* Main Image */}
            <img
              className="max-w-md w-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
              alt="Team working"
            />

            {/* Floating Community Card */}
            <div className="flex items-center gap-3 max-w-72 absolute bottom-6 left-6 right-6 md:right-auto bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="flex -space-x-4 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                  alt="User"
                  className="size-10 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-10"
                />
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                  alt="User"
                  className="size-10 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-20"
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                  alt="User"
                  className="size-10 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-30"
                />
                <div className="flex items-center justify-center text-xs font-bold text-white size-10 rounded-full border-[3px] border-white bg-[#ec4899] hover:-translate-y-1 transition z-40">
                  50+
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-800 leading-tight">
                Join our growing <br /> merchant community
              </p>
            </div>
          </motion.div>

          {/* --- RIGHT: TEXT CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-gray-600 max-w-lg"
          >
            <h1 className="text-2xl uppercase font-bold text-gray-800 tracking-wide">
              Who We Are
            </h1>

            {/* Pink Gradient Line */}
            <div className="w-24 h-[4px] rounded-full bg-gradient-to-r from-[#ec4899] to-pink-200 mt-2 mb-8"></div>

            <p className="mb-6 text-base leading-relaxed">
              Traderz helps you build faster by transforming your business
              vision into a fully functional, production-ready online store.
            </p>

            <p className="mb-6 text-base leading-relaxed">
              Whether you're launching a boutique, a dropshipping brand, or a
              large marketplace, our collection of powerful tools is crafted to
              boost your sales and improve user experience.
            </p>

            <p className="mb-8 text-base leading-relaxed">
              From intuitive design systems to global payment automation,
              Traderz empowers you to build beautifully and scale effortlessly.
            </p>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="group flex items-center w-max gap-3 bg-gradient-to-r from-[#ec4899] to-[#db2777] py-3.5 px-8 rounded-full text-white font-semibold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              <span>Get Started</span>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                  fill="#fff"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
