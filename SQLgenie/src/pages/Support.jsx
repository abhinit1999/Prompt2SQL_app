// src/pages/SupportPage.jsx
import React from "react";
import { motion } from "framer-motion";

const SupportPage = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16 md:px-20">
      {/* Page Header */}
      <motion.h1
        className="text-5xl font-bold text-center text-gold mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Support
      </motion.h1>

      {/* Introduction */}
      <motion.p
        className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Need help with Prompt2SQL?  
        Our support resources are here to guide you through troubleshooting,  
        learning best practices, and making the most of our tool.
      </motion.p>

      {/* Support Resources */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* FAQs */}
        <motion.div
          className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gold hover:shadow-gold transition duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gold mb-4">FAQs</h2>
          <p className="text-gray-400 mb-4">
            Find answers to common questions about using Prompt2SQL,  
            managing queries, and handling database connections.
          </p>
          <a
            href="/documentation#faqs"
            className="text-blue-400 hover:underline"
          >
            Read FAQs →
          </a>
        </motion.div>

        {/* Troubleshooting */}
        <motion.div
          className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gold hover:shadow-gold transition duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gold mb-4">Troubleshooting</h2>
          <p className="text-gray-400 mb-4">
            Step-by-step guidance for resolving common errors  
            and ensuring your SQL queries run smoothly.
          </p>
          <a
            href="/documentation#troubleshooting"
            className="text-blue-400 hover:underline"
          >
            Learn More →
          </a>
        </motion.div>

        {/* Community & Updates */}
        <motion.div
          className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gold hover:shadow-gold transition duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gold mb-4">Community & Updates</h2>
          <p className="text-gray-400 mb-4">
            Join our user community for tips, updates,  
            and feature announcements.
          </p>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Join on GitHub →
          </a>
        </motion.div>
      </div>

      {/* Footer Note */}
      <motion.p
        className="text-center text-gray-400 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        For specific queries, please visit our{" "}
        <a href="/contact" className="text-gold hover:underline">
          Contact Page
        </a>.
      </motion.p>
    </div>
  );
};

export default SupportPage;
