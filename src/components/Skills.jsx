import { skillGroups } from '../data/profile';
import SectionTitle from './SectionTitle';

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <SectionTitle number="02" label="Skills" title="The stack I work in every day." />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="card skill-card reveal">
              <h3>{group.title}</h3>
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
