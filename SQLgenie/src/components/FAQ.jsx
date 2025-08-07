// src/components/FAQ.jsx
export default function FAQ() {
  const faqs = [
    {
      q: "What is Prompt2SQL?",
      a: "It’s an AI-powered tool that converts your natural language questions into SQL queries instantly.",
    },
    {
      q: "Which databases are supported?",
      a: "We currently support MySQL, PostgreSQL, MongoDB, and SQLite.",
    },
    {
      q: "Is there a free version?",
      a: "Yes! We offer a free tier with access to basic features.",
    },
  ];

  return (
    <div id="faq" className="bg-gray-100 py-16 px-6">
      <h3 className="text-center text-3xl font-bold text-gray-800 mb-10">Frequently Asked Questions</h3>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold text-indigo-600 mb-2">{faq.q}</h4>
            <p className="text-gray-700">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
