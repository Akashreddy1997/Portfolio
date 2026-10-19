import { profile, quickFacts, site } from '../data/profile';

// A short summary card for recruiters: everything important in 10 seconds.
export default function QuickFacts() {
  const facts = quickFacts.filter((f) => f.value); // hide empty values

  return (
    <section className="quickfacts-wrap" aria-label="At a glance">
      <div className="container">
        <div className="quickfacts reveal">
          <div className="quickfacts-head">
            <h2>At a glance</h2>
            <p className="muted">For recruiters and hiring managers</p>
          </div>

          <dl className="quickfacts-grid">
            {facts.map((fact) => (
              <div key={fact.label} className="quickfact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="quickfacts-actions">
            <a className="btn btn-primary" href={profile.resumeFile} download>Download resume (PDF)</a>
            {site.calendly && (
              <a className="btn" href={site.calendly} target="_blank" rel="noreferrer">Book a 15-min call ↗</a>
            )}
            <a className="btn" href="#contact">Contact me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
