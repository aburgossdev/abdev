'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Aplicación web - Go Living Now',
      description:
        'Go Living Now es una plataforma para reservar experiencias turísticas únicas. Desarrollada con React, Next.js y Tailwind CSS para una interfaz rápida y atractiva.',
      imageSrc: '/project1.png',
      link: '#',
    },
    {
      id: 2,
      title: 'Aplicación web - Portfolio personal',
      description:
        'Portfolio personal que muestra proyectos y habilidades. Construido con Next.js y TypeScript, incluye animaciones suaves y optimización SEO para mejorar visibilidad.',
      imageSrc: '/project2.png',
      link: '#',
    },
    {
      id: 3,
      title: 'Aplicación web - OG Padel Club',
      description:
        'Sistema de reservas para club de pádel, con backend en Node.js y frontend en React, que facilita la gestión y reserva de pistas de manera eficiente.',
      imageSrc: '/project3.png',
      link: '#',
    },
  ];

  return (
    <section id="proyectos" className="max-w-6xl mx-auto mt-32 px-6 md:px-0 text-white">
      {/* Título animado */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-center leading-[1.2] bg-[length:200%_200%]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      >
        Proyectos recientes
      </motion.h2>

      {/* Tarjetas animadas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map(({ id, title, description, imageSrc, link }, index) => (
          <motion.div
            key={id}
            className="relative bg-gradient-to-br from-slate-900/70 to-slate-800/70 border border-white/20 rounded-3xl p-6 shadow-lg backdrop-blur-md
              transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
          >
            <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6">
              <Image
                src={imageSrc}
                alt={`Preview de ${title}`}
                fill
                className="object-cover"
                priority
              />
            </div>

            <h3 className="text-3xl font-semibold mb-4 text-sky-400 tracking-wide">{title}</h3>
            <p className="text-white/90 mb-6 leading-relaxed flex-grow">{description}</p>

            <a
              href={link}
              className="inline-block self-start bg-sky-500 text-white px-6 py-3 rounded-full font-semibold
                hover:bg-sky-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver proyecto
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
