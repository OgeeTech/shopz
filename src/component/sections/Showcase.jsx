import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SCREENSHOTS = [
  {
    id: 1,
    title: "Store Dashboard",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Mobile Experience",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=500",
    isMobile: true,
  },
  {
    id: 3,
    title: "Analytics View",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    title: "Product Grid",
    img: "https://images.unsplash.com/photo-1481487484168-9b93086b723d?auto=format&fit=crop&q=80&w=1200",
  },
  // Duplicated items to ensure we have enough content to scroll
  {
    id: 5,
    title: "Store Dashboard",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  },
];

const Showcase = () => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  const scroll = (direction = "right") => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const scrollAmount = 420; // Distance to scroll

    if (direction === "right") {
      // Check if we are near the end
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        // Loop back to start
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll forward
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else {
      // Scroll backward
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  /* Auto scroll Effect */
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        scroll("right");
      }, 3000); // Speed of auto-scroll
    };

    startAutoScroll();

    return () => clearInterval(intervalRef.current);
  }, []);

  const pauseAutoScroll = () => clearInterval(intervalRef.current);

  const resumeAutoScroll = () => {
    clearInterval(intervalRef.current); // Ensure no duplicate intervals
    intervalRef.current = setInterval(() => {
      scroll("right");
    }, 3000);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#f8fafc] to-white relative">
      {/* CSS to hide scrollbar explicitly */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>

      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-gray-700"
          >
            Built for <span className="text-[#4b9469]">Modern Commerce</span>
          </motion.h2>
          <p className="mt-4 text-gray-500">
            A fast, clean interface that helps you focus on selling — not setup.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div
          className="relative group"
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={resumeAutoScroll}
        >
          {/* Left Button (Visible on hover) */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 bg-white border shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:text-[#4b9469]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Button (Visible on hover) */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 bg-white border shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:text-[#4b9469]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scroll Area */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth hide-scrollbar px-4 py-8"
          >
            {SCREENSHOTS.map((screen, index) => (
              <div
                key={`${screen.id}-${index}`}
                className={`shrink-0 transition-transform duration-500 hover:scale-[1.02] ${
                  screen.isMobile ? "w-[260px]" : "w-[420px] md:w-[600px]"
                }`}
              >
                {/* Browser Frame */}
                <div
                  className={`bg-white overflow-hidden shadow-2xl border
                  ${
                    screen.isMobile
                      ? "rounded-[2rem] border-[6px] border-gray-800"
                      : "rounded-xl border-gray-200"
                  }`}
                >
                  {!screen.isMobile && (
                    <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-50 border-b">
                      <span className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                      <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                      <span className="w-2.5 h-2.5 bg-green-400 rounded-full" />
                      {/* Fake URL bar */}
                      <div className="ml-4 h-5 bg-white border rounded-md w-full max-w-[200px]" />
                    </div>
                  )}

                  <img
                    src={screen.img}
                    alt={screen.title}
                    draggable={false}
                    className="w-full h-auto object-cover select-none"
                  />
                </div>

                <p className="mt-5 text-center text-xs font-bold uppercase tracking-widest text-gray-400">
                  {screen.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
