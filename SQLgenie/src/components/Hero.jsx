import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-center px-4 bg-gradient-to-br from-purple-600 via-indigo-500 to-pink-500 bg-white bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText py-24 px-6">
      

      
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Prompt2SQL
      </h1>
      <h2 className="text-xl md:text-2xl mb-6">
        <Typewriter
          words={['Your Questions, Transformed into Queries.']}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <p className="mb-8 text-lg max-w-xl">
        Our SaaS tool helps you generate and run SQL queries on any database — fast, smart, and easy.
      </p>
      <Link
        to="/app"
        className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        Try the App
      </Link>
    </div>
  );
}
