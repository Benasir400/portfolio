export default function Projects() {
  const projects = [
    {
      title: "Smart Expense Tracker",
      description:
        "Track expenses, salaries, and budgets with secure login, analytics, monthly reports, and PDF export.",
      tech: ["React.js", "Java", "Spring Boot", "MySQL", "JWT", "Recharts"],
      github: "https://github.com/Benasir400/smart-expense-tracker",
      demo: "https://smart-expense-tracker-chi-two.vercel.app/",
      status: "Live",
    },
    {
      title: "Employee Management System",
      description:
        "Manage employee records with secure authentication, role-based access, dashboards, and REST APIs.",
      tech: ["React.js", "Java", "Spring Boot", "Spring Security", "MySQL"],
      github: "https://github.com/Benasir400/employee-management-system",
      status: "Completed",
    },
    {
      title: "PlaceTrack - Placement Drive Management System",
      description:
        "Manage placement drives, student registrations, eligibility checks, job applications, and notifications.",
      tech: ["React.js", "Java", "Spring Boot", "MySQL", "JWT", "Flyway"],
      github: "https://github.com/Benasir400/Placement-Tracker",
      demo: "https://placement-tracker-frontend-iota.vercel.app/",
      status: "Live",
    },
    {
      title: "Oral Cancer Detection",
      description:
        "Contributed to a research project using deep learning for oral image analysis, cancer classification, and explainable AI.",
      tech: ["Python", "TensorFlow", "CNN", "U-Net", "CatBoost"],
      github: "https://github.com/Benasir400/oral_cancer",
      status: "Research Project",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-violet-400">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Projects showcasing my skills in full-stack development and
            problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300 shadow-lg flex flex-col"
            >
              <div className="flex justify-between items-center mb-5 gap-3">
                <span className="text-violet-400 font-semibold text-sm tracking-wider">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs bg-violet-500/10 text-violet-300 border border-violet-500/20 px-3 py-1.5 rounded-full">
                  {project.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6 flex-grow">
                {project.description}
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/10 text-violet-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 flex-wrap mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white px-5 py-3 rounded-xl font-semibold transition-colors"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Live Demo <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
