import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import SectionTitle from './SectionTitle';

// Shows your latest public GitHub repositories automatically (free GitHub API, no key needed).
// Appears only after you set profile.github.
function usernameFrom(url) {
  const match = url.match(/github\.com\/([^/?#]+)/i);
  return match ? match[1] : '';
}

export default function GithubRepos() {
  const username = profile.github ? usernameFrom(profile.github) : '';
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!username) return;
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) =>
        setRepos(
          data
            .filter((r) => !r.fork && !r.name.endsWith('.github.io'))
            .slice(0, 6)
        )
      )
      .catch(() => setRepos([]));
  }, [username]);

  if (!username || repos.length === 0) return null;

  return (
    <section className="section" id="github">
      <div className="container">
        <SectionTitle number="★" label="Open source" title="Latest on GitHub." />
        <div className="repos-grid">
          {repos.map((repo) => (
            <a key={repo.id} className="card repo-card" href={repo.html_url} target="_blank" rel="noreferrer">
              <h3>{repo.name}</h3>
              <p className="muted">{repo.description || 'No description yet.'}</p>
              <div className="repo-meta">
                {repo.language && <span>{repo.language}</span>}
                <span>★ {repo.stargazers_count}</span>
                <span>Updated {new Date(repo.updated_at).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
