import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contacto"
      className="max-w-3xl w-full text-center py-16 bg-background dark:bg-background-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-black dark:text-white">Contáctanos</h2>
      <form className="mt-4 space-y-4">
        <input type="email" placeholder="Tu correo electrónico" className="w-full px-4 py-2 bg-surface border border-gray-700 rounded focus:outline-none dark:bg-surface-dark" />
        <textarea placeholder="Tu mensaje" className="w-full px-4 py-2 bg-surface border border-gray-700 rounded focus:outline-none dark:bg-surface-dark"></textarea>
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-75 transition">Enviar</button>
      </form>
    </motion.section>
  );
}
