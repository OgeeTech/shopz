import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ================= DATA ================= */
const SECTIONS = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p className="mb-4">
          Welcome to Shopz ("we," "our," or "us"). By accessing or using our
          website, mobile application, and services (collectively, the
          "Services"), you agree to be bound by these Terms and Conditions
          ("Terms"). If you do not agree to these Terms, please do not use our
          Services.
        </p>
        <p>
          These Terms apply to all visitors, users, and others who access or use
          the Service.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    title: "2. Accounts & Registration",
    content: (
      <>
        <p className="mb-4">
          To access certain features of Shopz, you may be required to register
          for an account. You agree to provide accurate, current, and complete
          information during the registration process and to update such
          information to keep it accurate, current, and complete.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>You are responsible for safeguarding your password.</li>
          <li>You agree not to disclose your password to any third party.</li>
          <li>
            You must notify us immediately upon becoming aware of any breach of
            security or unauthorized use of your account.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "subscriptions",
    title: "3. Subscriptions & Payments",
    content: (
      <>
        <p className="mb-4">
          Some parts of the Service are billed on a subscription basis
          ("Subscription(s)"). You will be billed in advance on a recurring and
          periodic basis (such as monthly or annually), depending on the type of
          subscription plan you select when purchasing the Subscription.
        </p>
        <p>
          At the end of each Billing Cycle, your Subscription will automatically
          renew under the exact same conditions unless you cancel it or Shopz
          cancels it.
        </p>
      </>
    ),
  },
  {
    id: "content",
    title: "4. User Content",
    content: (
      <>
        <p className="mb-4">
          Our Service allows you to post, link, store, share and otherwise make
          available certain information, text, graphics, videos, or other
          material ("Content"). You are responsible for the Content that you
          post to the Service, including its legality, reliability, and
          appropriateness.
        </p>
        <p>
          By posting Content to the Service, you grant us the right and license
          to use, modify, publicly perform, publicly display, reproduce, and
          distribute such Content on and through the Service.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "5. Intellectual Property",
    content: (
      <>
        <p>
          The Service and its original content (excluding Content provided by
          users), features, and functionality are and will remain the exclusive
          property of Shopz and its licensors. The Service is protected by
          copyright, trademark, and other laws of both the Nigeria and foreign
          countries. Our trademarks and trade dress may not be used in
          connection with any product or service without the prior written
          consent of Shopz.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "6. Termination",
    content: (
      <>
        <p>
          We may terminate or suspend your account immediately, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if you breach the Terms. Upon termination, your right to
          use the Service will immediately cease.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "7. Limitation of Liability",
    content: (
      <>
        <p>
          In no event shall Shopz, nor its directors, employees, partners,
          agents, suppliers, or affiliates, be liable for any indirect,
          incidental, special, consequential or punitive damages, including
          without limitation, loss of profits, data, use, goodwill, or other
          intangible losses, resulting from your access to or use of or
          inability to access or use the Service.
        </p>
      </>
    ),
  },
];

/* ================= COMPONENT ================= */
const Terms = () => {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120, // Offset for Navbar
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  // Optional: Update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Simple logic to highlight section based on scroll position

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
            Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500"
          >
            Last Updated:{" "}
            <span className="font-semibold text-gray-300">January 5, 2026</span>
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
                Contents
              </h3>
              <ul className="space-y-3 border-l-2 border-gray-100">
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`
                        text-sm pl-4 text-left transition-all duration-200 border-l-2 -ml-[2px]
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
                <div className="text-gray-600 leading-relaxed space-y-4">
                  {section.content}
                </div>
              </motion.section>
            ))}

            <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Have questions?</h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms, please contact us.
              </p>
              <a
                href="mailto:legal@shopz.com"
                className="text-[#ec4899] font-bold hover:underline"
              >
                legal@shopz.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
