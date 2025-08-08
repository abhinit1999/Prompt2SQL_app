// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function ContactForm() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("");
//   const [errors, setErrors] = useState({});
//   const [isSending, setIsSending] = useState(false);

//   const validate = () => {
//     const newErrors = {};
//     if (!form.name.trim()) newErrors.name = "Name is required.";
//     if (!form.email.trim()) {
//       newErrors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(form.email)) {
//       newErrors.email = "Email is invalid.";
//     }
//     if (!form.message.trim()) newErrors.message = "Message is required.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setIsSending(true);
//     setStatus("Sending...");

//     try {
//       await fetch(
//         "https://script.google.com/macros/s/AKfycbznUsk_Po1MKRBrkQE5fyF1Myti24YvGj7ds2_eSOsxeQUMo_PTnF7kKHGNMTAkkOPsdA/exec",
//         {
//           method: "POST",
//           mode: "no-cors",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(form),
//         }
//       );

//       setStatus("✅ Message sent successfully!");
//       setForm({ name: "", email: "", message: "" });
//     } catch (err) {
//       console.error(err);
//       setStatus("❌ Something went wrong.");
//     } finally {
//       setIsSending(false);
//       setTimeout(() => setStatus(""), 5000);
//     }
//   };

//   return (
//     <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700"
//       >
//         <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
//           Contact Us
//         </h2>
//         <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
//           Got a question or feedback? We’d love to hear from you. Fill in the form below, and our team will get back to you shortly.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-gray-700 dark:text-white font-medium mb-2">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
//               placeholder="Your full name"
//             />
//             {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//           </div>

//           <div>
//             <label className="block text-gray-700 dark:text-white font-medium mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
//               placeholder="your@email.com"
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//           </div>

//           <div>
//             <label className="block text-gray-700 dark:text-white font-medium mb-2">Message</label>
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               rows="5"
//               className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
//               placeholder="Write your message here..."
//             />
//             {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             disabled={isSending}
//             className={`bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-full w-full font-semibold shadow-lg transition ${
//               isSending ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           >
//             {isSending ? "Sending..." : "Send Message"}
//           </motion.button>

//           {status && (
//             <p className="text-center text-sm mt-4 text-gray-700 dark:text-gray-300">{status}</p>
//           )}
//         </form>
//       </motion.div>
//     </section>
//   );
// }

import { useState } from 'react';

export default function ContactForm() {
  // === KEEPING ALL LOGIC EXACTLY AS-IS ===
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);
    setStatus('Sending...');

    try {
      await fetch('https://script.google.com/macros/s/AKfycbznUsk_Po1MKRBrkQE5fyF1Myti24YvGj7ds2_eSOsxeQUMo_PTnF7kKHGNMTAkkOPsdA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      setStatus('✅ Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('❌ Something went wrong.');
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus(''), 5000); // Clear status after 5s
    }
  };
  // === LOGIC END ===

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-950 flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Intro / CTA */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300">
              Get in touch
            </h2>
            <p className="text-gray-300 mb-6">
              Have a question, feedback, or business inquiry?
              We’d love to hear from you. Simply send us a message, and our team will respond promptly
            </p>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>• Response time: typically within 24–48 hours</li>
              <li>• Email: <span className="text-yellow-300">support@prompt2sql.com</span></li>
              <li>• Location: Pune, India</li>
            </ul>
          </div>

          {/* Right: Form Card */}
          <div
            className="relative p-1 rounded-3xl"
            aria-hidden
          >
            {/* Decorative glowing border */}
            <div className="absolute inset-0 rounded-3xl blur-xl opacity-40" style={{ background: 'linear-gradient(90deg,#7c3aed,#06b6d4)' }}></div>

            <div className="relative bg-white/5 backdrop-blur-md border border-white/6 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-4">Send a message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full p-3 rounded-xl bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full p-3 rounded-xl bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Write your message here..."
                    className="w-full p-3 rounded-xl bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-3 rounded-full text-lg font-semibold text-black transition transform ${
                    isSending
                      ? 'bg-yellow-300 opacity-60 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-300 hover:to-yellow-600 shadow-lg hover:shadow-yellow-500/40'
                  }`}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status */}
                {status && (
                  <p className="text-center text-sm mt-3 text-gray-200">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* small fade-in animation (purely presentational) */}
      <style>{`
        @keyframes subtleUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        section#contact > div > div > div { animation: subtleUp 0.7s ease-out both; }
      `}</style>
    </section>
  );
}
