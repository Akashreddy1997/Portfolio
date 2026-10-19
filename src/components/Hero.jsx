import { availability, exploring, profile, site, stats } from '../data/profile';
import SystemFlow from './SystemFlow';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="availability">
            <span className="pulse" /> {availability.status}
          </p>

          <div className="hero-name-row">
            {profile.photo && <img className="hero-photo" src={profile.photo} alt={profile.name} />}
            <div>
              <p className="eyebrow">{profile.role} · {profile.location}</p>
              <h1>{profile.name}</h1>
            </div>
          </div>

          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-intro">{profile.intro}</p>

          <ul className="hero-focus">
            {profile.focus.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">Get in touch</a>
            {site.calendly && (
              <a className="btn" href={site.calendly} target="_blank" rel="noreferrer">Book a call ↗</a>
            )}
            <a className="btn" href={profile.resumeFile} download>Download resume</a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            {profile.github && (
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            )}
          </div>

          {exploring.length > 0 && (
            <p className="exploring">
              <span className="exploring-label">Currently exploring</span>
              {exploring.join(' · ')}
            </p>
          )}
        </div>

        <SystemFlow />
      </div>

      <div className="container">
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
