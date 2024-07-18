import { Container } from '@mui/material';
import { motion } from 'framer-motion';
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
const AnimatedSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }} // Cambia whileInView por animate
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

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
          <Impacto></Impacto>
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