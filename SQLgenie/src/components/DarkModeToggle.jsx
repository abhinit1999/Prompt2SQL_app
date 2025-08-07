import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(prev => !prev)}
      className="ml-2 px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
