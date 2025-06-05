'use client';

import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white/70 text-sm py-4 flex items-center justify-between max-w-full px-6 md:px-12 select-none mt-30">
      <p>© 2025 AB Dev. Todos los derechos reservados.</p>
      <div className="flex space-x-6">
        <a
          href="https://www.linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-sky-400 transition-colors"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-sky-400 transition-colors"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://twitter.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-sky-400 transition-colors"
        >
          <FaTwitter size={20} />
        </a>
      </div>
    </footer>
  );
}
