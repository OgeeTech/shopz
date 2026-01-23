import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ================= ANIMATION ================= */
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ================= ICONS ================= */
const GoogleIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

/* ================= PAGE ================= */
const Register = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 pt-28">
      {/* LEFT: VISUAL */}
      <aside className="hidden lg:flex relative flex-col justify-end bg-gray-900 text-white p-12 overflow-hidden rounded-tr-3xl">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

        <div className="relative z-10 max-w-md mb-10">
          <blockquote className="text-2xl font-semibold leading-relaxed mb-6">
            “Traderez revolutionized how we handle online sales. We scaled from
            10 to 10,000 orders in three months.”
          </blockquote>

          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
              alt="Sarah Jenkins"
              className="w-12 h-12 rounded-full border border-white/20"
            />
            <div>
              <p className="font-semibold">Sarah Jenkins</p>
              <p className="text-sm text-gray-400">Founder, Bloom & Co.</p>
            </div>
          </div>
        </div>
      </aside>

      {/* RIGHT: FORM */}
      <main className="flex items-center justify-center p-6 sm:p-12 bg-white">
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md space-y-8"
        >
          {/* HEADER */}
          <header className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-600">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Start selling in minutes.{" "}
              <Link
                to="/login"
                className="font-medium text-[#ec4899] hover:text-[#db2777]"
              >
                Already have an account?
              </Link>
            </p>
          </header>

          {/* FORM */}
          <form className="space-y-5">
            {[
              {
                id: "name",
                label: "Full Name",
                type: "text",
                placeholder: "John Doe",
              },
              {
                id: "email",
                label: "Email address",
                type: "email",
                placeholder: "john@example.com",
              },
              {
                id: "password",
                label: "Password",
                type: "password",
                placeholder: "••••••••",
              },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block text-sm font-medium text-gray-700"
                >
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  required
                  placeholder={placeholder}
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-[#ec4899]
                    focus:border-[#ec4899] transition"
                />
              </div>
            ))}

            {/* TERMS */}
            <label className="flex items-start gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#ec4899] focus:ring-[#ec4899]"
              />
              <span>
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="text-[#ec4899] hover:text-[#db2777]"
                >
                  Terms
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="text-[#ec4899] hover:text-[#db2777]"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* CTA */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#ec4899] text-white font-semibold
                hover:bg-[#db2777] active:scale-[0.98] transition"
            >
              Create Account
            </button>
          </form>

          {/* DIVIDER */}
          <div className="relative text-center">
            <span className="bg-white px-3 text-sm text-gray-500 relative z-10">
              Or continue with
            </span>
            <div className="absolute inset-0 top-1/2 border-t border-gray-300" />
          </div>

          {/* GOOGLE */}
          <button
            className="w-full flex items-center justify-center gap-3 py-3 border
              border-gray-300 rounded-lg text-sm font-medium text-gray-700
              hover:bg-gray-50 transition"
          >
            <GoogleIcon className="w-5 h-5" />
            Sign up with Google
          </button>
        </motion.section>
      </main>
    </div>
  );
};

export default Register;
