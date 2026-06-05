export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-violet-400 mb-6">
          Let's Connect
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          I am actively seeking internship and entry-level opportunities
          in Full Stack Development. Feel free to reach out for
          collaborations, projects, or professional opportunities.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Email */}
          <a
            href="mailto:bena26875@gmail.com"
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-violet-400 hover:-translate-y-2 transition block"
          >
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-semibold text-xl mb-2">Email</h3>
            <p className="text-gray-400 break-all">
              bena26875@gmail.com
            </p>
          </a>

          {/* Location */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-semibold text-xl mb-2">Location</h3>
            <p className="text-gray-400">
              Tenkasi, Tamil Nadu
            </p>
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/Benasir400"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-violet-400 hover:-translate-y-2 transition block"
          >
            <div className="text-3xl mb-3">💻</div>
            <h3 className="font-semibold text-xl mb-2">GitHub</h3>
            <p className="text-gray-400">
              View Profile
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/benasir-r-330850292"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-violet-400 hover:-translate-y-2 transition block"
          >
            <div className="text-3xl mb-3">💼</div>
            <h3 className="font-semibold text-xl mb-2">LinkedIn</h3>
            <p className="text-gray-400">
              Connect With Me
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}