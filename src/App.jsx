import { useCallback, useEffect, useState } from 'react';
import Nav, { navLinks } from './components/Nav';
import Hero from './components/Hero';
import QuickFacts from './components/QuickFacts';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GithubRepos from './components/GithubRepos';
import Extras from './components/Extras';
import Contact from './components/Contact';
import CommandPalette from './components/CommandPalette';
import useActiveSection from './hooks/useActiveSection';
import useReveal from './hooks/useReveal';
import { profile } from './data/profile';

const sectionIds = navLinks.map((l) => l.id);

// Start with the theme the visitor chose before, otherwise follow their system setting.
function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // storage can be blocked (private mode); just use the system theme
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const activeSection = useActiveSection(sectionIds);
  useReveal();

  // apply + remember the theme
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  // Ctrl+K / ⌘K opens the quick actions menu
  useEffect(() => {
    function onKeyDown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((open) => !open);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // reading progress bar at the top
  useEffect(() => {
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? window.scrollY / max : 0);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>
      <div className="progress" style={{ transform: `scaleX(${scrollProgress})` }} aria-hidden="true" />

      <Nav
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      <main>
        <Hero />
        <QuickFacts />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubRepos />
        <Extras />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="muted">
            Press <kbd>Ctrl</kbd> <kbd>K</kbd> for quick actions · Built with React & Vite
          </span>
        </div>
      </footer>

      <a
        href="#top"
        className={scrollProgress > 0.15 ? 'back-to-top show' : 'back-to-top'}
        aria-label="Back to top"
      >
        ↑
      </a>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} onToggleTheme={toggleTheme} />
    </>
  );
}
