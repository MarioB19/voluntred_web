
import Navbar from '../components/Navbar';
import Inicio from '../components/Inicio';

import Beneficios from '../components/Beneficios';

import Impacto from '../components/Impacto';

import Price from '@/components/Price';
import Aliados from '@/components/Aliados';
import Contacto from '@/components/Contacto';
import FAQ from '@/components/FAQ';



export default function Home() {
  return (
    <div>
<Navbar>
</Navbar>

<Inicio></Inicio>
<Beneficios></Beneficios>
<Impacto></Impacto>
<Price></Price>
<Aliados></Aliados>
<FAQ></FAQ>
<Contacto></Contacto>

    </div>
  );
}