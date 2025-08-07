import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">🔍 About Prompt2SQL</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Prompt2SQL is an AI-powered tool that transforms natural language into SQL instantly. Designed for data lovers, students, and non-technical users to explore databases with ease.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2 text-sm">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
          <Link to="#features" className="text-gray-400 hover:text-white">Features</Link>
          <Link to="#faq" className="text-gray-400 hover:text-white">Contact</Link>
          <a href="https://promptsql.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">App</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-start md:items-end justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <a href="https://github.com/abhinit1999" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/abhinit-kumar-singh-325325148/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 md:mt-10">
            &copy; {new Date().getFullYear()} Prompt2SQL. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-500">
        🚀 Built with ❤️ by Prompt2SQL team (Abhinit). Empowering everyone to query smarter.
      </div>
    </footer>
  );
}
