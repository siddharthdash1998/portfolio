'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TerminalSidebar() {
  const [isOpen, setIsOpen] = useState(false); // Changed default to false for mobile
  const pathname = usePathname();

  return (
    <>
      {/* Mobile toggle button - always visible on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 p-3 rounded backdrop-blur hover:bg-cyan-500/30 transition-all"
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-80 bg-black/95 border-r border-cyan-500/30 
          backdrop-blur-lg z-40 transition-transform duration-300 font-mono text-sm
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-6 h-full overflow-y-auto pb-24">
          {/* Terminal header */}
          <div className="mb-6 pb-4 border-b border-cyan-500/30">
            <div className="text-cyan-400 mb-2">
              <span className="text-green-400">user@portfolio</span>
              <span className="text-gray-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-white">$</span>
            </div>
            <div className="text-gray-400 text-xs">Navigation v1.0.0</div>
          </div>

          {/* File system navigation */}
          <div className="space-y-6">
            {/* Root directory */}
            <div>
              <div className="text-gray-500 text-xs mb-2">$ ls ~/portfolio</div>
              <div className="space-y-1">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-3 rounded transition-all ${
                    pathname === '/'
                      ? 'bg-cyan-500/20 text-cyan-400 border-l-2 border-cyan-400'
                      : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  / home
                </Link>
                <Link
                  href="/projects"
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-3 rounded transition-all ${
                    pathname?.startsWith('/projects')
                      ? 'bg-cyan-500/20 text-cyan-400 border-l-2 border-cyan-400'
                      : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  / projects
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-3 rounded transition-all ${
                    pathname === '/about'
                      ? 'bg-cyan-500/20 text-cyan-400 border-l-2 border-cyan-400'
                      : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  / about
                </Link>
              </div>
            </div>

            {/* Projects subdirectory */}
            {pathname?.startsWith('/projects') && (
              <div className="animate-fadeIn">
                <div className="text-gray-500 text-xs mb-2">$ ls ~/projects</div>
                <div className="space-y-1 ml-4 border-l border-cyan-500/20 pl-3">
                  <Link
                    href="/projects/llamacve"
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-3 rounded transition-all ${
                      pathname === '/projects/llamacve'
                        ? 'bg-purple-500/20 text-purple-400 border-l-2 border-purple-400'
                        : 'text-gray-400 hover:text-purple-400 hover:bg-purple-500/10'
                    }`}
                  >
                    llamacve
                  </Link>
                  <Link
                    href="/projects/webapp"
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-3 rounded transition-all ${
                      pathname === '/projects/webapp'
                        ? 'bg-purple-500/20 text-purple-400 border-l-2 border-purple-400'
                        : 'text-gray-400 hover:text-purple-400 hover:bg-purple-500/10'
                    }`}
                  >
                    webapp
                  </Link>
                </div>
              </div>
            )}

            {/* External links */}
            <div>
              <div className="text-gray-500 text-xs mb-2">$ external --links</div>
              <div className="space-y-1">
                <a
                  href="https://github.com/siddharthdashcsye6225"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 px-3 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded transition-all"
                >
                  <span className="text-green-500">→</span> github.com
                </a>
                <a
                  href="https://www.linkedin.com/in/dash-siddharth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 px-3 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded transition-all"
                >
                  <span className="text-blue-500">→</span> linkedin.com
                </a>
              </div>
            </div>
          </div>

          {/* Terminal prompt at bottom */}
          <div className="mt-6 pt-6 border-t border-cyan-500/30">
            <div className="text-cyan-400 text-xs">
              <span className="text-green-400">$</span> pwd
              <div className="text-purple-400 mt-1">{pathname || '/'}</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/70 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}