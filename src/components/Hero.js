import React from "react";

export default function Hero({ onNavigate }) {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Ken Hyde</h1>
      <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-2xl">
        Full-Stack Developer • Blockchain Enthusiast • SaaS Builder
        <br />
        Focused on distributed systems, smart contracts, and modern web apps.
        Turning complex problems into elegant, scalable solutions.
      </p>
      <button
        onClick={() => onNavigate("about")}
        className="px-8 py-4 bg-[#4b2e2a] text-white font-semibold rounded-md shadow-lg hover:bg-[#9b785f] transition"
      >
        Learn More
      </button>
      <div className="space-x-4 mt-10">
        <button
          onClick={() => window.open("https://github.com/Kehyde", "_blank")}
          className="px-8 py-4 bg-[#4b2e2a] text-white font-semibold rounded-md shadow-lg hover:bg-[#9b785f] hover:scale-105 transform transition duration-300"
        >
          Github
        </button>
        <button
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ken-hyde-901574269/",
              "_blank"
            )
          }
          className="px-8 py-4 bg-[#4b2e2a] text-white font-semibold rounded-md shadow-lg hover:bg-[#9b785f] hover:scale-105 transform transition duration-300"
        >
          LinkedIn
        </button>
        <button className="px-8 py-4 bg-[#4b2e2a] text-white font-semibold rounded-md shadow-lg hover:bg-[#9b785f] hover:scale-105 transform transition duration-300">
          Twitter
        </button>
      </div>
    </section>
  );
}
