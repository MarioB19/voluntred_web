import { motion } from 'framer-motion';

export default function QueHacemos() {
  return (
    <motion.section
      id="que-hacemos"
      className="max-w-3xl w-full text-center py-16 bg-background dark:bg-background-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-black dark:text-white">Qué Hacemos</h2>
      <p className="mt-4 text-black dark:text-white">VoluntRED es una plataforma dedicada a conectar personas con oportunidades de voluntariado.</p>
    </motion.section>
  );
}
