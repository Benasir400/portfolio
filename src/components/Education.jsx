export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-violet-400">
            Education
          </h2>

          <p className="text-gray-400 mt-4">
            Academic background and learning journey.
          </p>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-2xl">
              🎓
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                B.Tech Information Technology
              </h3>

              <p className="text-violet-400 mt-2">
                Sri Krishna College of Technology (SKCT)
              </p>

              <p className="text-gray-400 mt-4 leading-7">
                Currently pursuing Information Technology with a
                strong focus on Full Stack Development, Java,
                Spring Boot, React, Database Management Systems,
                and Software Engineering.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}