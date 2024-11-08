
import Navbar from '../components/Navbar';
import Inicio from '../components/Inicio';

import Beneficios from '../components/Beneficios';

import Impacto from '../components/Impacto';

import Price from '@/components/Price';
import Aliados from '@/components/Aliados';
import Contacto from '@/components/Contacto';

export default function Home({ toggleDarkMode, darkMode }) {
  return (
    <div>
<Navbar>
</Navbar>

<Inicio></Inicio>
<Beneficios></Beneficios>
<Impacto></Impacto>
<Price></Price>
<Aliados></Aliados>
<Contacto></Contacto>
    </div>
  );
}