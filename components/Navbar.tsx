"use client";

import { useState } from "react";
import { contact } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav glass-panel">
      <div className="nav-inner">
        <a href="/#home" className="nav-logo">
          Rabbi<span>.</span>
        </a>

        <div className="nav-tabs">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav-cta">
          <ThemeToggle />
          <a
            className="btn btn-primary resume-desktop"
            href={contact.resume}
            download
            style={{ padding: '8px 16px', fontSize: '14px' }}
          >
            Resume
          </a>
          <button
            className="nav-burger"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`nav-mobile ${open ? "open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href={contact.resume} download onClick={() => setOpen(false)}>
          Download Resume
        </a>
      </div>
    </nav>
  );
}
