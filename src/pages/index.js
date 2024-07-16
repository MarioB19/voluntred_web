import Head from 'next/head';
import Navbar from '../components/Navbar';
import Inicio from '../components/Inicio';
import QueHacemos from '../components/QueHacemos';
import Beneficios from '../components/Beneficios';
import PreguntasFrecuentes from '../components/PreguntasFrecuentes';
import Impacto from '../components/Impacto';
import Equipo from '../components/Equipo';
import Involucrate from '../components/Involucrate';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>VoluntRED</title>
        <meta name="description" content="Conéctate con VoluntRED y sé parte del cambio" />
       
      </Head>

      <Navbar />
      <main className="flex flex-col items-center px-4 py-8 space-y-16">
        <Inicio />
        <QueHacemos />
        <Beneficios />
        <PreguntasFrecuentes />
        <Impacto />
        <Equipo />
        <Involucrate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
