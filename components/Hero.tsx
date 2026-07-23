import Image from "next/image";
import { contact } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-content">
        <div className="hero-kicker">
          <span className="status-dot" />
          Junior Full Stack Developer
        </div>

        <h1 className="hero-title">
          Hi, I&apos;m Rabbi. I build <span className="accent">next-generation</span> web applications.
        </h1>

        <p className="hero-desc">
          I design and deploy production-ready web apps end-to-end. Focused on modern performance, beautiful interfaces, and robust backend architectures.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            Explore My Work
          </a>
          <a className="btn btn-ghost" href={contact.resume} download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
