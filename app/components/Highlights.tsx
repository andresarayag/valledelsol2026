'use client';

import { useState } from 'react';
import Image from 'next/image';

type Highlight = {
  title: string;
  media: string;
  type: 'image' | 'video';
};

const highlights: Highlight[] = [
  {
    title: '24.000 m2 de espacio y áreas verdes',
    media: '/videos/areas-verdes.mp4',
    type: 'video',
  },
  {
    title: 'Tinajas con vista a los jardines',
    media: '/videos/tinajas.mp4',
    type: 'video',
  },
  {
    title: 'Piscinas para adultos y niños',
    media: '/videos/piscinas.mp4',
    type: 'video',
  },
  {
    title: 'Restaurant de comida típica chilena',
    media: '/images/highlights/comida-chilena.jpg',
    type: 'image',
  },
  {
    title: 'Amplios salones de eventos',
    media: '/videos/salones-eventos.mp4',
    type: 'video',
  },
  {
    title: 'Cancha de volleyball',
    media: '/videos/cancha-voleybol.mp4',
    type: 'video',
  },
  {
    title: 'Cancha de fútbol',
    media: '/videos/canchas-futbol.mp4',
    type: 'video',
  },
  {
    title: 'Cancha de tenis',
    media: '/videos/canchas-tenis.mp4',
    type: 'video',
  },
];

export default function Highlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = highlights[activeIndex];

  return (
    <section className="pt-0 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-12 gap-10 items-center">

          {/* LISTA IZQUIERDA */}
          <div className="md:col-span-4 divide-y divide-gray-200">

            {highlights.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="w-full text-left py-3 group"
              >
                <span
  className={`transition-all duration-300 leading-snug tracking-tight ${
    activeIndex === index
      ? 'text-gray-900 font-bold text-xl md:text-2xl scale-105'
      : 'text-gray-600 text-lg md:text-xl group-hover:text-gray-800'
  }`}
>
                  {item.title}
                </span>
              </button>
            ))}

          </div>

          {/* VIDEO / IMAGEN */}
          <div className="md:col-span-8">
            <div className="relative w-full h-[420px] md:h-[500px] rounded-3xl overflow-hidden">

              {activeItem.type === 'video' ? (
                <video
                  key={activeItem.media}
                  src={activeItem.media}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={activeItem.media}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                  priority
                />
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}