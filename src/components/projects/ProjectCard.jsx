export default function ProjectCard({ project, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden transition hover:border-zinc-700"
    >
      <a href={project.live} target="_blank" rel="noreferrer" className="block">
        <div className="relative">
          <img
            src={project.image}
            alt={project.name}
            className="h-48 w-full object-cover transition duration-300 group-hover:opacity-80"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <span className="text-xs text-zinc-400 group-hover:text-zinc-200 transition">
              Live ↗
            </span>
          </div>

          <p className="mt-2 text-sm text-zinc-400">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech?.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>

      <div className="px-5 pb-5">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  );
}
