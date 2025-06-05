'use client';

import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiVscodium, SiPostman, SiExpress } from 'react-icons/si';
import { motion } from 'framer-motion';

const titleGradients = {
  frontend: 'bg-gradient-to-r from-cyan-100 via-blue-100 to-purple-200',
  backend: 'bg-gradient-to-r from-green-100 via-lime-100 to-yellow-100',
  tools: 'bg-gradient-to-r from-pink-100 via-red-100 to-orange-100',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function AboutSection() {
  return (
    <section className="text-white">
      {/* Sobre mí */}
      <motion.div
        id="sobre-mi"
        className="max-w-4xl mx-auto mt-24 px-6 md:px-0 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 leading-[1.2]">
          Sobre mí
        </h2>

        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
          Hola, soy Ángel 👋, técnico en{' '}
          <span className="font-semibold text-white">
            Desarrollo de Aplicaciones Multiplataforma (DAM)
          </span>{' '}
          con una sólida formación previa en{' '}
          <span className="font-semibold text-white">
            Sistemas Microinformáticos y Redes (SMR)
          </span>. Desde siempre me ha apasionado la tecnología y la innovación, por lo que disfruto enormemente construyendo soluciones eficientes, modernas y escalables, tanto para entornos web como para aplicaciones móviles.
          <br /><br />
          Me especializo en el desarrollo de software que busca no solo resolver problemas actuales, sino anticiparse a las necesidades futuras, creando experiencias de usuario intuitivas y accesibles. Además, me gusta mantenerme en constante aprendizaje, explorando nuevas herramientas, frameworks y metodologías ágiles para mejorar la calidad y rapidez en la entrega de proyectos.
          <br /><br />
          Creo firmemente que la tecnología es una herramienta poderosa para transformar ideas en realidades que aportan valor, y es por eso que me esfuerzo día a día en crecer profesionalmente y aportar lo mejor de mí en cada proyecto en el que participo.
        </p>

      </motion.div>

      {/* Tecnologías */}
      <motion.div
        id="tecnologias"
        className="max-w-6xl mx-auto mt-32 px-6 md:px-0 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 leading-[1.2]">
          Tecnologías
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-lg cursor-pointer"
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className={`text-2xl font-semibold mb-4 text-transparent bg-clip-text ${titleGradients.frontend}`}>
              Frontend
            </h3>
            <ul className="text-white/90 space-y-3">
              <li className="flex items-center gap-3">
                <FaReact className="text-cyan-400 text-3xl" /> React
              </li>
              <li className="flex items-center gap-3">
                <SiNextdotjs className="text-white text-3xl" /> Next.js
              </li>
              <li className="flex items-center gap-3">
                <SiTailwindcss className="text-sky-300 text-3xl" /> Tailwind CSS
              </li>
              <li className="flex items-center gap-3">
                <SiJavascript className="text-yellow-400 text-3xl" /> JavaScript /{' '}
                <SiTypescript className="text-blue-400 text-3xl" /> TypeScript
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-lg cursor-pointer"
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className={`text-2xl font-semibold mb-4 text-transparent bg-clip-text ${titleGradients.backend}`}>
              Backend
            </h3>
            <ul className="text-white/90 space-y-3">
              <li className="flex items-center gap-3">
                <FaNodeJs className="text-green-400 text-3xl" /> Node.js
              </li>
              <li className="flex items-center gap-3">
                <SiExpress className="text-white text-3xl" /> Express
              </li>
              <li className="flex items-center gap-3">
                <SiMongodb className="text-green-500 text-3xl" /> MongoDB
              </li>
              <li className="flex items-center gap-3">
                <SiPostgresql className="text-sky-500 text-3xl" /> PostgreSQL
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-lg cursor-pointer"
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className={`text-2xl font-semibold mb-4 text-transparent bg-clip-text ${titleGradients.tools}`}>
              Herramientas
            </h3>
            <ul className="text-white/90 space-y-3">
              <li className="flex items-center gap-3">
                <FaGitAlt className="text-orange-400 text-3xl" /> Git & GitHub
              </li>
              <li className="flex items-center gap-3">
                <FaFigma className="text-pink-400 text-3xl" /> Figma
              </li>
              <li className="flex items-center gap-3">
                <SiVscodium className="text-blue-400 text-3xl" /> VSCode
              </li>
              <li className="flex items-center gap-3">
                <SiPostman className="text-orange-500 text-3xl" /> Postman
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
