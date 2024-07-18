import React from 'react';
import { Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import Inicio from '../components/Inicio';
import Beneficios from '../components/Beneficios';
import PreguntasFrecuentes from '../components/PreguntasFrecuentes';
import Impacto from '../components/Impacto';
import Equipo from '../components/Equipo';
import Involucrate from '../components/Involucrate';
import Contacto from '../components/Contacto';
import Footer from '@/components/Footer';
import Aliados from '@/components/Aliados';

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Cambiado a false para que se repita
    threshold: 0.2 // Ajustado para que se active un poco antes
  });

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function Home({ toggleDarkMode, darkMode }) {
  return (
    <div>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Container>
        <AnimatedSection>
          <Inicio />
        </AnimatedSection>
        <AnimatedSection>
          <Beneficios />
        </AnimatedSection>
        <AnimatedSection>
          <PreguntasFrecuentes />
        </AnimatedSection>
        <AnimatedSection>
          <Impacto />
        </AnimatedSection>
        <AnimatedSection>
          <Aliados />
        </AnimatedSection>
        <AnimatedSection>
          <Equipo />
        </AnimatedSection>
        <AnimatedSection>
          <Involucrate />
        </AnimatedSection>
        <AnimatedSection>
          <Contacto />
        </AnimatedSection>
      </Container>
      <Footer />
    </div>
  );
}