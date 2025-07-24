import React from 'react';
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaDatabase,
  FaJava,
  FaPython,
  FaCuttlefish,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";

const App = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mario.ramlop2004@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-neutral-950 text-white scroll-smooth scroll-pt-30">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-neutral-900 shadow-md z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold text-blue-500">Mario</h1>
          <ul className="flex gap-6 text-sm font-medium">
            <li><a href="#inicio" className="hover:text-blue-400">Inicio</a></li>
            <li><a href="#experiencia" className="hover:text-blue-400">Experiencia</a></li>
            <li><a href="#proyectos" className="hover:text-blue-400">Proyectos</a></li>
            <li><a href="#lenguajes" className="hover:text-blue-400">Lenguajes</a></li>
          </ul>
        </nav>
      </header>

      {/* INICIO */}
          <section id="inicio" className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 text-white bg-[radial-gradient(ellipse_at_top,_#1e3a8a_0%,_#000000_80%)]">


            {/* Texto izquierdo */}
            <div className="text-white md:w-1/2 space-y-4 text-center md:text-left mt-16 md:mt-0">
              <p className="text-lg text-blue-400 font-semibold">Hola, soy</p>
              <h1 className="text-5xl font-extrabold text-white leading-tight">Mario Ramírez</h1>
              <h2 className="text-xl text-emerald-400 font-semibold">Desarrollador Frontend</h2>
              <p className="text-gray-300 max-w-md">
                Transformando ideas en realidad a través de código limpio y soluciones innovadoras.
                Me apasiona construir interfaces atractivas, funcionales y accesibles. Como desarrollador frontend 
                disfruto combinar diseño y tecnologias para crear experencias comodas para el usuario.
                Siempre estoy aprendiendo y buscando nuevos desafios que me permitan crecer profecionalmente
              </p>

              {/* Botones */}
              <div className="mt-6 flex gap-4 flex-wrap justify-center md:justify-start">
                <div className="flex gap-4 text-2xl mt-6">
                  <a
                    href="https://www.linkedin.com/in/mario-alejandro-ramirez-lopez-061054255/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition"
                  >
                    <FaLinkedin />
                  </a>
                  <div className="relative">
                    <button
                      onClick={handleCopyEmail}
                      className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition"
                    >
                      <FaEnvelope />
                    </button>

                    {copied && (
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded shadow-md">
                        ¡Correo copiado!
                      </span> 
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen derecha */}
            <div className="relative md:w-1/2 flex justify-center mt-10 md:mt-0">
              <div className="w-84 h-84">
                {/* 👇 Reemplaza src por la ruta de tu imagen */}
                <img src= "img/perfil.png" alt="Mario Ramírez" className="object-cover w-full h-full" />
              </div>

              {/* Iconos flotantes (opcional) */}
              <div className="absolute top-1/4 left-60 transform -translate-x-full -translate-y-full text-cyan-400 text-5xl">
                <FaReact />
              </div>
              <div className="absolute bottom-4 left-60 transform -translate-x-full text-orange-500 text-5xl">
                <FaHtml5 />
              </div>
              <div className="absolute bottom-2 right-60 transform translate-x-full text-yellow-300 text-5xl">
                <FaJsSquare />
              </div>
            </div>
          </section>

      {/* Contenido */}
      <main className="pt-24 space-y-32 max-w-6xl mx-auto px-6">
        
        

        {/* EXPERIENCIA */}
        <section id="experiencia">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">Experiencia</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-white">Concurso Open Doors - Universidad Panamericana</h3>
              <p className="text-sm text-gray-400">Programar calculadora para tiro parabolico (2021)</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Universidad de Guadalajara</h3>
              <p className="text-sm text-gray-400">Estudiante de Ingeniería en Computación (2023 - presente)</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Certificacion Oracle ONE</h3>
              <p className="text-sm text-gray-400"><a href="https://app.aluracursos.com/program/certificate/a484ff0e-3613-4e02-a93d-42cb60d01b99" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Certificado</a> (2023)</p>
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos">
          <h2 className="text-2xl font-bold text-blue-400 mb-10">Proyectos destacados</h2>

          <div className="space-y-10">
            {/* Proyecto 1 */}
            <div className="flex flex-col md:flex-row bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:scale-[1.01] transition-transform duration-300">
              {/* Carrusel */}
              <div className="md:w-1/2 w-full">
                <Carousel showThumbs={false} showStatus={false} infiniteLoop emulateTouch>
                  <div><img src="img/foto6.jpeg" alt="Web 1" className="object-cover w-full h-full" /></div>
                  <div><img src="img/foto7.jpeg" alt="Web 2" className="object-cover w-full h-full" /></div>
                </Carousel>
              </div>
              {/* Info */}
              <div className="md:w-1/2 w-full p-6 flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-semibold text-white">Sitio Web Personal</h3>
                <p className="text-sm text-gray-400">Desarrollé un sitio web informativo y visualmente atractivo centrado en la cultura japonesa. El proyecto destaca por su diseño responsivo, el uso de componentes reutilizables y animaciones suaves implementadas con Tailwind CSS y JavaScript. Este proyecto demuestra mi capacidad para crear experiencias de usuario modernas y funcionales desde cero.</p>
                <div className="flex gap-2 flex-wrap text-xs text-white">
                  <span className="bg-blue-700 px-2 py-0.5 rounded">HTML</span>
                  <span className="bg-yellow-500 px-2 py-0.5 rounded">JavaScript</span>
                  <span className="bg-sky-500 px-2 py-0.5 rounded">Tailwind</span>
                </div>
              </div>
            </div>

            {/* Proyecto 2 */}
            <div className="flex flex-col md:flex-row bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:scale-[1.01] transition-transform duration-300">
              <div className="md:w-1/2 w-full">
                <Carousel showThumbs={false} showStatus={false} infiniteLoop emulateTouch>
                  <div><img src="img/foto8.jpg" alt="Juego 1" className="object-cover w-full h-full" /></div>
                  <div><img src="img/foto9.jpg" alt="Juego 2" className="object-cover w-full h-full" /></div>
                  <div><img src="img/foto11.jpg" alt="Juego 3" className="object-cover w-full h-full" /></div>
                </Carousel>
              </div>
              <div className="md:w-1/2 w-full p-6 flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-semibold text-white">Videojuego en C++</h3>
                <p className="text-sm text-gray-400">Recreacion del clásico juego Snake utilizando programacion estructurada en C++. Implemente lógica de colisiones, sistema de puntuación y control de velocidad, todo desde la consola. Este proyecto refuerza mis habilidades en estructura de control, bucles y manipulacion de datos sin frameworks externos, ideal para comprender los fundamentos de la programacion de videojuegos.</p>
                <div className="flex gap-2 flex-wrap text-xs text-white">
                  <span className="bg-gray-700 px-2 py-0.5 rounded">C++</span>
                </div>
              </div>+
            </div>

            {/* Proyecto 3 */}
            <div className="flex flex-col md:flex-row bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:scale-[1.01] transition-transform duration-300">
              <div className="md:w-1/2 w-full">
                <Carousel showThumbs={false} showStatus={false} infiniteLoop emulateTouch>
                  <div><img src="img/foto1.jpeg" alt="App 1" className="object-cover w-full h-full" /></div>
                  <div><img src="img/foto2.jpeg" alt="App 2" className="object-cover w-full h-full" /></div>
                  <div><img src="img/foto3.jpeg" alt="App 3" className="object-cover w-full h-full" /></div>
                  <div><img src="img/foto5.jpeg" alt="App 4" className="object-cover w-full h-full" /></div>
                </Carousel>
              </div>
              <div className="md:w-1/2 w-full p-6 flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-semibold text-white">App para la Gestión de Restaurante</h3>
                <p className="text-sm text-gray-400">Aplicación de escritorio desarrollada con Python para gestionar un restaurante. Incluye funcionalidades como el registro de clientes, personal y administracion de mesas, conectadas a una base de datos MySQL. Este proyecto demuestra mi capacidad para integrar interfaces gráficas, logica de negocio y base de datos relacionales para resolver necesidades del mundo real.</p>
                <div className="flex gap-2 flex-wrap text-xs text-white">
                  <span className="bg-yellow-600 px-2 py-0.5 rounded">Python</span>
                  <span className="bg-blue-600 px-2 py-0.5 rounded">MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* LENGUAJES */}
        <section id="lenguajes">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">Lenguajes y tecnologías que domino</h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Frontend */}
            <div className="bg-neutral-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
              <div className="grid grid-cols-3 gap-6 text-white text-4xl">
                <div className="flex flex-col items-center">
                  <FaHtml5 className="text-orange-500 text-6xl" />
                  <span className="text-sm mt-1">HTML</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaCss3Alt className="text-blue-500 text-6xl" />
                  <span className="text-sm mt-1">CSS</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaJsSquare className="text-yellow-300 text-6xl" />
                  <span className="text-sm mt-1">JavaScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaReact className="text-cyan-400 text-6xl" />
                  <span className="text-sm mt-1">React</span>
                </div>
                <div className="flex flex-col items-center">
                  <SiTailwindcss className="text-sky-400 text-6xl" />
                  <span className="text-sm mt-1">Tailwind</span>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-neutral-900 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
              <div className="grid grid-cols-3 gap-6 text-white text-4xl">
                <div className="flex flex-col items-center">
                  <SiMysql className="text-blue-300 text-6xl" />
                  <span className="text-sm mt-1">MySQL</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaJava className="text-red-600 text-6xl" />
                  <span className="text-sm mt-1">Java</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaCuttlefish className="text-gray-400 text-6xl" />
                  <span className="text-sm mt-1">C++</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaPython className="text-yellow-400 text-6xl" />
                  <span className="text-sm mt-1">Python</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-neutral-900 text-gray-400 text-sm mt-24 py-6 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Mario Ramírez. Todos los derechos reservados.</p>

            <div className="flex gap-4 text-xl">
              <a
                href="https://www.linkedin.com/in/mario-alejandro-ramirez-lopez-061054255/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <button
                onClick={handleCopyEmail}
                className="hover:text-red-400 transition-colors"
              >
                <FaEnvelope />
              </button>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default App;
