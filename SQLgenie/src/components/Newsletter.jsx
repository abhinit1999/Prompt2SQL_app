// src/components/Newsletter.jsx
export default function Newsletter() {
  return (
    <div className="bg-indigo-100 py-16 px-6 text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated</h3>
      <p className="text-gray-600 mb-6">Get notified about new features and improvements.</p>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full sm:w-auto px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
