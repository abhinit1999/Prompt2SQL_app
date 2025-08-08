// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-10 px-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* About Section */}
//         <div>
//           <h2 className="text-xl font-bold mb-3">🔍 About Prompt2SQL</h2>
//           <p className="text-gray-300 text-sm leading-relaxed">
//             Prompt2SQL is an AI-powered tool that transforms natural language into SQL instantly. Designed for data lovers, students, and non-technical users to explore databases with ease.
//           </p>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex flex-col space-y-2 text-sm">
//           <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
//           <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
//           <Link to="#features" className="text-gray-400 hover:text-white">Features</Link>
//           <Link to="#faq" className="text-gray-400 hover:text-white">Contact</Link>
//           {/* <a href="https://prompt2sql.vercel.app/app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">App</a> */}

//           <Link to="/app" className="text-gray-400 hover:text-white">App</Link>
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex flex-col items-start md:items-end justify-between">
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
//             <div className="flex space-x-4 text-xl">
//               <a href="https://github.com/abhinit1999" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//                 <FaGithub />
//               </a>
//               <a href="https://linkedin.com/in/abhinit-kumar-singh-325325148/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//                 <FaLinkedin />
//               </a>
//               <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//                 <FaTwitter />
//               </a>
//             </div>
//           </div>
//           <p className="text-xs text-gray-500 mt-4 md:mt-10">
//             &copy; {new Date().getFullYear()} Prompt2SQL. All rights reserved.
//           </p>
//         </div>
//       </div>

//       {/* Bottom Divider */}
//       <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-500">
//         🚀 Built with ❤️ by Prompt2SQL team (Abhinit). Empowering everyone to query smarter.
//       </div>
//     </footer>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaTrophy,
  FaBookOpen,
  FaUserFriends,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdEvent, MdKeyboardArrowUp } from "react-icons/md";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="text-white">
      {/* Top Nav */}
      <div className="bg-[#03043d]">
        <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-center gap-8 text-sm md:text-base">
          <Link to="/" className="hover:text-gray-100 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gray-100 transition-colors">About</Link>
          <Link to="/support" className="hover:text-gray-100 transition-colors">Support</Link>
          <Link to="/documentation" className="hover:text-gray-100 transition-colors">Documentation</Link>
          <Link to="/contact" className="hover:text-gray-100 transition-colors">Contact Us</Link>
        </nav>
      </div>

      {/* Main Footer */}
      <div className="bg-gradient-to-r from-[#10223a] via-[#233f8e] to-[#6a2f83] pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* About */}
            <div>
              <h2 className="text-2xl font-bold">Prompt2SQL</h2>
              <p className="mt-3 text-gray-300 max-w-sm">
                Prompt2SQL is an AI-powered tool that converts your plain English (or any natural language)
                into accurate, optimized SQL queries in seconds. Ideal for data analysts, students, and
                anyone working with databases.
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2 text-yellow-400">
                <FaTrophy /> Features
              </h3>
              <ul className="mt-4 space-y-3 text-gray-200">
                <li>Instant SQL Generation</li>
                <li>Support for Multiple Databases</li>
                <li>Error Handling & Suggestions</li>
                <li>Beginner-Friendly Interface</li>
                <li>Real-time Output</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2 text-green-300">
                <FaBookOpen /> Resources
              </h3>
              <ul className="mt-4 space-y-3 text-gray-200">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/support" className="hover:text-white">Support Center</Link></li>
                <li><Link to="/documentation" className="hover:text-white">Documentation</Link></li>
                <li>Learning Guides</li>
                <li>Best Prompt Practices</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2 text-blue-300">
                <FaUserFriends /> Contact Us
              </h3>
              <ul className="mt-4 space-y-4 text-gray-200 text-sm">
                <li className="flex items-start gap-3">
                  <MdEmail className="mt-1" /> support@prompt2sql.com
                </li>
                <li className="flex items-center gap-3">
                  <MdLocationOn /> Global Virtual Platform
                </li>
                <li className="flex items-center gap-3">
                  <MdEvent /> Launched: 2025
                </li>
              </ul>
            </div>
          </div>

          {/* Social + Copy */}
          <div className="border-t border-gray-700 mt-8"></div>
          <div className="flex items-center justify-between mt-4 pb-6">
            <div className="flex items-center gap-4 text-lg text-gray-200">
              {/* <a href="#" aria-label="YouTube" className="p-2 hover:text-white"><FaYoutube /></a> */}
              <a href="#" aria-label="LinkedIn" className="p-2 hover:text-white"><FaLinkedin /></a>
              <a href="#" aria-label="Twitter" className="p-2 hover:text-white"><FaTwitter /></a>
              {/* <a href="#" aria-label="Facebook" className="p-2 hover:text-white"><FaFacebook /></a> */}
            </div>
            <div>Designed and developed by Abhinit.</div>
            <div className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Prompt2SQL. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed right-6 bottom-12 z-50 w-12 h-12 rounded-full shadow-lg flex items-center justify-center
                     bg-gradient-to-br from-[#5b6bff] to-[#7b4bff] text-white border-2 border-white/20
                     hover:scale-110 transition-transform"
        >
          <MdKeyboardArrowUp size={24} />
        </button>
      )}
    </footer>
  );
}
