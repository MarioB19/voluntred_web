export default function Contact() {
    return (
      <section className="max-w-3xl w-full text-center">
        <h2 className="text-3xl font-semibold">Contáctanos</h2>
        <form className="mt-4 space-y-4">
          <input type="email" placeholder="Tu correo electrónico" className="w-full px-4 py-2 bg-surface border border-gray-700 rounded focus:outline-none" />
          <textarea placeholder="Tu mensaje" className="w-full px-4 py-2 bg-surface border border-gray-700 rounded focus:outline-none"></textarea>
          <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-75 transition">Enviar</button>
        </form>
      </section>
    );
  }
  