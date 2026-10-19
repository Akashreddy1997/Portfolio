import { useEffect, useMemo, useRef, useState } from 'react';
import { profile, site } from '../data/profile';

// Ctrl+K (or ⌘K) menu: jump to any section or run a quick action.
export default function CommandPalette({ open, onClose, onToggleTheme }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);

  const actions = useMemo(() => {
    const goTo = (id) => () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    const list = [
      { label: 'Go to About', hint: 'Section', run: goTo('about') },
      { label: 'Go to Skills', hint: 'Section', run: goTo('skills') },
      { label: 'Go to Experience', hint: 'Section', run: goTo('experience') },
      { label: 'Go to Projects', hint: 'Section', run: goTo('projects') },
      { label: 'Go to Contact', hint: 'Section', run: goTo('contact') },
      { label: 'Copy email address', hint: profile.email, run: () => navigator.clipboard?.writeText(profile.email) },
      { label: 'Download resume', hint: 'PDF', run: () => window.open(profile.resumeFile, '_blank') },
      { label: 'Open LinkedIn', hint: 'New tab', run: () => window.open(profile.linkedin, '_blank', 'noreferrer') },
      { label: 'Send an email', hint: 'Mail app', run: () => (window.location.href = `mailto:${profile.email}`) },
      { label: 'Switch light / dark theme', hint: 'Theme', run: onToggleTheme },
    ];
    if (site.calendly) {
      list.push({ label: 'Book a 15-minute call', hint: 'Calendly', run: () => window.open(site.calendly, '_blank', 'noreferrer') });
    }
    if (profile.github) {
      list.push({ label: 'Open GitHub', hint: 'New tab', run: () => window.open(profile.github, '_blank', 'noreferrer') });
    }
    return list;
  }, [onToggleTheme]);

  const filtered = actions.filter((a) => a.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelected(0);
      inputRef.current?.focus();
    }
  }, [open]);

  if (!open) return null;

  function runAction(action) {
    onClose();
    action.run();
  }

  function handleKeyDown(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === 'Enter' && filtered[selected]) {
      runAction(filtered[selected]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  }

  return (
    <div className="palette-backdrop" onClick={onClose}>
      <div className="palette" role="dialog" aria-modal="true" aria-label="Quick actions" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          autoFocus
          className="palette-input"
          placeholder="Type a command or section…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelected(0);
          }}
          onKeyDown={handleKeyDown}
          aria-label="Search actions"
        />
        <ul className="palette-list" role="listbox">
          {filtered.length === 0 && <li className="palette-empty">No matching action</li>}
          {filtered.map((action, i) => (
            <li
              key={action.label}
              role="option"
              aria-selected={i === selected}
              className={i === selected ? 'palette-item selected' : 'palette-item'}
              onMouseEnter={() => setSelected(i)}
              onClick={() => runAction(action)}
            >
              <span>{action.label}</span>
              <span className="palette-hint">{action.hint}</span>
            </li>
          ))}
        </ul>
        <div className="palette-footer">
          <span><kbd>↑</kbd> <kbd>↓</kbd> move</span>
          <span><kbd>Enter</kbd> open</span>
          <span><kbd>Esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}
