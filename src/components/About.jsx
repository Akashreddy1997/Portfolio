import { about, approach } from '../data/profile';
import SectionTitle from './SectionTitle';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionTitle number="01" label="About" title="Full stack, all the way down to the machine." />

        <div className="about-grid">
          <div className="about-text reveal">
            {about.map((paragraph) => (
              <p key={paragraph.slice(0, 20)}>{paragraph}</p>
            ))}
          </div>

          <div className="approach reveal">
            <h3>How I work</h3>
            <ul>
              {approach.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
