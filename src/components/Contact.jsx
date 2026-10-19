import { useState } from 'react';
import { education, profile, site } from '../data/profile';
import SectionTitle from './SectionTitle';
import ContactForm from './ContactForm';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked: the email is still visible on the page
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionTitle number="05" label="Education & Contact" title="Let's build something reliable." />

        <div className="contact-grid">
          <article className="card reveal">
            <h3>Education</h3>
            <p className="edu-degree">{education.degree}</p>
            <p className="muted">{education.school}</p>
            <p className="edu-meta">
              <span>{education.year}</span>
              <span>{education.grade}</span>
            </p>
          </article>

          <article className="card contact-card reveal">
            <h3>Open to .NET full stack roles</h3>
            <p className="muted">
              Interested in teams building reliable products with C#, ASP.NET Core and React, especially
              where software meets real-world equipment.
            </p>
            <p className="contact-email">{profile.email}</p>
            <div className="hero-actions">
              <button className="btn btn-primary" type="button" onClick={copyEmail}>
                {copied ? 'Copied ✓' : 'Copy email'}
              </button>
              {site.calendly && (
                <a className="btn" href={site.calendly} target="_blank" rel="noreferrer">Book a call ↗</a>
              )}
              <a className="btn" href={`mailto:${profile.email}`}>Open mail app</a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              {profile.github && (
                <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              )}
            </div>

            <ContactForm />
          </article>
        </div>
      </div>
    </section>
  );
}
