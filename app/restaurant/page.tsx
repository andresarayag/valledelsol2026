'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock3, MapPin } from 'lucide-react';
import { SocialLink } from '../components/types';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

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
  /* PARALLAX DEL HERO */
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.25],
    ['-8%', '28%']
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.25],
    [1.15, 1.25]
  );

  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <main>

        {/* HERO CON PARALLAX */}
        <section className="relative h-[85vh] -mt-24 overflow-hidden bg-black">

          {/* IMAGEN PARALLAX */}
          <motion.div
            className="absolute -inset-y-32 inset-x-0"
            style={{
              y: heroY,
              scale: heroScale,
            }}
          >
            <Image
              src="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Restaurante-3-1.jpeg"
              alt="Restaurant Valle del Sol"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/75" />

          {/* CONTENIDO */}
          <div className="relative z-10 h-full flex items-center justify-center px-6 pt-24">

            <div className="max-w-6xl mx-auto text-center text-white">

              <motion.h1
                initial={{ opacity: 0, x: -120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white"
              >
                Nuestro Restaurant
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                }}
                className="mt-10 text-xl md:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed"
              >
                Una experiencia gastronómica en medio de la naturaleza
              </motion.p>

            </div>

          </div>

        </section>

        {/* CTA HERO */}
        <div className="text-center -mt-10 mb-16 relative z-10">

          <Link
            href="https://menu.fu.do/entrepinosquillon/qr-menu"
            target="_blank"
            className="inline-block px-10 py-4 rounded-full font-semibold text-black shadow-xl transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#FBB03B',
            }}
          >
            Ver Carta
          </Link>

        </div>

        {/* DESCRIPCIÓN RESTAURANT */}
        <section className="pb-20">

          <div className="max-w-6xl mx-auto px-6">

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">

              <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* TEXTO */}
                <div>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Espacio de <strong>300m²</strong>, capacidad para{' '}
                    <strong>150 personas</strong> y una espectacular{' '}
                    <strong>terraza panorámica</strong> con vista a la piscina.
                    Un ambiente ideal para disfrutar sabores únicos en un
                    entorno natural y acogedor.
                  </p>

                </div>

                {/* INFORMACIÓN */}
                <div className="space-y-5">

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-[#FBB03B]/10 flex items-center justify-center">

                      <Clock3 className="w-7 h-7 text-[#FBB03B]" />

                    </div>

                    <div>

                      <p className="text-sm uppercase tracking-wider text-gray-400">
                        Horario
                      </p>

                      <p className="text-lg font-semibold text-gray-800">
                        Todos los días de 12:00 a 19:00 hrs
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-[#FBB03B]/10 flex items-center justify-center">

                      <MapPin className="w-7 h-7 text-[#FBB03B]" />

                    </div>

                    <div>

                      <p className="text-sm uppercase tracking-wider text-gray-400">
                        Ubicación
                      </p>

                      <p className="text-lg font-semibold text-gray-800">
                        Km. 1,5 Camino a Cerro Negro, Parcela 51, Quillón
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* INTRO */}
        <section className="pt-4 pb-20">

          <div className="max-w-6xl mx-auto px-6">

            {/* TÍTULO */}
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: false,
                margin: '-100px',
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <h2 className="text-4xl md:text-5xl font-light text-gray-700 leading-tight">
                SABORES CON{' '}
                <span className="font-semibold text-gray-900">
                  IDENTIDAD LOCAL
                </span>
              </h2>

            </motion.div>

            {/* SUBTÍTULO */}
            <motion.p
              className="mt-4 text-lg text-gray-600 uppercase tracking-wide"
              initial={{
                opacity: 0,
                y: -20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
            >
              PLATOS CON RAÍZ CHILENA, PRODUCTOS LOCALES Y EL SABOR AUTÉNTICO
              DEL CAMPO
            </motion.p>

          </div>

        </section>

        {/* GALERÍA */}
        <section className="px-6 pb-24">

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.1,
                }}
                viewport={{
                  once: false,
                }}
                className="overflow-hidden rounded-2xl group"
              >

                <div className="relative h-[300px]">

                  <Image
                    src={img}
                    alt={`Plato del restaurante ${i + 1}`}
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

          <div className="max-w-5xl mx-auto px-6">

            <div className="flex flex-col md:flex-row gap-6 justify-center">

              <PrimaryButton
                href="https://www.eventi-app.com/public-quotation/1"
                target="_blank"
              >
                Cotiza tu evento
              </PrimaryButton>

              <SecondaryButton
                href="https://wa.me/56926035311"
                target="_blank"
              >
                WhatsApp
              </SecondaryButton>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}