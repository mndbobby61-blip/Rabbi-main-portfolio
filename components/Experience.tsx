import { education, experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <h2 className="section-title">Experience & Education</h2>
        <div className="bento-grid">
          <div className="glass-panel bento-item wide">
            <h3 className="bento-title mb-8">Work Experience</h3>
            <div className="exp-list">
              {experience.map((job) => (
                <div className="exp-item" key={job.role}>
                  <div className="exp-role">{job.role}</div>
                  <div className="exp-org">{job.org}</div>
                  <div className="exp-date">{job.period} · {job.location}</div>
                  <ul style={{ marginTop: '12px', paddingLeft: '16px', color: 'var(--text-dim)', fontSize: '15px' }}>
                    {job.points.map((p) => (
                      <li key={p} style={{ marginBottom: '8px' }}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel bento-item wide">
            <h3 className="bento-title mb-8">Education</h3>
            <div className="exp-list">
              {education.map((e) => (
                <div className="exp-item" key={e.degree}>
                  <div className="exp-role">{e.degree}</div>
                  <div className="exp-org">{e.school}</div>
                  <div className="exp-date text-accent">{e.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
