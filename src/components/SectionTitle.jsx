// Reusable heading used by every section: a small numbered label + the title.
export default function SectionTitle({ number, label, title }) {
  return (
    <div className="section-title reveal">
      <p className="section-label">
        <span className="section-number">{number}</span> {label}
      </p>
      <h2>{title}</h2>
    </div>
  );
}
