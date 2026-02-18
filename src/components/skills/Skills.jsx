import SectionWrapper from "../layout/SectionWrapper.jsx";
import { skills } from "../../data/skills.js";

function SkillPill({ label }) {
  return (
    <span className="px-4 py-2 rounded-full bg-zinc-950 border border-zinc-800 text-sm text-zinc-200">
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([group, list]) => (
          <div
            key={group}
            data-aos="fade-up"
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
          >
            <h3 className="font-semibold mb-4">{group}</h3>
            <div className="flex flex-wrap gap-3">
              {list.map((s) => (
                <SkillPill key={s} label={s} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
