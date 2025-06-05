"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { useState } from "react";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const email = "angelburgosdev@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar el correo:", err);
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInOutRight {
          0% {
            opacity: 0;
            transform: translateX(-10px);
          }
          10% {
            opacity: 1;
            transform: translateX(0);
          }
          90% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-10px);
          }
        }

        .fade-in-out-right {
          animation: fadeInOutRight 2s ease forwards;
        }

        @keyframes slideBright {
          0% {
            transform: translateX(-100%) skewX(12deg);
          }
          100% {
            transform: translateX(150%) skewX(12deg);
          }
        }

        .animate-slide-bright {
          animation: slideBright 1s linear forwards;
        }

        /* NUEVO: Hover botón CV */
        .download-btn {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .download-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 15px 25px rgba(14, 165, 233, 0.6); /* sombra azul */
          color: #e0f2fe; /* texto un poco más claro */
        }

        .download-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -50%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
          transition: left 0.5s ease;
          pointer-events: none;
          z-index: 10;
        }

        .download-btn:hover::before {
          left: 150%;
          transition: left 0.7s ease;
        }
      `}</style>

      <section className="flex flex-col md:flex-row items-center justify-center gap-16 px-8 md:px-28 py-20 mt-12" id="inicio">
        {/* Imagen */}
        <div className="flex-shrink-0 relative rounded-full w-56 h-56 md:w-64 md:h-64 overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm cursor-pointer transition-transform duration-400 ease-in-out hover:scale-105 hover:shadow-2xl">
          <Image
            src="/fotocvangel.png"
            alt="Foto de Angel Bugros"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-full" />
        </div>

        {/* Info */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-6xl font-extrabold mb-5 tracking-wide text-white">
            Ángel Burgos
          </h1>
          <h2 className="text-3xl font-semibold text-sky-400 mb-6">
            Software Developer & IT Administrator
          </h2>

          {/* Redes sociales */}
          <div className="flex justify-center md:justify-start gap-6 text-white text-3xl mb-6 relative">
            <a
              href="https://www.linkedin.com/in/ángel-burgos-sobas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-sky-500 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/aburgossdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-400 transition-colors"
            >
              <FaGithub />
            </a>
            <button
              onClick={copyToClipboard}
              aria-label="Copiar correo electrónico"
              className="hover:text-red-500 transition-colors focus:outline-none relative flex items-center"
            >
              <FaEnvelope />
              {copied && (
                <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg fade-in-out-right select-none pointer-events-none whitespace-nowrap">
                  ¡Correo copiado!
                </span>
              )}
            </button>
          </div>

          {/* Descargar CV */}
          <div className="mt-4">
            <a
              href="/cv-angelburgos.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="download-btn inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-xl focus:outline-none"
            >
              <FiDownload className="text-xl" /> Descargar CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
