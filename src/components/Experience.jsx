import { experience } from '../data/profile';
import SectionTitle from './SectionTitle';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionTitle number="03" label="Experience" title="Where I've built it." />

        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.company} className="timeline-item reveal">
              <div className="timeline-meta">
                <span className="timeline-period">{job.period}</span>
                <span className="timeline-company">{job.company}</span>
              </div>

              <div className="timeline-body">
                <h3>{job.title}</h3>
                <p className="timeline-summary">{job.summary}</p>
                <ul className="timeline-points">
                  {job.points.map((point) => (
                    <li key={point.slice(0, 30)}>{point}</li>
                  ))}
                </ul>
                <ul className="tags tags-small">
                  {job.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
