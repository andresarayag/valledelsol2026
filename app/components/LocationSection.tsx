'use client';

import { motion } from 'framer-motion';

export default function LocationSection() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* BACKGROUND PARALLAX */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/ubicacion.jpg"
          alt="Ubicación Valle del Sol"
          className="w-full h-[120%] object-cover parallax-bg"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT - TEXT */}
          <div className="space-y-6 text-white">

            {/* 🔥 TÍTULO PRINCIPAL (LEFT → RIGHT) */}
            <motion.h2
              className="text-4xl md:text-5xl font-light text-white leading-tight"
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              NUESTRA <span className="font-semibold">UBICACIÓN</span>
            </motion.h2>

            {/* 🔥 SUBTÍTULO (FADE IN DOWN) */}
            <motion.p
  className="text-lg md:text-xl text-white/90"
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <span className="font">ES INMEJORABLE</span>
</motion.p>

            {/* TEXTO */}
            <div className="space-y-4 text-white/90 text-lg leading-snug max-w-xl">

              <p>
                En el corazón de Quillón, a unos pasos del centro y plaza
                principal, bares, restaurantes y la laguna Avendaño.
              </p>

              <ul className="space-y-2">
                <li>• Plaza central de Quillón a 2 min en vehículo.</li>
                <li>• Playa balneario Quillón y Cendyr Náutico a 6 min en vehículo.</li>
                <li>• Bioparque a 7 min en vehículo.</li>
                <li>• Parque Acuático a 5 min en vehículo.</li>
                <li>• Viña Lomas de Quillón a 9 min en vehículo.</li>
                <li>• Terminal de Buses a 7 min en vehículo.</li>
              </ul>

              <div className="pt-4 border-t border-white/20">
                <p className="font-semibold">
                  Km. 1,5 Camino a Cerro Negro, Parcela 51, Quillón
                </p>
              </div>

              {/* 🔥 CTA WAZE */}
              <a
                href="https://waze.com/ul?q=Km.%201,5%20Camino%20a%20Cerro%20Negro%20Parcela%2051%20Quillón"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-white text-black px-6 py-3 rounded-full text-sm font-semibold transition hover:scale-105 hover:bg-gray-100"
              >
                Cómo llegar
              </a>

            </div>
          </div>

          {/* RIGHT - MAP */}
          <motion.div
            className="relative h-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              src="https://maps.google.com/maps?q=complejo%20turistico%20valle%20del%20sol%20quill%C3%B3n&t=m&z=14&output=embed&iwloc=near"
              title="complejo turistico valle del sol quillón"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>

    </section>
  );
}