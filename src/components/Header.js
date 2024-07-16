import Image from 'next/image';
import logo from '../../public/logo.png';

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center py-16 bg-surface text-center">
      <Image src={logo} alt="VoluntRED Logo" width={80} height={80} />
      <h1 className="text-4xl font-bold mt-4">Únete a VoluntRED</h1>
      <p className="mt-2 text-xl">Conéctate y sé parte del cambio</p>
      <button className="mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-opacity-75 transition">Únete Ahora</button>
    </header>
  );
}
