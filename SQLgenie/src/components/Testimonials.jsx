// /src/components/Testimonials.jsx
export default function Testimonials() {
  const testimonials = [
    {
      quote: "Prompt2SQL saved me hours of manual SQL writing. The AI is surprisingly accurate!",
      author: "Ritika D., Data Analyst",
    },
    {
      quote: "Super intuitive tool — I love how it supports multiple databases out of the box.",
      author: "Karthik M., Backend Developer",
    },
    {
      quote: "Prompt2SQL is a game-changer. It turns natural language into clean, executable SQL with zero friction. The UI is fast, intuitive, and beautifully designed. I can now focus on analyzing data instead of writing queries.",
      author: "Avdhut. N., Tech Lead",
    },
    {
      quote: "From a natural question to SQL in seconds. Brilliant!",
      author: "Priya V., Business Analyst",
      
    },
     {
      quote: "An excellent tool for anyone who needs to generate SQL queries quickly. Highly recommend! without any technical knowledge.",
      author: "Sachin.Kumbhar., Software Engineer",
      
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">
      <h3 className="text-center text-2xl font-bold text-gray-800 mb-10">What Users Say</h3>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white shadow-md p-6 rounded-xl">
            <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
            <p className="text-indigo-600 font-semibold">– {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
