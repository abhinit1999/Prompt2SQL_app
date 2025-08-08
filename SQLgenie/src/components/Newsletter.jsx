// // src/components/Newsletter.jsx
// export default function Newsletter() {
//   return (
//     <div className="bg-indigo-100 py-16 px-6 text-center">
//       <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated</h3>
//       <p className="text-gray-600 mb-6">Get notified about new features and improvements.</p>
//       <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
//         <input
//           type="email"
//           placeholder="Your email address"
//           className="w-full sm:w-auto px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
//         />
//         <button
//           type="submit"
//           className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700"
//         >
//           Subscribe
//         </button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setError("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Email is invalid.");
      return;
    }

    setIsSending(true);
    setStatus("Sending...");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxQPxCHA6EpHEWddYM5bYlhuPmyqkjpdqTersg9iivzgwzASI-fQOLp-GanK6IP_04z/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      setStatus("✅ Thank you for subscribing!");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("❌ Something went wrong.");
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <div className="bg-indigo-100 py-16 px-6 text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated</h3>
      <p className="text-gray-600 mb-6">
        Get notified about new features and improvements.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
      >
        <input
          type="email"
          placeholder="Your email address"
          className="w-full sm:w-auto px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          disabled={isSending}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700"
          disabled={isSending}
        >
          {isSending ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {/* Error message */}
      {error && <p className="text-red-600 mt-3">{error}</p>}

      {/* Status message */}
      {status && !error && (
        <p
          className={`mt-3 ${
            status.startsWith("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
}
