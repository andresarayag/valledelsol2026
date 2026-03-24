'use client';

import Link from 'next/link';

export default function Booking() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center">

      {/* IMAGEN DE FONDO */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/relajacion.jpeg')" }}
      />

      {/* OVERLAY (oscuro hacia la izquierda) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* CONTENEDOR */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

        <div className="flex">
          
          {/* CONTENIDO IZQUIERDA */}
          <div className="w-full md:w-1/2 text-white text-left">

            <p className="text-sm tracking-widest uppercase text-white/70 mb-4">
              Valle del Sol
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
              Un refugio natural para desconectarte del mundo
            </h2>

            <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
              Vive una experiencia única rodeado de naturaleza, tranquilidad y paisajes que invitan a detener el tiempo.
            </p>

            {/* BOTONES */}
            <div className="mt-10 flex gap-4 flex-wrap">

              {/* BOTÓN PRINCIPAL */}
              <Link href="/reservas">
                <button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full text-sm font-semibold transition">
                  Reservar ahora
                </button>
              </Link>

              {/* BOTÓN SECUNDARIO */}
              <Link href="/experiencias">
                <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full text-sm font-medium transition">
                  Explorar experiencias
                </button>
              </Link>

            </div>

          </div>

          {/* COLUMNA VACÍA */}
          <div className="hidden md:block md:w-1/2" />

        </div>

      </div>

    </section>
  );
}