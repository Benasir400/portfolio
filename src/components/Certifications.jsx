export default function Certifications() {
  const certifications = [
    {
      title: "Learning ReactJS",
      issuer: "Certification"
    },
    {
      title: "Java Foundation",
      issuer: "Infosys Springboard"
    },
    {
      title: "DSA using Java(ELITE)",
      issuer: "NPTEL Certification"
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-violet-400">
            Certifications
          </h2>

          <p className="text-gray-400 mt-4">
            Continuous learning through professional training
            and industry-recognized certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-6 hover:border-violet-400 transition duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-2xl mb-5">
                🏆
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {cert.title}
              </h3>

              <p className="text-violet-400">
                {cert.issuer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}