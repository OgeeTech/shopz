import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./component/layouts/Navbar";
import Hero from "./component/sections/Hero";
import Features from "./component/sections/Features";
import Pricing from "./component/sections/Pricing";
import Discover from "./component/sections/Discover";
import Footer from "./component/layouts/Footer";
import Preloader from "./component/ui/Preloader";

// 1. Import the ScrollToTop helper
import ScrollToTop from "./component/utils/ScrollToTop";

// pages
import About from "./component/pages/About";
import Terms from "./component/pages/Terms";
import Privacy from "./component/pages/Privacy";
import Contact from "./component/pages/Contact";
import Register from "./component/pages/Register";
import Login from "./component/pages/Login";
import Showcase from "./component/sections/Showcase";

const App = () => {
  // FIXED: Changed to 'true' so the preloader shows on refresh
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Router>
        {/* 2. Add ScrollToTop here so it listens to route changes */}
        <ScrollToTop />

        <AnimatePresence mode="wait">
          {loading && <Preloader key="preloader" />}
        </AnimatePresence>

        {!loading && (
          <>
            <Navbar />

            <Routes>
              {/* Home */}
              <Route
                path="/"
                element={
                  <main>
                    <Hero />
                    <Features />
                    <Pricing />
                    <Discover />
                    <Showcase />
                  </main>
                }
              />

              {/* Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>

            <Footer />
          </>
        )}
      </Router>
    </>
  );
};

export default App;
