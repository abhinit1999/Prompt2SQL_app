import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <div className="bg-indigo-600 text-white py-16 px-6 text-center">
      <h3 className="text-3xl font-bold mb-4">Ready to turn questions into queries?</h3>
      <p className="mb-8">Join Prompt2SQL and experience the power of instant SQL generation.</p>
      <Link to="/app" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
        Try the App
      </Link>
    </div>
  );
}
