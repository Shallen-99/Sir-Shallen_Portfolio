import SectionWrapper from "../layout/SectionWrapper.jsx";

const tech = [
  { label: "React", className: "top-2 left-4 animate-[float_5s_ease-in-out_infinite]" },
  { label: "JavaScript", className: "top-10 right-6 animate-[float_6s_ease-in-out_infinite]" },
  { label: "Tailwind", className: "bottom-10 left-10 animate-[float_7s_ease-in-out_infinite]" },
  { label: "Node", className: "bottom-6 right-10 animate-[float_5.5s_ease-in-out_infinite]" },
  { label: "GitHub", className: "top-24 left-1/2 -translate-x-1/2 animate-[float_8s_ease-in-out_infinite]" },
];

export default function About() {
  return (
    <SectionWrapper id="about" title="About">
      <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-10">
        {/* floating tech */}
        {tech.map((t) => (
          <span
            key={t.label}
            className={[
              "absolute select-none text-xs sm:text-sm",
              "px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900/60 text-zinc-200",
              "opacity-80",
              t.className,
            ].join(" ")}
          >
            {t.label}
          </span>
        ))}

        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <p className="text-zinc-400 text-sm mb-2">Hi, I’m</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Sir-Shallen Ashford
            </h1>
            <p className="mt-4 text-zinc-300 leading-relaxed max-w-xl">
              I’m a developer who builds clean, user-friendly web apps. I like
              traveling the world, playing videogames, and I'm also a foodie.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-white text-black px-5 py-2.5 font-medium hover:opacity-90 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-zinc-700 px-5 py-2.5 font-medium text-zinc-200 hover:bg-zinc-900 transition"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            {/* If you have /public/assets/profile.png, this works */}
            <img
              src="/assets/japan.jpg"
              alt="Profile"
              className="w-44 h-44 sm:w-56 sm:h-56 rounded-3xl object-cover border border-zinc-800"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
