import { motion } from 'framer-motion';

export default function Beneficios() {
  return (
    <motion.section
      id="beneficios"
      className="min-h-screen flex flex-col justify-center items-center bg-background dark:bg-backgroundDark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-primary">Beneficios</h2>
      <ul className="mt-4 space-y-2 text-left list-disc list-inside text-black dark:text-white">
        <li>Fácil de usar</li>
        <li>Conéctate con voluntarios</li>
        <li>Impacta positivamente</li>
      </ul>
    </motion.section>
  );
}
