import React from "react";

export default function Navbar({ currentSection, onNavigate, scrolled }) {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow-sm" : "bg-cream"
      }`}
    >
      <div className="max-w-9xl mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className="text-2xl font-bold cursor-pointer text-darkbrown"
          onClick={() => onNavigate("home")}
        >
          Ken Hyde
        </div>

        <div className="space-x-6 hidden md:flex">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className={`font-medium ${
                currentSection === section.id
                  ? "!text-[#4b2e2a]"
                  : "!text-[#9b785f]"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
