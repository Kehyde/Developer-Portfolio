import React from "react";

// Example project data, you can replace these with your real projects
const projects = [
  {
    id: "auditops",
    title: "AuditOps",
    description: "All-in-one dashboard for smart contract auditors.",
    image: "/images/projects/auditops.png",
  },
  {
    id: "blockblind",
    title: "BlockBlind",
    description:
      "Blockchain poker ledger that lets users interact with smart contract pool.",
    image: "/images/projects/blockblind.png",
  },
  {
    id: "datablock",
    title: "DataBlock",
    description:
      "Rust-based blockchain indexer for fast, organized, and queryable on-chain data.",
    image: "/images/projects/datablock.png",
  },
];

export default function ProjectsGrid({ onProjectClick }) {
  return (
    <section id="projects" className="py-32 px-6 text-gray-900">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-lg text-gray-800">
          Some of the projects I’ve built recently. Click any project to learn
          more.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onProjectClick(project.id)}
            className="cursor-pointer bg-[#4b2e2a] rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
