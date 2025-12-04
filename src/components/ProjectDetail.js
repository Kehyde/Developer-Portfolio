import React from "react";

// Example project details, you can expand this with real data
const projectDetails = {
  auditops: {
    title: "AuditOps",
    description: `
AuditOps is an end-to-end audit operations platform designed to streamline how auditors plan, execute, review, and deliver audit work. It replaces scattered tools like Notion, GitHub, Google Docs, spreadsheets, and manual PDF creation by bringing the entire workflow into one unified dashboard.

Traditional auditors, especially solo practitioners and small firms, waste hours switching between documentation tools, version-control systems, email threads, and PDF generators. AuditOps solves this inefficiency by creating an integrated space where auditing, evidence tracking, reporting, and automation work seamlessly together.

CORE VISION

1. Organize audit tasks in a single structured workspace
2. Generate consistent, professional, and standardized reports instantly
3. Integrate with tools auditors already use
4. Offer an “auditor command center” dashboard
  `,
    image: "/images/projects/auditops.png",
    github: "https://github.com/Kehyde/AuditOps-Frontend",
    demo: "#",
  },

  blockblind: {
    title: "BlockBlind",
    description:
      "BlockBlind is a prototype blockchain poker ledger that showcases how players can interact with an on-chain contract pool through a clean, intuitive interface. The app provides simple actions—such as viewing balances, depositing test funds, and withdrawing from a shared community wallet—demonstrating how a decentralized poker ledger could function in a real product. While the prototype uses a single communal contract wallet rather than individual user wallets, it effectively highlights the core mechanics, UX design, and smart-contract integration behind a seamless web3 gaming experience.",
    image: "/images/projects/blockblind_home.png",
    github: "https://github.com/Kehyde/BlockBlind",
    demo: "#",
  },

  datablock: {
    title: "DataBlock",
    description: `DataBlock is an upcoming Rust-based blockchain indexing engine aimed at making on-chain data fast, structured, and easy to query. Still in early development, the project plans to provide developers with a modular, multi-chain solution for accessing historical data, events, and transactions—without the hassle of building custom indexers from scratch.`,
    image: "/images/projects/datablock.png",
    github: "https://github.com/Kehyde",
    demo: "#",
  },
};

export default function ProjectDetail({ projectId, onBack }) {
  const project = projectDetails[projectId];

  if (!project) return null;

  return (
    <section className="py-32 px-6 text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="mb-8 px-4 py-2 bg-[#4b2e2a] text-white rounded-md hover:bg-[#9b785f] transition"
        >
          ← Back to Projects
        </button>

        <h2 className="text-4xl font-bold mb-6">{project.title}</h2>
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-[500px] object-contain rounded-lg mb-6"
        />
        <p className="text-lg mb-6">{project.description}</p>

        <div className="flex space-x-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
