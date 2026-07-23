import { contact } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap contact-wrap" style={{ maxWidth: '800px' }}>
        <h2 className="section-title text-center">Let's Connect</h2>
        <p className="hero-desc" style={{ marginBottom: '48px', textAlign: 'center' }}>
          Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="bento-grid" style={{ width: '100%', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          
          <a href={`mailto:${contact.email}`} className="glass-panel bento-item" style={{ textAlign: 'center', textDecoration: 'none', padding: '40px 24px' }}>
            <div className="contact-icon mx-auto mb-4" style={{ margin: '0 auto 16px', background: 'var(--accent)', color: '#fff' }}>
              <MailIcon />
            </div>
            <h3 className="bento-title" style={{ fontSize: '20px' }}>Email Me</h3>
            <p className="bento-text">{contact.email}</p>
            <span style={{ display: 'inline-block', marginTop: '16px', color: 'var(--accent)', fontWeight: '600', fontSize: '14px' }}>Send a message →</span>
          </a>

          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="glass-panel bento-item" style={{ textAlign: 'center', textDecoration: 'none', padding: '40px 24px' }}>
            <div className="contact-icon mx-auto mb-4" style={{ margin: '0 auto 16px', background: '#25D366', color: '#fff' }}>
              <WhatsAppIcon />
            </div>
            <h3 className="bento-title" style={{ fontSize: '20px' }}>WhatsApp & Phone</h3>
            <p className="bento-text">{contact.phone}</p>
            <span style={{ display: 'inline-block', marginTop: '16px', color: '#25D366', fontWeight: '600', fontSize: '14px' }}>Chat with me →</span>
          </a>

        </div>

        <div className="socials-grid" style={{ marginTop: '48px' }}>
          <a
            className="social-btn"
            href={contact.github}
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            className="social-btn"
            href={contact.facebook}
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
          <a
            className="social-btn"
            href={contact.linkedin}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.2 1.18a11 11 0 0 1 5.82 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.2.67.8.56A10.53 10.53 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
