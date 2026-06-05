export default function WhyHireMe() {
  const reasons = [
    {
      title: "Full Stack Development",
      description:
        "Experienced in building web applications using React, Java, Spring Boot, and MySQL."
    },
    {
      title: "Strong Learning Mindset",
      description:
        "Continuously learning new technologies and improving development skills through projects and certifications."
    },
    {
      title: "Practical Experience",
      description:
        "Completed a Junior Web Developer internship and gained hands-on experience in web development."
    },
    {
      title: "Problem Solving",
      description:
        "Enjoy building solutions that address real-world challenges through technology."
    }
  ];

  return (
    <section id="whyhireme" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-violet-400">
            Why Hire Me?
          </h2>

          <p className="text-gray-400 mt-4">
            What I can bring to your team and organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-violet-400 transition"
            >
              <h3 className="text-2xl font-semibold text-violet-400 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}