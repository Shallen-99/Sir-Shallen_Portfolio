export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-zinc-950/70 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#about" className="font-bold text-lg tracking-tight">
          Sir-Shallen Ashford
        </a>

        <div className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
          <a className="hover:text-white transition" href="#about">About</a>
          <a className="hover:text-white transition" href="#projects">Projects</a>
          <a className="hover:text-white transition" href="#skills">Skills</a>
          <a className="hover:text-white transition" href="#contact">Contact</a>

          <a
            className="inline-flex items-center rounded-lg border border-zinc-700 px-3 py-1.5 hover:bg-zinc-900 transition"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
