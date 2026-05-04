'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HorizontalGallery from '../components/HorizontalGallery';
import TeamMemberCard from '../components/TeamMemberCard';
import Image from 'next/image';
import { SocialLink } from '../components/types';

const socialLinks: SocialLink[] = [
  {
    name: 'Tripadvisor',
    href: 'https://www.tripadvisor.cl/Hotel_Review-g3732316-d7155218-Reviews-Centro_de_Eventos_Valle_del_Sol-Quillon_Biobio_Region.html',
    icon: '🌐',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/valledelsolquillon',
    icon: '📘',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/valledelsolquillon.cl/',
    icon: '📷',
  },
  {
    name: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=%2B56976705424',
    icon: '💬',
  },
];

const aboutGalleryImages: string[] = [
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/image00038-min.jpeg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/DSC01775.jpg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/39A92BE4-761D-4997-A7B5-8EB850E096B9_1_105_c.jpeg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Ceviche-e1724896325930.jpg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/image00033-min.jpeg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/DSC01866-min.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Matrimonio-1.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/image00005-min.jpeg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Jardines-1-min-e1723475875314.webp',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="grow pt-24">

        {/* HERO */}
        <section className="relative h-[70vh] -mt-24">
          <Image
            src="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Jardines-1-min-e1723475875314.webp"
            alt="Valle del Sol"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-semibold">
                Más que un complejo turístico
              </h1>

              <p className="mt-4 text-lg md:text-xl">
                Queremos ser una experiencia y un recuerdo
              </p>
            </motion.div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center px-6 space-y-8">

            <h2 className="text-3xl md:text-4xl font-bold">
              Una escapada llena de cultura y naturaleza
            </h2>

            <div className="flex justify-center">
              <img
                src="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Negro.png?fit=300%2C247&ssl=1"
                alt="Logo Valle del Sol"
                className="h-24"
              />
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              Nuestra historia comenzó en 2023, cuando decidimos dejar atrás la vida de oficina en Santiago para perseguir un sueño compartido: crear una experiencia turística única, que conectara a nuestros visitantes con la naturaleza y la cultura local. Con esta visión clara, nos aventuramos en un proyecto que integra una red de proveedores y productores locales, aportando autenticidad y apoyando el crecimiento económico de nuestra comunidad.
            </p>

          </div>
        </section>

        {/* EQUIPO */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Nuestro Equipo
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-4xl mx-auto">

              <TeamMemberCard
                name="Felipe Vargas"
                role="Socio · Estrategia"
                description="Ingeniero Civil Industrial, encargado de relaciones comerciales y desarrollo estratégico."
                imageUrl="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Nosotros-Felipe.jpeg"
              />

              <TeamMemberCard
                name="Camila Carvajal"
                role="Operaciones"
                description="Encargada de que todo funcione perfecto en cada experiencia."
                imageUrl="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Nosotros-Camila.jpeg"
              />

              <TeamMemberCard
                name="Bela"
                role="Relaciones Públicas"
                description="Nuestra encargada de felicidad y bienvenida 🐶"
                imageUrl="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Bela-7.jpeg"
              />

            </div>

          </div>
        </section>

        {/* GALERÍA PREMIUM */}
<section className="px-6 pb-24">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

    {aboutGalleryImages.map((img, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.08 }}
        className="overflow-hidden rounded-2xl group"
      >
        <div className="relative h-[260px] md:h-[300px]">
          <Image
            src={img}
            alt="Galería Valle del Sol"
            fill
            className="object-cover group-hover:scale-110 transition duration-700"
          />
        </div>
      </motion.div>
    ))}

  </div>
</section>

        {/* FRASE FINAL */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto text-center px-6 space-y-8">

            <p className="text-gray-700 text-lg leading-relaxed">
              Nos perdemos buscando lo que no necesitamos, cuando lo esencial está en compartir momentos con quienes amamos.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold">
              “Somos el tiempo que gastamos en quienes amamos”
            </h2>

          </div>
        </section>

      </main>

      <Footer/>
    </div>
  );
}