export default function Portfolio() {
  const skills = {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Figma",
    ],
    backend: ["Java", "Spring Boot"],
    database: ["MySQL", "Power BI", "Excel"],
    tools: ["VS Code", "Spring Tool Suite", "GitHub", "Figma"],
  };

  const projects = [
   {
  title: "AI Resume Analyzer",
  description:
    "A full-stack AI-powered Resume Analyzer that allows users to upload resumes and receive ATS scoring, skill extraction, and job role recommendations. The system provides AI-based suggestions to improve resume quality and match job requirements.",
  tech: ["ReactJS", "Spring Boot", "MySQL", "PDFBox", "Spring Security", "REST API"],
  github: "https://github.com/Benasir400/AI-Resume-Analyzer",
  demo: "#"
}
    
   
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-cyan-400">Benasir</h1>

          <div className="flex gap-6 text-sm md:text-base">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        {/* Profile Image */}
        <img
          src="/profile.jpg"
          alt="Benasir"
          className="w-44 h-44 md:w-52 md:h-52 rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_40px_rgba(34,211,238,0.6)] mb-8 hover:scale-105 transition duration-300"
        />

        <h2 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-cyan-400">Benasir</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
          BTech IT Student passionate about becoming a Full Stack
          Developer and building modern web applications using React,
          Java, Spring Boot, and SQL.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          <a
            href="https://github.com/Benasir400/"
            target="_blank"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-2xl font-semibold transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/benasir-r-330850292"
            target="_blank"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-2xl font-semibold transition"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            download
            className="bg-white text-black hover:bg-gray-300 px-6 py-3 rounded-2xl font-semibold transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">
            About Me
          </h2>

          <p className="text-lg text-gray-300 leading-8">
            I am a passionate BTech Information Technology student
            aspiring to become a Full Stack Developer. I have knowledge
            in Java, React, HTML, CSS, SQL, UI/UX design using Figma,
            Excel, and Power BI. I enjoy learning new technologies and
            building modern web applications.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14 text-cyan-400">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard title="Frontend" items={skills.frontend} />
            <SkillCard title="Backend" items={skills.backend} />
            <SkillCard title="Database" items={skills.database} />
            <SkillCard title="Tools" items={skills.tools} />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14 text-cyan-400">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-black border border-gray-800 rounded-3xl p-6 hover:scale-105 transition duration-300 shadow-xl"
              >
                <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mb-6"></div>

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-xl transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">
            Contact Me
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Feel free to connect with me for projects, internships, or
            collaboration opportunities.
          </p>

          <div className="flex flex-col gap-4 text-lg">
            <p>📧 bena26875@gmail.com</p>
            <p>📍 Tenkasi, Tamil Nadu</p>
          </div>

          <div className="flex justify-center gap-6 mt-10 flex-wrap">
            <a
              href="https://github.com/Benasir400/"
              target="_blank"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-2xl font-semibold transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/benasir-r-330850292"
              target="_blank"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-2xl font-semibold transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © 2026 Benasir. All rights reserved.
      </footer>
    </div>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="bg-zinc-950 border border-gray-800 rounded-3xl p-6 hover:border-cyan-400 transition">
      <h3 className="text-2xl font-bold mb-6 text-cyan-400">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <span
            key={index}
            className="bg-black px-4 py-2 rounded-full border border-gray-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}