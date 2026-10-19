import { useEffect, useState } from 'react';

// The "live system" card in the hero: shows the full stack from UI down to equipment,
// with a small rotating log like a real running system.
const layers = [
  { name: 'React · WPF', detail: 'Operator UI' },
  { name: 'ASP.NET Core API', detail: 'REST · SignalR' },
  { name: 'Services', detail: 'Business logic · DI' },
  { name: 'EF Core · SQL', detail: 'PostgreSQL · SQL Server' },
  { name: 'Equipment', detail: 'TCP/IP · Beckhoff' },
];

const logLines = [
  '[SignalR] equipment status → 12 clients',
  '[API] POST /loadport/door/request 202',
  '[TCP] LoadPort-1 heartbeat ok (14 ms)',
  '[EF Core] alarm history saved',
  '[Service] interlock check passed',
  '[TCP] Robot-1 state: Ready',
];

export default function SystemFlow() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1800);
    return () => clearInterval(id); // stop the timer when the component is removed
  }, []);

  const visibleLines = [0, 1, 2].map((i) => logLines[(tick + i) % logLines.length]);

  return (
    <div className="flow" aria-label="End-to-end system: user interface, API, services, database and equipment">
      <div className="flow-head">
        <span className="flow-dot" />
        <span>live system</span>
        <span className="flow-status">connected</span>
      </div>

      <ol className="flow-layers">
        {layers.map((layer, i) => (
          <li key={layer.name} className="flow-layer" style={{ '--i': i }}>
            <span className="flow-index">{String(i + 1).padStart(2, '0')}</span>
            <span className="flow-name">{layer.name}</span>
            <span className="flow-detail">{layer.detail}</span>
          </li>
        ))}
      </ol>

      <div className="flow-log" aria-hidden="true">
        {visibleLines.map((line, i) => (
          <div key={`${tick}-${i}`} className="flow-log-line">
            <span className="flow-prompt">›</span> {line}
          </div>
        ))}
      </div>
    </div>
  );
}
