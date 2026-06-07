export default function Projects() {
  const projects = [
    {
      title: "Smart Expense Tracker",
      description:
        "Designed and developed a responsive full-stack web application for personal finance management. Features include expense tracking, budget monitoring, salary management, expense categorization, report generation, and interactive data visualization.",
      tech: [
        "ReactJS",
        "Spring Boot",
        "MySQL",
        "Recharts"
      ],
      github:
        "https://github.com/Benasir400/smart-expense-tracker",
      demo:
        "https://smart-expense-tracker-chi-two.vercel.app/"
    },

    {
      title: "AI Resume Analyzer",
      description:
        "Engineered an intelligent resume analysis system that automates ATS scoring, skill extraction, resume evaluation, and career recommendations. The application helps users optimize resumes for improved recruitment outcomes.",
      tech: [
        "ReactJS",
        "Spring Boot",
        "MySQL",
        "PDFBox",
        "REST API"
      ],
      github:
        "https://github.com/Benasir400/AI-Resume-Analyzer",
      demo:
        "https://your-resume-analyzer.vercel.app"
    }
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
              className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-violet-400 transition-all duration-300"
            >

              <div className="text-violet-400 text-sm font-semibold mb-3">
                PROJECT {index + 1}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">
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

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-violet-500 hover:bg-violet-600 px-5 py-3 rounded-xl font-semibold transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl font-semibold transition"
                >
                  Live Demo
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}