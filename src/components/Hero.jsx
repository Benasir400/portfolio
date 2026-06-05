export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-fuchsia-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">

        {/* TEXT SECTION */}
        <div className="order-2 md:order-1">

          <div className="inline-block px-4 py-2 rounded-full border border-violet-400 bg-violet-500/10 text-violet-300 text-sm mb-6">
            Open to Internships • Full Stack Development
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            BENASIR <span className="text-violet-400">R</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mt-4">
            Aspiring Full Stack Developer
          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-8 max-w-xl">
            Passionate about building modern web applications using React,
            Java, Spring Boot, and MySQL. Focused on creating clean,
            scalable, and user-friendly digital experiences.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="https://github.com/Benasir400"
              target="_blank"
              rel="noreferrer"
              className="bg-violet-500 hover:bg-violet-600 px-6 py-3 rounded-xl font-semibold transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/benasir-r-330850292"
              target="_blank"
              rel="noreferrer"
              className="border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-black px-6 py-3 rounded-xl font-semibold transition"
            >
              LinkedIn
            </a>

            <a
              href="/Resume_Benasir.pdf"
              download
              className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-xl font-semibold transition"
            >
              Download Resume
            </a>

          </div>

          {/* TECH TAGS */}
          <div className="flex flex-wrap gap-3 mt-10">

            {["React", "Java", "Spring Boot", "MySQL", "Figma"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

        {/* IMAGE SECTION */}
        <div className="flex justify-center order-1 md:order-2">

          <div className="relative">

            <div className="absolute inset-0 bg-violet-500/30 blur-3xl rounded-full"></div>

            <img
              src="/profile.jpg"
              alt="Benasir"
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-violet-400 shadow-2xl hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </div>
    </section>
  );
}