export default function Projects() {
  const projects = [
     {
      title: "Smart Expense Tracker",
      description:
        "Full-stack expense management application that helps users monitor income, track spending, and visualize financial insights.",
      tech: [
        "ReactJS",
        "Spring Boot",
        "MySQL",
        "Recharts"
      ],
      github:
        "https://github.com/Benasir400/smart-expense-tracker"
    },
    {
      title: "AI Resume Analyzer",
      description:
        "AI-powered platform that analyzes resumes, provides ATS scoring, extracts skills, and generates recommendations for career improvement.",
      tech: [
        "ReactJS",
        "Spring Boot",
        "MySQL",
        "PDFBox",
        "REST API"
      ],
      github:
        "https://github.com/Benasir400/AI-Resume-Analyzer"
    },
   
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-violet-400">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4">
            Real-world applications built using modern technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-violet-400 transition"
            >

              <div className="text-violet-400 text-sm font-semibold mb-3">
                PROJECT {index + 1}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-violet-500 hover:bg-violet-600 px-5 py-3 rounded-xl font-semibold transition"
              >
                View Project
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}