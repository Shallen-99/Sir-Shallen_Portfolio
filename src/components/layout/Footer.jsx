export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-zinc-400">
        © {new Date().getFullYear()} Sir-Shallen Ashford • Built with React + Tailwind
      </div>
    </footer>
  );
}
