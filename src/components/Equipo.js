import { motion } from 'framer-motion';

export default function Equipo() {
  return (
    <motion.section
      id="equipo"
      className="max-w-3xl w-full text-center py-16 bg-background dark:bg-background-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-black dark:text-white">Nuestro Equipo</h2>
      <p className="mt-4 text-black dark:text-white">Conoce a las personas detrás de VoluntRED que hacen todo esto posible.</p>
    </motion.section>
  );
}
