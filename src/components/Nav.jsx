import { useState } from 'react';
import { profile } from '../data/profile';

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav({ theme, onToggleTheme, activeSection, onOpenPalette }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const initials = profile.name.split(' ').map((w) => w[0]).join('');

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" aria-label="Back to top">
          <span className="nav-mark">{initials}</span>
          <span className="nav-name">{profile.name}</span>
        </a>

        <nav aria-label="Main" className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeSection === link.id ? 'active' : ''}
                  aria-current={activeSection === link.id ? 'true' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-tools">
          <button className="kbd-button" onClick={onOpenPalette} aria-label="Open quick actions (Ctrl+K)">
            <kbd>Ctrl</kbd> <kbd>K</kbd>
          </button>
          <button
            className="icon-button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button
            className="icon-button menu-button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
