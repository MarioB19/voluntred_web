
import Navbar from '../components/Navbar';
import Inicio from '../components/Inicio';

import Beneficios from '../components/Beneficios';

import Impacto from '../components/Impacto';

import Price from '@/components/Price';
import Aliados from '@/components/Aliados';
import Contacto from '@/components/Contacto';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import NuestroPrototipo from '@/components/NuestroPrototipo';



export default function Home() {
  return (
    <div>
<Navbar>
</Navbar>

<Inicio></Inicio>
<Beneficios></Beneficios>
<Impacto></Impacto>
<Price></Price>
<FAQ></FAQ>
<NuestroPrototipo></NuestroPrototipo>
<Contacto></Contacto>
<Footer></Footer>

    </div>
  );
}