// DocumentationPage.jsx
import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function DocumentationPage() {
  const sections = [
    {
      title: "Getting Started",
      content:
        "To get started with Prompt2SQL, simply navigate to the demo page, enter your natural language query, and watch it transform into SQL instantly. No setup required.",
    },
    {
      title: "Features Overview",
      content:
        "Our tool converts plain English into optimized SQL queries, supports multiple SQL dialects, and provides instant results with the option to copy the query directly.",
    },
    {
      title: "API Integration",
      content:
        "Developers can integrate Prompt2SQL into their apps via our REST API. Send natural language input and receive structured SQL in JSON format.",
    },
    {
      title: "FAQ",
      content:
        "Common questions and troubleshooting tips are available here to ensure you have the smoothest experience possible.",
    },
    {
      title: "Support",
      content:
        "Need help? Contact our support team via the form on our contact page or email us directly for enterprise solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-8 md:px-16 lg:px-20 py-16">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12 text-yellow-400"
      >
        Documentation
      </motion.h1>

      {/* Sections */}
      <div className="max-w-4xl mx-auto space-y-10">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-4">
              {section.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
