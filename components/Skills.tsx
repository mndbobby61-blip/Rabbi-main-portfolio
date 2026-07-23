import { skillGroups } from "@/data/site";

export default function Skills() {
  return (
    <>
      {skillGroups.map((group, i) => (
        <div key={group.label} className={`glass-panel bento-item ${i === 0 ? 'wide' : 'small'}`}>
          <h3 className="bento-title" style={{ fontSize: '18px' }}>{group.label}</h3>
          <div className="skills-flow">
            {group.skills.map((s) => (
              <span className="skill-pill" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
