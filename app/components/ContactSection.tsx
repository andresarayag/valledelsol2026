'use client';

export default function ContactSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* TÍTULO */}
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
          Vive la experiencia <span className="font-semibold">Valle del Sol</span>
        </h2>

        {/* TEXTO */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Sé parte de nuestra comunidad y recibe ofertas exclusivas, novedades y experiencias únicas antes que todos.
        </p>

        {/* FORM */}
        <form className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">

          {/* INPUT */}
          <input
            type="email"
            placeholder="Tu correo electrónico"
            required
            className="w-full md:w-[400px] px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
          />

          {/* BOTÓN */}
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
          >
            Suscribirme
          </button>

        </form>

        {/* CHECK */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
          <input type="checkbox" required />
          <span>Acepto recibir información y promociones.</span>
        </div>

        {/* CONTACTO */}
        <div className="mt-10 text-gray-500 text-sm space-y-1">
          <p>+569 7670 5424</p>
          <p>reservas@valledelsolquillon.cl</p>
        </div>

      </div>
    </section>
  );
}