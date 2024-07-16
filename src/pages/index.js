import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';

import GetInvolved from '../components/GetInvolved';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>VoluntRED</title>
        <meta name="description" content="Conéctate con VoluntRED y sé parte del cambio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-col items-center px-4 py-8 space-y-16">
        <About />
        <HowItWorks />
        <Features />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
