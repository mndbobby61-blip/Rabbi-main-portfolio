import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/site";

export default function Projects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects">
      <div className="wrap">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {featuredProjects.map((p) => (
            <div className="project-card" key={p.slug}>
              <div className={`project-image-wrap ${p.thumbClass}`}>
                <Image
                  src={p.image}
                  alt={`${p.name} preview`}
                  width={600}
                  height={380}
                  unoptimized
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{p.name}</h3>
                <p className="project-tagline">{p.tagline}</p>
                <div className="project-stack">
                  {p.stack.slice(0, 4).map((s) => (
                    <span className="tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', gap: '12px' }}>
                  <Link href={`/projects/${p.slug}`} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                    View More / Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/projects" className="btn btn-ghost">
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
