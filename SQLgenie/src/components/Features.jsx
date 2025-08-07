export default function Features() {
  const features = [
    { title: "Natural Language Input", desc: "Ask questions like 'Show me all orders from last week' and get SQL instantly." },
    { title: "Multiple DB Support", desc: "Works with MySQL, PostgreSQL, MongoDB, SQLite and more." },
    { title: "Smart Query Optimization", desc: "Your queries are optimized using AI before execution." },
  ];

  return (
    <div className="py-16 px-6 bg-white">
      <h3 className="text-center text-3xl font-bold text-gray-800 mb-12">Features</h3>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2 text-indigo-600">{f.title}</h4>
            <p className="text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
