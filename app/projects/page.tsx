import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/site";

export const metadata = {
  title: "All Projects - Rabbi Sarder",
};

export default function AllProjects() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '60px 0', minHeight: '80vh' }}>
        <div className="wrap">
          <h1 className="section-title text-center" style={{ marginBottom: '60px' }}>All Projects</h1>
          
          <div className="projects-grid">
            {projects.map((p) => (
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
        </div>
      </main>
      <Footer />
    </>
  );
}
