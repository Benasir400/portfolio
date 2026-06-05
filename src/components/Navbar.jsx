export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-violet-400">
          Benasir
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">

          <a
            href="#about"
            className="hover:text-violet-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-violet-400 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-violet-400 transition"
          >
            Projects
          </a>

          <a
            href="#education"
            className="hover:text-violet-400 transition"
          >
            Education
          </a>

          <a
            href="#certifications"
            className="hover:text-violet-400 transition"
          >
            Certifications
          </a>

          <a
            href="#contact"
            className="hover:text-violet-400 transition"
          >
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}