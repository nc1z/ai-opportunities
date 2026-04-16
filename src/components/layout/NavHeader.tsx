import { useState } from 'react'
import { Link } from 'react-router-dom'

export function NavHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b border-zinc-100 px-6 py-4 shrink-0">
      <div className="max-w-[860px] mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-xs tracking-widest uppercase text-zinc-400 hover:text-zinc-700 transition-colors font-medium"
          onClick={() => setMenuOpen(false)}
        >
          Opportunities in AI
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            to="/graph"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-700 transition-colors cursor-pointer"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="w-3.5 h-3.5"
            >
              <circle cx="8" cy="2" r="1.25" fill="currentColor" stroke="none" />
              <circle cx="2.5" cy="13" r="1.25" fill="currentColor" stroke="none" />
              <circle cx="13.5" cy="13" r="1.25" fill="currentColor" stroke="none" />
              <line x1="8" y1="3.25" x2="2.5" y2="11.75" />
              <line x1="8" y1="3.25" x2="13.5" y2="11.75" />
              <line x1="3.75" y1="13" x2="12.25" y2="13" />
            </svg>
            Graph
          </Link>
          <Link
            to="/blog"
            className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            About
          </Link>
          <Link
            to="/sources"
            className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            Sources
          </Link>
          <a
            href="https://github.com/nc1z/ai-opportunities"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-700 transition-colors group"
            aria-label="Star on GitHub"
          >
            <span className="flex items-center gap-1 text-xs">
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-zinc-300 group-hover:text-amber-400 transition-colors">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 11.933l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
              </svg>
              Star
            </span>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="sm:hidden flex items-center justify-center w-8 h-8 text-zinc-400 hover:text-zinc-700 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
              <line x1="2" y1="2" x2="14" y2="14" />
              <line x1="14" y1="2" x2="2" y2="14" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
              <line x1="2" y1="4" x2="14" y2="4" />
              <line x1="2" y1="8" x2="14" y2="8" />
              <line x1="2" y1="12" x2="14" y2="12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden max-w-[860px] mx-auto pt-3 pb-1 flex flex-col gap-1 border-t border-zinc-100 mt-3">
          <Link
            to="/graph"
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="w-3.5 h-3.5"
            >
              <circle cx="8" cy="2" r="1.25" fill="currentColor" stroke="none" />
              <circle cx="2.5" cy="13" r="1.25" fill="currentColor" stroke="none" />
              <circle cx="13.5" cy="13" r="1.25" fill="currentColor" stroke="none" />
              <line x1="8" y1="3.25" x2="2.5" y2="11.75" />
              <line x1="8" y1="3.25" x2="13.5" y2="11.75" />
              <line x1="3.75" y1="13" x2="12.25" y2="13" />
            </svg>
            Graph
          </Link>
          <Link
            to="/blog"
            className="text-sm text-zinc-500 hover:text-zinc-800 transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="text-sm text-zinc-500 hover:text-zinc-800 transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/sources"
            className="text-sm text-zinc-500 hover:text-zinc-800 transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            Sources
          </Link>
          <a
            href="https://github.com/nc1z/ai-opportunities"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 transition-colors py-2 group"
            onClick={() => setMenuOpen(false)}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-zinc-300 group-hover:text-amber-400 transition-colors">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 11.933l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
              </svg>
              Star on GitHub
            </span>
          </a>
        </div>
      )}
    </header>
  )
}
