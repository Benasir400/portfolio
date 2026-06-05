export default function Skills() {
  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Figma"],
    backend: ["Java", "Spring Boot"],
    database: ["MySQL", "Power BI", "Excel"],
    tools: ["VS Code", "Spring Tool Suite", "GitHub"]
  };

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-violet-400">
            Technical Skills
          </h2>

          <p className="text-gray-400 mt-4">
            Technologies and tools I work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <SkillCard
            title="Frontend"
            items={skills.frontend}
          />

          <SkillCard
            title="Backend"
            items={skills.backend}
          />

          <SkillCard
            title="Database"
            items={skills.database}
          />

          <SkillCard
            title="Tools"
            items={skills.tools}
          />

        </div>

      </div>
    </section>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-violet-400 transition">

      <h3 className="text-xl font-semibold text-violet-400 mb-5">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="px-4 py-2 bg-slate-950 rounded-full border border-slate-700 text-sm"
          >
            {item}
          </span>
        ))}
      </div>

    </div>
  );
}