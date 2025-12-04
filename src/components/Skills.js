const skills = [
  "React & Next.js",
  "TypeScript",
  "Node.js",
  "Solidity",
  "Ethers.js",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Rust",
  "Javascript",
  "Github",
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Solidity", category: "Blockchain" },
  { name: "MongoDB", category: "Database" },
  { name: "Javascript", category: "Frontend/Backend" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-24"
    >
      <div className="max-w-6xl w-full space-y-16">
        {/* Section Title */}
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-4 py-3 bg-muted/50 rounded-xl border border-border hover:border-foreground/20 transition-colors text-center"
            >
              <span className="text-foreground/80">{skill}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Cards */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Core Tech Stack
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow"
              >
                <span className="text-foreground">{tech.name}</span>
                <span className="text-muted-foreground">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
