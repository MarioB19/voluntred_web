import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll';
import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary dark:bg-surfaceDark p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })}>
          <Image src={logo} alt="Logo" width={40} height={40} className="mr-2" />
          <div className="text-white font-bold text-lg">VoluntRED</div>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="inicio" smooth={true} duration={500} className="text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-primary dark:hover:text-secondary transition-colors duration-200 cursor-pointer px-3 py-2 rounded-md">Inicio</Link>
          <Link to="que-hacemos" smooth={true} duration={500} className="text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-primary dark:hover:text-secondary transition-colors duration-200 cursor-pointer px-3 py-2 rounded-md">Qué Hacemos</Link>
          <Link to="beneficios" smooth={true} duration={500} className="text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-primary dark:hover:text-secondary transition-colors duration-200 cursor-pointer px-3 py-2 rounded-md">Beneficios</Link>
          <Link to="preguntas-frecuentes" smooth={true} duration={500} className="text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-primary dark:hover:text-secondary transition-colors duration-200 cursor-pointer px-3 py-2 rounded-md">Preguntas Frecuentes</Link>
          <Link to="impacto" smooth={true} duration={500} className="text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-primary dark:hover:text-secondary transition-colors duration-200 cursor-pointer px-3 py-2 rounded-md">Impacto</Link>
          <Link to="equipo" smooth={true} duration={500} className="text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-primary dark:hover:text-secondary transition-colors duration-200 cursor-pointer px-3 py-2 rounded-md">Nuestro Equipo</Link>
          <Link to="involucrate" smooth={true} duration={500} className="text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-primary dark:hover:text-secondary transition-colors duration-200 cursor-pointer px-3 py-2 rounded-md">Involúcrate</Link>
          <Link to="contacto" smooth={true} duration={500} className="text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-primary dark:hover:text-secondary transition-colors duration-200 cursor-pointer px-3 py-2 rounded-md">Contáctanos</Link>
          <button onClick={toggleDarkMode} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded flex items-center justify-center transition-colors duration-200">
            {darkMode ? <SunIcon className="h-6 w-6 animate-spin" /> : <MoonIcon className="h-6 w-6 animate-pulse" />}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="inicio" smooth={true} duration={500} className="block text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-primary dark:hover:text-secondary transition-colors duration-200 mt-2 cursor-pointer px-3 py-2 rounded-md">Inicio</Link>
          <Link to="que-hacemos" smooth={true} duration={500} className="block text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-primary dark:hover:text-secondary transition-colors duration-200 mt-2 cursor-pointer px-3 py-2 rounded-md">Qué Hacemos</Link>
          <Link to="beneficios" smooth={true} duration={500} className="block text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-primary dark:hover:text-secondary transition-colors duration-200 mt-2 cursor-pointer px-3 py-2 rounded-md">Beneficios</Link>
          <Link to="preguntas-frecuentes" smooth={true} duration={500} className="block text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-primary dark:hover:text-secondary transition-colors duration-200 mt-2 cursor-pointer px-3 py-2 rounded-md">Preguntas Frecuentes</Link>
          <Link to="impacto" smooth={true} duration={500} className="block text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-primary dark:hover:text-secondary transition-colors duration-200 mt-2 cursor-pointer px-3 py-2 rounded-md">Impacto</Link>
          <Link to="equipo" smooth={true} duration={500} className="block text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-primary dark:hover:text-secondary transition-colors duration-200 mt-2 cursor-pointer px-3 py-2 rounded-md">Nuestro Equipo</Link>
          <Link to="involucrate" smooth={true} duration={500} className="block text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-primary dark:hover:text-secondary transition-colors duration-200 mt-2 cursor-pointer px-3 py-2 rounded-md">Involúcrate</Link>
          <Link to="contacto" smooth={true} duration={500} className="block text-white dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:text-primary dark:hover:text-secondary transition-colors duration-200 mt-2 cursor-pointer px-3 py-2 rounded-md">Contáctanos</Link>
          <button onClick={toggleDarkMode} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded flex items-center justify-center transition-colors duration-200 mt-2">
            {darkMode ? <SunIcon className="h-6 w-6 animate-spin" /> : <MoonIcon className="h-6 w-6 animate-pulse" />}
          </button>
        </div>
      )}
    </nav>
  );
}
