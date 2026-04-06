'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HorizontalGallery from '../../components/HorizontalGallery';
import AmenitiesCarousel from '../../components/AmenitiesCarousel';
import { SocialLink, Amenity } from '../../components/types';
import Image from 'next/image';
import { motion } from 'framer-motion';

/* SOCIAL */
const socialLinks: SocialLink[] = [
  {
    name: 'Tripadvisor',
    href: 'https://www.tripadvisor.cl/',
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
];

/* AMENITIES */
const paseoAmenities: Amenity[] = [
  {
    imageUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/alimentacion-saludable.webp',
    alt: 'Alimentación',
    caption: 'Alimentación',
  },
  {
    imageUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/patio-de-recreo.webp',
    alt: 'Juegos',
    caption: 'Juegos infantiles',
  },
  {
    imageUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/juego-de-picnic.webp',
    alt: 'Picnic',
    caption: 'Zona de picnic',
  },
  {
    imageUrl: 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/parrilla.webp',
    alt: 'Parrillas',
    caption: 'Parrillas',
  },
];

/* GALERÍAS */
const firstGalleryImages = [
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8320-min.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8327-min.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Piscinas-1-1.jpeg',
];

const secondGalleryImages = [
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC01806-min.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC02000-min-min.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC03733.jpg',
];

export default function ClassOutingsPage() {
  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <main>

        {/* HERO 🔥 */}
        <section className="relative h-[70vh] -mt-24">

          <Image
            src="https://valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8327-min.webp"
            alt="Paseos de curso"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-semibold">
                Paseos de Curso
              </h1>

              <p className="mt-4 text-lg md:text-xl">
                Diversión, naturaleza y experiencias inolvidables
              </p>
            </motion.div>
          </div>

        </section>

        {/* INTRO */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              El paseo de curso perfecto te espera. Piscinas, juegos, naturaleza y
              momentos únicos para compartir con compañeros en un entorno seguro
              y preparado para disfrutar al máximo.
            </p>
          </div>
        </section>

        {/* AMENITIES CON ESTILO 🔥 */}
        <section className="relative py-24 text-white">

          <Image
            src="https://valledelsolquillon.cl/wp-content/uploads/2024/08/Piscinas-1-1.jpeg"
            alt="Amenities"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="relative max-w-6xl mx-auto px-6 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">
              Todo incluido para una experiencia perfecta
            </h2>

            <AmenitiesCarousel amenities={paseoAmenities} slidesToShow={4} />
          </motion.div>

        </section>

        {/* GALERÍA */}
        <HorizontalGallery images={firstGalleryImages} height={420} />

        {/* GRADUACIONES */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold">
                Graduaciones
              </h2>

              <p className="mt-4 text-gray-600">
                Celebra una graduación inolvidable en un entorno natural, con
                espacios amplios, seguros y preparados para una experiencia única.
              </p>

              <a
                href="https://wa.link/vjoaea"
                target="_blank"
                className="inline-block mt-6 px-8 py-3 rounded-full text-black font-medium"
                style={{ backgroundColor: 'rgb(251,176,59)' }}
              >
                Cotizar por WhatsApp
              </a>
            </motion.div>

            <motion.div
              className="relative h-[400px]"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Image
                src="https://valledelsolquillon.cl/wp-content/uploads/2024/09/DSC03733.jpg"
                alt="Graduaciones"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>

          </div>
        </section>

        {/* GALERÍA FINAL */}
        <HorizontalGallery images={secondGalleryImages} height={420} />

        {/* CTA FINAL 🔥 */}
        <section className="py-24 text-center">
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Reserva hoy y asegura una experiencia inolvidable para tu curso
          </p>

          <a
            href="https://wa.link/vjoaea"
            target="_blank"
            className="inline-block px-10 py-4 rounded-full text-black font-medium"
            style={{ backgroundColor: 'rgb(251,176,59)' }}
          >
            Solicitar presupuesto
          </a>
        </section>

      </main>

      <Footer
        tagline="Vuelve a esos lugares donde fuiste feliz. Vuelve a Valle del Sol"
        contactEmail="contacto@valledelsolquillon.cl"
        socialLinks={socialLinks}
      />

    </div>
  );
}