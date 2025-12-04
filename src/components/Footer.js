import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#4b2e2a] text-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Ken Hyde. All rights reserved.
        </p>

        <div className="flex space-x-6">
          <a
            href="https://github.com/Kehyde"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ken-hyde-901574269/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/kenn0x1z?s=11&t=KiEuhKSHba275blu-WwoWA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
