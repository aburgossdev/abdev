'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MenuIcon = () => (
  <svg
    className="h-10 w-10 text-white"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="h-10 w-10 text-white"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  const scrollToSection = (id: string) => {
    const offset = 120;
    const section = document.getElementById(id);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <div className="w-full flex justify-center sticky top-8 z-50">
      <nav className="glass-navbar w-full max-w-[1400px] mx-4 md:mx-8 flex justify-between items-center text-white py-8 rounded-[3rem] shadow-lg bg-black/40 backdrop-blur-md">

        <button onClick={() => scrollToSection('inicio')} className="focus:outline-none cursor-pointer">
          <div className="flex items-center justify-center h-12 w-12 overflow-visible">
            <Image
              src="/logo.png"
              alt="Logo"
              width={48}  
              height={48}
            />
          </div>
        </button>


        {/* Desktop menu */}
        <div className="hidden md:flex gap-20 text-2xl tracking-wide">
          <button onClick={() => scrollToSection('sobre-mi')} className="glass-link cursor-pointer">Sobre mí</button>
          <button onClick={() => scrollToSection('tecnologias')} className="glass-link cursor-pointer">Tecnologias</button>
          <button onClick={() => scrollToSection('proyectos')} className="glass-link cursor-pointer">Proyectos</button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="cursor-pointer">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden absolute top-28 left-4 right-4 bg-slate-800/90 rounded-xl px-6 py-6 shadow-lg text-white flex flex-col gap-6 text-xl tracking-wide backdrop-blur-lg z-40"
          >
            <button onClick={() => scrollToSection('sobre-mi')} className="glass-link text-left w-full cursor-pointer">Sobre mí</button>
            <button onClick={() => scrollToSection('tecnologias')} className="glass-link text-left w-full cursor-pointer">Tecnologias</button>
            <button onClick={() => scrollToSection('proyectos')} className="glass-link text-left w-full cursor-pointer">Proyectos</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
