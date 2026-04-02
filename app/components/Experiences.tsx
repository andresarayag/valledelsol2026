'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Cabañas',
    subtitle: 'Escápate a la serenidad',
    image: '/images/experiencia/cabanas.jpeg',
    href: '/cabanas',
  },
  {
    title: 'Restaurante',
    subtitle: 'Sabores que enamoran',
    image: '/images/experiencia/restaurante.jpeg',
    href: '/restaurante',
  },
  {
    title: 'Centro de Eventos',
    subtitle: 'Eventos que conectan',
    image: '/images/experiencia/eventos.jpeg',
    href: '/eventos',
  },
  {
    title: 'Empresas',
    subtitle: 'Experiencias corporativas a medida',
    image: '/images/experiencia/empresas.jpg',
    href: '/empresas',
  },
  {
    title: 'Tour Operadores',
    subtitle: 'Programas diseñados para agencias',
    image: '/images/experiencia/touroperadores.jpeg',
    href: '/tour-operadores',
  },
];

export default function Experiences() {
  return (
    <section className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* SUBTÍTULO */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-gray-600 text-2xl md:text-3xl max-w-2xl leading-snug tracking-tight">
            Descubre{' '}
            <span className="font-semibold inline-block">
              experiencias únicas
            </span>
            <br />
            en un entorno natural{' '}
            <span className="font-semibold inline-block">
              incomparable
            </span>
          </p>
        </motion.div>

        {/* 🔥 FILA ÚNICA RESPONSIVE */}
        <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-5 md:overflow-visible">

          {experiences.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="min-w-[260px] md:min-w-0 block"
            >
              <Card item={item} />
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}

/* CARD */
function Card({ item }: { item: any }) {
  return (
    <div className="relative h-[360px] md:h-[420px] rounded-2xl overflow-hidden group cursor-pointer">

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
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">

        <div className="transform transition-all duration-500 group-hover:-translate-y-6">
          <h3 className="text-white text-2xl md:text-3xl font-semibold">
            {item.title}
          </h3>

          <p className="text-white/80 mt-2 text-sm">
            {item.subtitle}
          </p>
        </div>

        <div className="mt-4 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="inline-block bg-white text-gray-900 text-sm px-4 py-2 rounded-full font-medium">
            Explorar
          </span>
        </div>

      </div>
    </div>
  );
}