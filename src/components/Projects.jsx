export default function Projects() {
  const projects = [
    {
      title: "Employee Management System",
      description:
        "Developed a full-stack Employee Management System to manage employee records, departments, roles, attendance, and payroll. Implemented secure CRUD operations, REST APIs, and a responsive user interface for efficient workforce management.",
      tech: [
        "ReactJS",
        "Spring Boot",
        "MySQL",
        "REST API"
      ],
      github:
        "https://github.com/Benasir400/employee-management-system",
      
    },

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
  title: "Oral Cancer Detection",
  description:
    "Developed an AI-powered web application for early oral cancer detection using deep learning. The system analyzes oral cavity images to identify potential cancerous regions, providing prediction results that can assist in preliminary screening and improve early diagnosis.",
  tech: [
    "ReactJS",
    "Spring Boot",
    "Python",
    "TensorFlow",
    "REST API"
  ],
  github:
    "https://github.com/Benasir400/oral_cancer",
  
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

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">

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