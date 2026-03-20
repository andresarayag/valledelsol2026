'use client';

import Link from 'next/link';

export default function Booking() {
  return (
    <section className="relative -mt-20 z-20">
      
      <div className="max-w-7xl mx-auto px-4">
        
        {/* CONTENEDOR RELATIVO */}
        <div className="relative">

          {/* CARD AZUL */}
          <div className="bg-[#0098DA] rounded-3xl shadow-2xl overflow-hidden">
            
            <div className="grid md:grid-cols-2 items-center">

              {/* TEXTO */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  Bienvenidos a Valle del Sol
                </h2>

                <p className="text-white/90 mt-4 text-lg md:text-xl max-w-md">
                  Una escapada llena de Naturaleza y Cultura
                </p>

                <Link href="/reservas">
                  <button className="mt-8 bg-white text-[#0098DA] hover:bg-gray-100 px-8 py-3 rounded-full text-sm font-semibold transition transform hover:scale-105 shadow-md">
                    Reservar ahora
                  </button>
                </Link>

              </div>

              {/* ESPACIO VACÍO PARA BALANCE */}
              <div />

            </div>
          </div>

          {/* VIDEO FLOATING (FUERA DE LA CARD) */}
          <div className="absolute right-12 md:right-20 top-1/2 -translate-y-1/2">
  
  <div className="w-[240px] md:w-[280px] aspect-[9/16]">
  
              <video
                src="/videos/bienvenida.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}