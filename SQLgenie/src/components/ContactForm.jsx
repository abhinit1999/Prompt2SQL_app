import { useState } from 'react';

export default function ContactForm() {
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

  return (
    <section className="bg-lightBg dark:bg-darkBg py-16 px-6" id="contact">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400 text-center">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 dark:text-white font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700 dark:text-white font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 dark:text-white font-semibold mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your message here..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full w-full transition ${
              isSending ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>

          {status && <p className="text-center text-sm mt-4 text-gray-700 dark:text-gray-300">{status}</p>}
        </form>
      </div>
    </section>
  );
}
