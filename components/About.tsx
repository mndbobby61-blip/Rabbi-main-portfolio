import { contact } from "@/data/site";

export default function About() {
  return (
    <>
      <div className="glass-panel bento-item large">
        <h3 className="bento-title">Who I Am</h3>
        <p className="bento-text mb-4">
          I started out curious about how the websites I used every day actually worked, 
          and that curiosity turned into 800+ hours of hands-on, project-based training through Programming Hero.
        </p>
        <p className="bento-text mb-4">
          What I enjoy most is full stack work end to end: designing a REST API, wiring up authentication, and building the interface that sits on top of it.
        </p>
        <p className="bento-text">
          Outside of code, I'm usually following football, tinkering with side project ideas, or exploring the JavaScript ecosystem.
        </p>
      </div>
      <div className="glass-panel bento-item tall bento-photo">
        <img src="/img/profile.jpg" alt="Md. Rabbi Sarder" />
        <div className="bento-photo-tag">Rabbi Sarder</div>
      </div>
      <div className="glass-panel bento-item small">
        <h4 className="mono text-accent mb-2">Location</h4>
        <p className="bento-text">{contact.location}</p>
        <h4 className="mono text-accent mb-2 mt-4">Languages</h4>
        <p className="bento-text">Bengali, English</p>
      </div>
    </>
  );
}
