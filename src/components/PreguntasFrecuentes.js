import { motion } from 'framer-motion';

export default function PreguntasFrecuentes() {
  return (
    <motion.section
      id="preguntas-frecuentes"
      className="min-h-screen flex flex-col justify-center items-center bg-background dark:bg-backgroundDark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-primary">Preguntas Frecuentes</h2>
      <p className="mt-4 text-black dark:text-white">Aquí respondemos las preguntas más comunes sobre nuestro servicio.</p>
    </motion.section>
  );
}
