export default function Projects() {
  const projects = [
    {
      title: "Employee Management System",
      description:
        "Developed a full-stack Employee Management System to manage employees, departments, attendance, payroll, and role-based access. Built secure REST APIs with complete CRUD functionality and a responsive dashboard for efficient workforce management.",
      tech: ["ReactJS", "Spring Boot", "MySQL", "REST API"],
      github:
        "https://github.com/Benasir400/employee-management-system",
      status: "Completed",
      featured: true,
    },

    {
      title: "Smart Expense Tracker",
      description:
        "Built a responsive personal finance management application with expense tracking, budgeting, salary management, expense categorization, analytics dashboard, and interactive charts for financial insights.",
      tech: ["ReactJS", "Spring Boot", "MySQL", "Recharts"],
      github:
        "https://github.com/Benasir400/smart-expense-tracker",
      demo:
        "https://smart-expense-tracker-chi-two.vercel.app/",
      status: "Live",
      featured: true,
    },

    {
      title: "Oral Cancer Detection",
      description:
        "Developed an AI-powered web application for early oral cancer detection using deep learning. The system analyzes oral cavity images to identify potential cancerous regions and provides prediction results with explainable AI support for preliminary screening.",
      tech: [
        "ReactJS",
        "Spring Boot",
        "Python",
        "TensorFlow",
        "REST API",
      ],
      github:
        "https://github.com/Benasir400/oral_cancer",
      status: "Research Project",
      featured: true,
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

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-violet-400 font-semibold text-sm">
                  PROJECT {index + 1}
                </span>

                <span className="text-xs bg-violet-500/10 text-violet-300 px-3 py-1 rounded-full">
                  {project.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-violet-500 hover:bg-violet-600 text-white px-5 py-3 rounded-xl font-semibold transition"
                >
                  GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-xl font-semibold transition"
                  >
                    Live Demo
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