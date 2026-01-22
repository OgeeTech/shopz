import react from "react";
import "./App.css";
import "./index.css";
import Hero from "./component/sections/Hero";
import Navbar from "./component/layouts/Navbar";
import Features from "./component/sections/Features";
import Pricing from "./component/sections/Pricing";
import Discover from "./component/sections/Discover";
import Footer from "./component/sections/Footer";

const App = () => {
  return (
    <div>
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
