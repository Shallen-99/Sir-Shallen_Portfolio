export default function SectionWrapper({ id, title, children }) {
  return (
    <section id={id} className="py-20" data-aos="fade-up">
      <div className="flex items-end justify-between gap-6 mb-8">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}
