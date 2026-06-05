import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-violet-400">
          Benasir
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#about" className="hover:text-violet-400 transition">About</a>
          <a href="#skills" className="hover:text-violet-400 transition">Skills</a>
          <a href="#projects" className="hover:text-violet-400 transition">Projects</a>
          <a href="#education" className="hover:text-violet-400 transition">Education</a>
          <a href="#certifications" className="hover:text-violet-400 transition">Certifications</a>
          <a href="#contact" className="hover:text-violet-400 transition">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-6 px-6 pb-6 text-gray-300 bg-slate-950 border-t border-slate-800">

          <a onClick={() => setOpen(false)} href="#about" className="hover:text-violet-400">About</a>
          <a onClick={() => setOpen(false)} href="#skills" className="hover:text-violet-400">Skills</a>
          <a onClick={() => setOpen(false)} href="#projects" className="hover:text-violet-400">Projects</a>
          <a onClick={() => setOpen(false)} href="#education" className="hover:text-violet-400">Education</a>
          <a onClick={() => setOpen(false)} href="#certifications" className="hover:text-violet-400">Certifications</a>
          <a onClick={() => setOpen(false)} href="#contact" className="hover:text-violet-400">Contact</a>

        </div>
      )}

    </nav>
  );
}