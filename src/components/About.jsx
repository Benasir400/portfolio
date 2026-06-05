export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-violet-400">
            About Me
          </h2>

          <p className="text-gray-400 mt-4">
            Passionate about technology, innovation, and continuous learning.
          </p>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12">

          <p className="text-lg text-gray-300 leading-9">
            Hello! I'm <span className="text-violet-400 font-semibold">Benasir R</span>,
            a B.Tech Information Technology student with a strong interest in
            Full Stack Development. I enjoy transforming ideas into practical,
            user-friendly web applications using modern technologies.
          </p>

          <p className="text-lg text-gray-300 leading-9 mt-6">
            My technical expertise includes React, Java, Spring Boot,
            MySQL, HTML, CSS, JavaScript, Figma, Power BI, and Excel.
            I continuously improve my skills through hands-on projects,
            certifications, and real-world development experience.
          </p>

          

        </div>

      </div>
    </section>
  );
}