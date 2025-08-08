// src/pages/About.jsx
import { FaBolt, FaLock, FaDatabase, FaUsers, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="pt-16 bg-gradient-to-b from-gray-950 via-slate-900 to-indigo-950 text-gray-100">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-yellow-400">
            Turn Plain English into Accurate SQL — Instantly
          </h1>
          <p className="mt-6 text-gray-300 text-base sm:text-lg">
            Prompt2SQL is an AI-powered assistant that converts your natural language into optimized,
            production-ready SQL queries. Built for analysts, developers, and teams who want to move faster
            and trust their data.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
            <Link
              to="/app"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
            >
              Try Prompt2SQL — Free
            </Link>

            <a
              href="#features"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-700 text-gray-200 hover:bg-gray-800 transition"
            >
              Learn How It Works
            </a>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section id="why" className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Why we built Prompt2SQL</h2>
            <p className="text-gray-300">
              We built Prompt2SQL to remove the friction of writing SQL. No more crafting queries from scratch,
              no more syntax guesswork — just tell Prompt2SQL what you want and get a clean, optimized SQL query
              ready to run.
            </p>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-yellow-400"><FaBolt /></span>
                <div>
                  <div className="font-semibold">Speed</div>
                  <div className="text-sm text-gray-300">Generate queries in seconds, not hours.</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 text-yellow-400"><FaDatabase /></span>
                <div>
                  <div className="font-semibold">Context-aware</div>
                  <div className="text-sm text-gray-300">Adapts to your schema and data types.</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 text-yellow-400"><FaCheck /></span>
                <div>
                  <div className="font-semibold">Optimized</div>
                  <div className="text-sm text-gray-300">Clean, efficient queries with best practices.</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 text-yellow-400"><FaLock /></span>
                <div>
                  <div className="font-semibold">Secure</div>
                  <div className="text-sm text-gray-300">Privacy-first design — your prompts stay private.</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900 p-6 border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-3">A better workflow for teams</h3>
            <p className="text-gray-300 mb-4">
              Prompt2SQL helps teams move from idea to insight faster — product managers, analysts, and engineers
              can collaborate without waiting on SQL experts.
            </p>

            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center justify-between bg-slate-800 p-3 rounded">
                <div>
                  <div className="text-sm text-gray-300">For Analysts</div>
                  <div className="text-xs text-gray-400">Faster report creation with fewer errors.</div>
                </div>
                <div className="text-yellow-400 font-semibold">Try</div>
              </div>

              <div className="flex items-center justify-between bg-slate-800 p-3 rounded">
                <div>
                  <div className="text-sm text-gray-300">For Developers</div>
                  <div className="text-xs text-gray-400">Less time on SQL, more time on features.</div>
                </div>
                <div className="text-yellow-400 font-semibold">Use</div>
              </div>

              <div className="flex items-center justify-between bg-slate-800 p-3 rounded">
                <div>
                  <div className="text-sm text-gray-300">For Teams</div>
                  <div className="text-xs text-gray-400">Shared prompts and consistent queries.</div>
                </div>
                <div className="text-yellow-400 font-semibold">Scale</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-white text-center">What makes Prompt2SQL special</h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-slate-800 rounded-lg border border-gray-800">
            <div className="text-yellow-400 text-2xl"><FaBolt /></div>
            <h4 className="mt-4 font-semibold">Instant SQL</h4>
            <p className="mt-2 text-sm text-gray-300">Describe the result — get accurate SQL immediately.</p>
          </div>

          <div className="p-6 bg-slate-800 rounded-lg border border-gray-800">
            <div className="text-yellow-400 text-2xl"><FaDatabase /></div>
            <h4 className="mt-4 font-semibold">Multi-DB Support</h4>
            <p className="mt-2 text-sm text-gray-300">MySQL, PostgreSQL, SQLite, and more — ready to use.</p>
          </div>

          <div className="p-6 bg-slate-800 rounded-lg border border-gray-800">
            <div className="text-yellow-400 text-2xl"><FaCheck /></div>
            <h4 className="mt-4 font-semibold">Optimized Queries</h4>
            <p className="mt-2 text-sm text-gray-300">Clean, efficient SQL following best practices.</p>
          </div>

          <div className="p-6 bg-slate-800 rounded-lg border border-gray-800">
            <div className="text-yellow-400 text-2xl"><FaLock /></div>
            <h4 className="mt-4 font-semibold">Privacy-first</h4>
            <p className="mt-2 text-sm text-gray-300">We never share your prompts or data.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-white text-center">Loved by teams & learners</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <blockquote className="bg-slate-800 p-6 rounded-lg border border-gray-800">
            <p className="text-gray-300">
              “Prompt2SQL cut our reporting time in half. Analysts who used to wait for engineers now run their own queries.”
            </p>
            <footer className="mt-4 text-sm text-gray-400">— Maya R., Data Analyst</footer>
          </blockquote>

          <blockquote className="bg-slate-800 p-6 rounded-lg border border-gray-800">
            <p className="text-gray-300">
              “I used Prompt2SQL in a debugging sprint — it generated a complex join I would have spent hours on.”
            </p>
            <footer className="mt-4 text-sm text-gray-400">— Arjun S., Backend Engineer</footer>
          </blockquote>

          <blockquote className="bg-slate-800 p-6 rounded-lg border border-gray-800">
            <p className="text-gray-300">
              “As an instructor, I use Prompt2SQL to demonstrate SQL patterns — students learn by example.”
            </p>
            <footer className="mt-4 text-sm text-gray-400">— Priya K., Educator</footer>
          </blockquote>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="rounded-xl bg-gradient-to-r from-indigo-900 to-violet-900 p-8 text-center border border-gray-800">
          <h3 className="text-2xl font-bold text-white">Ready to stop wrestling with SQL?</h3>
          <p className="mt-3 text-gray-300">Try Prompt2SQL for free — turn natural language prompts into production-ready SQL instantly.</p>
          <div className="mt-6">
            <Link to="/app" className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500">
              Launch the App
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ (simple) */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently asked questions</h2>

        <div className="space-y-4">
          <details className="bg-slate-800 p-4 rounded border border-gray-800">
            <summary className="font-semibold cursor-pointer">Which databases does Prompt2SQL support?</summary>
            <p className="mt-2 text-gray-300">We support MySQL, PostgreSQL, SQLite and can be extended to other SQL databases. Let us know your needs.</p>
          </details>

          <details className="bg-slate-800 p-4 rounded border border-gray-800">
            <summary className="font-semibold cursor-pointer">Is my data private?</summary>
            <p className="mt-2 text-gray-300">Yes. We design Prompt2SQL with privacy in mind — prompts are not shared with third parties.</p>
          </details>

          <details className="bg-slate-800 p-4 rounded border border-gray-800">
            <summary className="font-semibold cursor-pointer">Can I use Prompt2SQL in production?</summary>
            <p className="mt-2 text-gray-300">Absolutely. The generated queries are optimized and clean, but always review them before running on production data.</p>
          </details>
        </div>
      </section>
    </main>
  );
}
