import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendMail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_3yl8q5f", 
        "template_zz2dbzm",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "ukGhd22NQjCKwO-61" 
      )
      .then(() => {
        alert("✅ Message sent successfully!");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message.");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-violet-400">
            Let's Connect
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm actively looking for Full Stack Developer internships and
            entry-level opportunities. Feel free to contact me for projects,
            collaborations, or job opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Information */}

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-8 text-white">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="text-violet-400 font-semibold">
                  📧 Email
                </h4>

                <a
                  href="mailto:bena26875@gmail.com"
                  className="text-gray-300 hover:text-violet-400"
                >
                  bena26875@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-violet-400 font-semibold">
                  📍 Location
                </h4>

                <p className="text-gray-300">
                  Tenkasi, Tamil Nadu
                </p>
              </div>

              <div>
                <h4 className="text-violet-400 font-semibold">
                  💻 GitHub
                </h4>

                <a
                  href="https://github.com/Benasir400"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-violet-400"
                >
                  github.com/Benasir400
                </a>
              </div>

              <div>
                <h4 className="text-violet-400 font-semibold">
                  💼 LinkedIn
                </h4>

                <a
                  href="https://linkedin.com/in/benasir-r-330850292"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-violet-400"
                >
                  linkedin.com/in/benasir-r-330850292
                </a>
              </div>

            </div>

          </div>

          {/* Contact Form */}

          <form
            onSubmit={sendMail}
            className="bg-slate-950 border border-slate-800 rounded-3xl p-8 space-y-5"
          >

            <h3 className="text-2xl font-bold text-white">
              Send Me a Message
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-violet-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-violet-500 outline-none"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-violet-500 outline-none"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 resize-none focus:border-violet-500 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-violet-500 hover:bg-violet-600 py-4 rounded-xl font-semibold transition disabled:opacity-70"
            >
              {loading ? "Sending..." : "📨 Send Message"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}