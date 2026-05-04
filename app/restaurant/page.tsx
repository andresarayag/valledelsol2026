'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SocialLink } from '../components/types';

const socialLinks: SocialLink[] = [
  {
    name: 'Tripadvisor',
    href: 'https://www.tripadvisor.cl/Hotel_Review-g3732316-d7155218-Reviews-Centro_de_Eventos_Valle_del_Sol-Quillon_Biobio_Region.html',
    icon: 'tripadvisor',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/valledelsolquillon',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/valledelsolquillon.cl/',
    icon: 'instagram',
  },
  {
    name: 'Whatsapp',
    href: 'https://api.whatsapp.com/send?phone=%2B56976705424',
    icon: 'whatsapp',
  },
];

const galleryImages = [
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/4497900C-2782-40DB-A962-B38470044A37_1_102_o-e1725501882844.jpeg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/1000028807-min.jpg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/20240824_215030157_iOS-min-e1724725751972.jpg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Cordero-Patagonico-e1724621972959.jpeg',
];

export default function RestaurantPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>

        {/* HERO */}
        <section className="relative h-[70vh] -mt-24">
          <Image
            src="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Restaurante-3-1.jpeg"
            alt="Restaurant Valle del Sol"
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
                Nuestro Restaurant
              </h1>

              <p className="mt-2 text-sm md:text-base text-white/80">
                Una experiencia gastronómica en medio de la naturaleza
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA HERO (RESTAURADO) */}
        <div className="text-center -mt-10 mb-16 relative z-10">
          <Link
            href="https://menu.fu.do/entrepinosquillon/qr-menu"
            target="_blank"
            className="inline-block px-10 py-4 rounded-full font-semibold text-white shadow-xl transition transform hover:scale-105"
            style={{ backgroundColor: 'rgb(251,176,59)' }}
          >
            Ver Carta
          </Link>
        </div>

        {/* INTRO */}
        <section className="pt-10 pb-20 text-center">
          <div className="max-w-4xl mx-auto px-6 text-gray-700">
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              <strong className="text-black font-semibold md:font-bold lg:font-extrabold tracking-wide block mb-3">
                Sabores que despiertan los sentidos
              </strong>
              Cada plato está pensado para transformar una comida en una experiencia inolvidable.
            </p>
          </div>
        </section>

        {/* GALERÍA PREMIUM */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden rounded-2xl group"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={img}
                    alt="Plato restaurante"
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 text-center bg-gray-50">
          <div className="max-w-3xl mx-auto px-6">

            <p className="text-xl text-gray-700 mb-10">
              Reserva tu experiencia gastronómica o cotiza tu evento con nosotros.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">

              <a
                href="https://wa.me/56926035311"
                target="_blank"
                className="px-10 py-4 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition"
                style={{ backgroundColor: '#25D366' }}
              >
                WhatsApp
              </a>

              <a
                href="https://www.eventi-app.com/public-quotation/1"
                target="_blank"
                className="px-10 py-4 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition"
                style={{ backgroundColor: 'rgb(251,176,59)' }}
              >
                Cotiza tu evento
              </a>

            </div>

          </div>
        </section>

      </main>

      <Footer/>
    </div>
  );
}