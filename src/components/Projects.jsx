import { projects } from '../data/profile';
import SectionTitle from './SectionTitle';

export default function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <SectionTitle number="04" label="Projects" title="Selected work." />

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article key={project.name} className="card project-card reveal">
              <div className="project-top">
                <span className="project-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="project-kind">{project.kind}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              {project.role && (
                <p className="project-role">
                  <span>My role</span> {project.role}
                </p>
              )}

              <ul className="project-highlights">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <ul className="tags tags-small">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              {project.link && (
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  View project ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
