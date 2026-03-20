'use client';

import Image from 'next/image';
import Link from 'next/link';

const experiences = [
  {
    title: 'Cabañas',
    subtitle: 'Escápate a la serenidad',
    image: '/images/experiencia/cabanas.jpg',
    href: '/cabanas',
  },
  {
    title: 'Restaurante',
    subtitle: 'Sabores que enamoran',
    image: '/images/experiencia/restaurante.jpeg',
    href: '/restaurante',
  },
  {
    title: 'Eventos',
    subtitle: 'Eventos que conectan',
    image: '/images/experiencia/eventos.jpeg',
    href: '/eventos',
  },
];

export default function Experiences() {
  return (
    <section className="pt-24 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Subtítulo */}
        <div className="mb-12">
          <p className="text-gray-600 text-2xl md:text-3xl max-w-2xl leading-snug tracking-tight">
  Descubre <span className="font-semibold">experiencias únicas</span>
  <br />
  en un entorno natural <span className="font-semibold">incomparable</span>
</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((item, index) => (
            <Link key={index} href={item.href} className="block">

              <div className="relative h-[420px] rounded-2xl overflow-hidden group cursor-pointer">

                {/* Imagen */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500" />

                {/* Contenido */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">

                  {/* Textos */}
                  <div className="transform transition-all duration-500 group-hover:-translate-y-6">
                    <h3 className="text-white text-3xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-white/80 mt-2 text-sm">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Botón hover */}
                  <div className="mt-4 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="inline-block bg-white text-gray-900 text-sm px-4 py-2 rounded-full font-medium">
                      Explorar
                    </span>
                  </div>

                </div>

              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}