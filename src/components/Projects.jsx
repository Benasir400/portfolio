export default function Projects() {
  const projects = [
    {
      title: "Smart Expense Tracker",
      description:
        "Built a full-stack personal finance management application to track daily expenses, salaries, budgets, and spending categories. Features include JWT-based authentication, an interactive analytics dashboard, expense filtering, monthly reports, and PDF report generation.",
      tech: [
        "React.js",
        "Java",
        "Spring Boot",
        "MySQL",
        "JWT",
        "Recharts",
      ],
      github:
        "https://github.com/Benasir400/smart-expense-tracker",
      demo:
        "https://smart-expense-tracker-chi-two.vercel.app/",
      status: "Live",
      featured: true,
    },

    {
      title: "Employee Management System",
      description:
        "Developed a full-stack application to manage employee records and workforce operations. Implemented secure authentication, role-based access control, protected dashboards, and REST APIs. Designed a responsive interface for managing employee information and organizational activities.",
      tech: [
        "React.js",
        "Java",
        "Spring Boot",
        "Spring Security",
        "MySQL",
        "REST API",
      ],
      github:
        "https://github.com/Benasir400/employee-management-system",
      status: "Completed",
      featured: true,
    },

    {
      title: "PlaceTrack - Placement Drive Management System",
      description:
        "Developed a placement management platform that helps college coordinators manage placement drives and students explore job opportunities. Implemented JWT authentication, role-based access control, invitation-based registration, drive publishing, eligibility checks, applications, bookmarks, notifications, and rule-based announcement parsing. Integrated React dashboards with Spring Boot REST APIs and database migrations.",
      tech: [
        "React.js",
        "Java",
        "Spring Boot",
        "Spring Security",
        "MySQL",
        "Flyway",
        "JWT",
        "REST API",
      ],
      github: "https://github.com/Benasir400/Placement-Tracker",
      status: "Completed",
      featured: true,
    },

    {
      title: "Oral Cancer Detection",
      description:
        "Contributed to a research project focused on oral cancer screening using deep learning and machine learning techniques. The system analyzes oral cavity images to identify potential regions of concern and explores image segmentation, classification, and explainable AI methods to support model interpretation and preliminary screening.",
      tech: [
        "Python",
        "TensorFlow",
        "CNN",
        "U-Net",
        "CatBoost",
        "Explainable AI",
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
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-violet-400">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore my projects showcasing full-stack development,
            problem-solving, and practical application of technology.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300 shadow-lg flex flex-col"
            >
              {/* Project Number and Status */}
              <div className="flex justify-between items-center mb-5 gap-3">
                <span className="text-violet-400 font-semibold text-sm tracking-wider">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-xs bg-violet-500/10 text-violet-300 border border-violet-500/20 px-3 py-1.5 rounded-full whitespace-nowrap">
                  {project.status}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-400 leading-7 mb-6 flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
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

              {/* Project Links */}
              <div className="flex gap-3 flex-wrap mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white px-5 py-3 rounded-xl font-semibold transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.78 1.14 3.01 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.06c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                  GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Live Demo
                    <span aria-hidden="true">↗</span>
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