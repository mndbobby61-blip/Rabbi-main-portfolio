import { projects } from "@/data/site";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main style={{ padding: '60px 0', minHeight: '80vh' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-dim)', marginBottom: '32px' }}>
            ← Back to Projects
          </Link>
          
          <h1 className="section-title" style={{ marginBottom: '16px' }}>{project.name}</h1>
          <p className="hero-desc" style={{ marginBottom: '32px', textAlign: 'left' }}>{project.tagline}</p>
          
          <div className="project-image-wrap" style={{ borderRadius: 'var(--radius-xl)', marginBottom: '48px', overflow: 'hidden' }}>
            <Image
              src={project.image}
              alt={project.name}
              width={800}
              height={500}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              unoptimized
            />
          </div>
          
          <div className="glass-panel bento-item" style={{ marginBottom: '32px', padding: '32px' }}>
            <h2 className="bento-title">Overview</h2>
            <p className="bento-text">{project.overview}</p>
            
            <h2 className="bento-title mt-8">Technical Details</h2>
            <p className="bento-text">{project.techDetail}</p>
          </div>

          <div className="bento-grid" style={{ marginTop: '0', marginBottom: '32px' }}>
            <div className="glass-panel bento-item tall" style={{ padding: '32px' }}>
              <h2 className="bento-title" style={{ fontSize: '20px' }}>Challenges Faced</h2>
              <ul style={{ paddingLeft: '20px', color: 'var(--text-dim)', marginTop: '16px' }}>
                {project.challenges.map((c, i) => (
                  <li key={i} style={{ marginBottom: '12px' }}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="glass-panel bento-item tall" style={{ padding: '32px' }}>
              <h2 className="bento-title" style={{ fontSize: '20px' }}>Potential Improvements</h2>
              <ul style={{ paddingLeft: '20px', color: 'var(--text-dim)', marginTop: '16px' }}>
                {project.improvements.map((c, i) => (
                  <li key={i} style={{ marginBottom: '12px' }}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="glass-panel bento-item" style={{ padding: '32px' }}>
            <h2 className="bento-title">Main Technology Stack</h2>
            <div className="project-stack" style={{ marginTop: '16px' }}>
              {project.stack.map((s) => (
                <span className="tag" key={s} style={{ fontSize: '14px', padding: '8px 16px' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '16px', marginTop: '48px', flexWrap: 'wrap' }}>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
              Live Project Link ↗
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ flex: 1, justifyContent: 'center' }}>
              GitHub Repository (Client)
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
