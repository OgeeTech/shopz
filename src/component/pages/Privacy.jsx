import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BackButton from "../ui/BackButton";

/* ================= DATA ================= */
const SECTIONS = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p className="mb-4">
          At Tradaz ("we," "us," or "our"), we respect your privacy and are
          committed to protecting your personal data. This Privacy Policy will
          inform you as to how we look after your personal data when you visit
          our website (regardless of where you visit it from) and tell you about
          your privacy rights and how the law protects you.
        </p>
        <p>
          This policy applies to the Traderez platform, website, and any
          services provided through them.
        </p>
      </>
    ),
  },
  {
    id: "info-collection",
    title: "2. Information We Collect",
    content: (
      <>
        <p className="mb-4">
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
        </p>
        <h4 className="font-bold text-gray-800 mt-4 mb-2">Personal Data</h4>
        <p className="mb-4">
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you ("Personal Data"). Personally identifiable information
          may include, but is not limited to:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Cookies and Usage Data</li>
        </ul>
      </>
    ),
  },
  {
    id: "use-of-data",
    title: "3. How We Use Your Data",
    content: (
      <>
        <p className="mb-4">
          Traderez uses the collected data for various purposes:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>
            To allow you to participate in interactive features of our Service
            when you choose to do so
          </li>
          <li>To provide customer care and support</li>
          <li>
            To provide analysis or valuable information so that we can improve
            the Service
          </li>
          <li>To monitor the usage of the Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking",
    content: (
      <>
        <p className="mb-4">
          We use cookies and similar tracking technologies to track the activity
          on our Service and hold certain information.
        </p>
        <p>
          Cookies are files with small amount of data which may include an
          anonymous unique identifier. You can instruct your browser to refuse
          all cookies or to indicate when a cookie is being sent. However, if
          you do not accept cookies, you may not be able to use some portions of
          our Service.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "5. Third-Party Services",
    content: (
      <>
        <p className="mb-4">
          We may employ third party companies and individuals to facilitate our
          Service ("Service Providers"), to provide the Service on our behalf,
          to perform Service-related services or to assist us in analyzing how
          our Service is used.
        </p>
        <p>
          These third parties have access to your Personal Data only to perform
          these tasks on our behalf and are obligated not to disclose or use it
          for any other purpose. Examples include payment processors (like
          Stripe or PayPal) and analytics providers (like Google Analytics).
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "6. Data Security",
    content: (
      <>
        <p>
          The security of your data is important to us, but remember that no
          method of transmission over the Internet, or method of electronic
          storage is 100% secure. While we strive to use commercially acceptable
          means to protect your Personal Data, we cannot guarantee its absolute
          security.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "7. Contact Us",
    content: (
      <>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            By email:{" "}
            <span className="font-semibold text-gray-800">
              privacy@Traderez.com
            </span>
          </li>
          <li>
            By visiting this page on our website:{" "}
            <Link to="/contact" className="text-[#ec4899] hover:underline">
              Traderez.com/contact
            </Link>
          </li>
        </ul>
      </>
    ),
  },
];

/* ================= COMPONENT ================= */
const Privacy = () => {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  // Scroll Spy Effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      SECTIONS.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-28 pb-20">
      {/* --- HEADER --- */}
      <div className="bg-gray-50 border-b border-gray-100 py-16 mb-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-600 mb-4"
          >
            <BackButton />
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            We care about your data. Here’s a clear explanation of what we
            collect and how we use it.
            <br className="hidden md:block" />
            Last Updated:{" "}
            <span className="font-semibold text-gray-700">
              October 24, 2024
            </span>
          </motion.p>
        </div>
      </div>

      {/* --- CONTENT LAYOUT --- */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12">
          {/* SIDEBAR NAVIGATION (Sticky) */}
          <div className="hidden md:block col-span-1">
            <div className="sticky top-32">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                On this page
              </h3>
              <ul className="space-y-3 border-l-2 border-gray-100">
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`
                        text-sm pl-4 text-left transition-all duration-200 border-l-2 -ml-[2px] block w-full
                        ${
                          activeSection === section.id
                            ? "text-[#ec4899] border-[#ec4899] font-semibold"
                            : "text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-300"
                        }
                      `}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="md:col-span-3 max-w-3xl">
            {SECTIONS.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 scroll-mt-32"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-4 text-base">
                  {section.content}
                </div>
              </motion.section>
            ))}

            {/* Bottom Callout */}
            <div className="mt-16 p-8 bg-[#ec4899]/5 rounded-2xl border border-[#ec4899]/20">
              <h3 className="font-bold text-gray-900 mb-2">
                Data Protection Officer
              </h3>
              <p className="text-gray-600 mb-4">
                To request access to your personal data, or to request
                correction or deletion, please contact our DPO directly.
              </p>
              <a
                href="mailto:dpo@Tradaz.com"
                className="text-[#ec4899] font-bold hover:underline"
              >
                dpo@Tradaz.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
