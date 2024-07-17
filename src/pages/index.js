import { Container } from '@mui/material';
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

export default function Home({ toggleDarkMode, darkMode }) {
  return (
    <div>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Container>
        <Inicio />
        <Beneficios />
        <PreguntasFrecuentes />
        <Impacto />
        <Aliados/>
        <Equipo />
        <Involucrate />
        <Contacto />

 
        
      </Container>
      <Footer/>
    </div>
  );
}