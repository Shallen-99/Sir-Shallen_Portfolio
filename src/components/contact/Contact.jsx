import SectionWrapper from "../layout/SectionWrapper.jsx";

export default function Contact() {
  return (
    <SectionWrapper id="contact" title="Contact">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h3 className="font-semibold text-lg">Let’s connect</h3>
          <p className="mt-2 text-zinc-400 text-sm">
            Send me a message with a subject and I’ll get back to you.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="assets/resume.pdf"
              className="rounded-xl border border-zinc-700 px-5 py-2.5 font-medium text-zinc-200 hover:bg-zinc-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/Shallen-99"
              className="rounded-xl border border-zinc-700 px-5 py-2.5 font-medium text-zinc-200 hover:bg-zinc-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="www.linkedin.com/in/sir-shallen-ashford"
              className="rounded-xl border border-zinc-700 px-5 py-2.5 font-medium text-zinc-200 hover:bg-zinc-900 transition"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form
          className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 grid gap-4"
          action="mailto:youremail@example.com"
          method="POST"
          encType="text/plain"
          data-aos="fade-up"
        >
          <input
            name="subject"
            placeholder="Subject"
            className="rounded-xl bg-zinc-900/60 border border-zinc-800 px-4 py-3 outline-none focus:border-zinc-600"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            className="rounded-xl bg-zinc-900/60 border border-zinc-800 px-4 py-3 outline-none focus:border-zinc-600"
          />
          <button
            type="submit"
            className="rounded-xl bg-white text-black px-5 py-3 font-medium hover:opacity-90 transition"
          >
            Send Message
          </button>
          <p className="text-xs text-zinc-500">
            (This uses your device email client for MVP. We can upgrade to EmailJS/Formspree later.)
          </p>
        </form>
      </div>
    </SectionWrapper>
  );
}
