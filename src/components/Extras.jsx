import { certifications, testimonials } from '../data/profile';
import SectionTitle from './SectionTitle';

// Certifications and recommendations. Each block shows only when it has items.
export default function Extras() {
  if (certifications.length === 0 && testimonials.length === 0) return null;

  return (
    <section className="section section-alt" id="credentials">
      <div className="container">
        <SectionTitle number="★" label="Credentials" title="Certifications & recommendations." />

        {certifications.length > 0 && (
          <div className="certs-grid">
            {certifications.map((cert) => (
              <article key={cert.name} className="card cert-card reveal">
                {cert.badgeImage && <img className="cert-badge" src={cert.badgeImage} alt={`${cert.name} badge`} />}
                <h3>{cert.name}</h3>
                <p className="muted">{cert.issuer} · {cert.year}</p>
                {cert.link && (
                  <a className="project-link" href={cert.link} target="_blank" rel="noreferrer">Verify ↗</a>
                )}
              </article>
            ))}
          </div>
        )}

        {testimonials.length > 0 && (
          <div className="quotes-grid">
            {testimonials.map((t) => (
              <figure key={t.name} className="card quote-card reveal">
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span className="muted">{t.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
