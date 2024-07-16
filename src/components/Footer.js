import Image from 'next/image';
import logo from '../../public/logo.png';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full bg-surface py-4 px-8 fixed top-0 left-0 z-50 dark:bg-surfaceDark">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image src={logo} alt="VoluntRED Logo" width={40} height={40} />
          <span className="ml-2 text-2xl font-bold text-">VoluntRED</span>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black dark:text-white">
            <FaBars size={24} />
          </button>
        </div>
        <nav className={`md:flex md:items-center ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 text-lg">
            <li><Link href="#inicio" className="block py-2 px-4 text-black dark:text-white hover:text-primary dark:hover:text-primary transition">Inicio</Link></li>
            <li><Link href="#que-hacemos" className="block py-2 px-4 text-black dark:text-white hover:text-primary dark:hover:text-primary transition">Qué hacemos</Link></li>
            <li><Link href="#beneficios" className="block py-2 px-4 text-black dark:text-white hover:text-primary dark:hover:text-primary transition">Beneficios</Link></li>
            <li><Link href="#preguntas-frecuentes" className="block py-2 px-4 text-black dark:text-white hover:text-primary dark:hover:text-primary transition">Preguntas Frecuentes</Link></li>
            <li><Link href="#impacto" className="block py-2 px-4 text-black dark:text-white hover:text-primary dark:hover:text-primary transition">Impacto</Link></li>
            <li><Link href="#equipo" className="block py-2 px-4 text-black dark:text-white hover:text-primary dark:hover:text-primary transition">Nuestro Equipo</Link></li>
            <li><Link href="#involucrate" className="block py-2 px-4 text-black dark:text-white hover:text-primary dark:hover:text-primary transition">Involúcrate</Link></li>
            <li><Link href="#contacto" className="block py-2 px-4 text-black dark:text-white hover:text-primary dark:hover:text-primary transition">Contáctanos</Link></li>
          </ul>
          <button onClick={toggleDarkMode} className="ml-4 bg-primary p-2 rounded-full text-white hover:bg-opacity-75 transition">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
}
