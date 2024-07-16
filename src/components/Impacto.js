import { motion } from 'framer-motion';

export default function Impacto() {
  return (
    <motion.section
      id="impacto"
      className="min-h-screen flex flex-col justify-center items-center bg-background dark:bg-backgroundDark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-primary">Impacto</h2>
      <p className="mt-4 text-black dark:text-white">Nuestro impacto ha alcanzado a miles de personas y comunidades alrededor del mundo.</p>
    </motion.section>
  );
}
