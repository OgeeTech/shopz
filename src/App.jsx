import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Hero from "./component/sections/Hero";
import Navbar from "./component/layouts/Navbar";
import Features from "./component/sections/Features";
import Pricing from "./component/sections/Pricing";
import Discover from "./component/sections/Discover";
import Footer from "./component/sections/Footer";
import { AnimatePresence } from "framer-motion";
import Preloader from "./component/ui/Preloader";

// ✅ Correct arrow function syntax
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time (2.5s)
    const timer = setTimeout(() => setLoading(false), 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Discover />
        <Footer />
      </main>
    </div>
  );
};

export default App;
