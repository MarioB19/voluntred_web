import { motion } from 'framer-motion';

export default function Involucrate() {
  return (
    <motion.section
      id="involucrate"
      className="max-w-3xl w-full text-center py-16 bg-background dark:bg-background-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-black dark:text-white">Involúcrate</h2>
      <div className="mt-4 space-x-4">
        <button className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-75 transition">Regístrate como Voluntario</button>
        <button className="px-4 py-2 bg-secondary text-white rounded hover:bg-opacity-75 transition">Dona Ahora</button>
      </div>
    </motion.section>
  );
}
