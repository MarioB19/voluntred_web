import { motion } from 'framer-motion';

export default function Inicio() {
  return (
    <motion.section
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center bg-background dark:bg-backgroundDark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-primary">Inicio</h2>
      <p className="mt-4 text-black dark:text-white">Bienvenido a VoluntRED, donde conectamos voluntarios con oportunidades para hacer el bien.</p>
    </motion.section>
  );
}
