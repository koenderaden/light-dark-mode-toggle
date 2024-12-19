"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
