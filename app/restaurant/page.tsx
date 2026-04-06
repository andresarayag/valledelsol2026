'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HorizontalGallery from '../components/HorizontalGallery';
import TwoColumnSection from '../components/TwoColumnSection';
import FoodMenu from '../components/FoodMenu';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SocialLink, MenuItem } from '../components/types';

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

const restaurantGalleryImages = [
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/4497900C-2782-40DB-A962-B38470044A37_1_102_o-e1725501882844.jpeg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/1000028807-min.jpg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/20240824_215030157_iOS-min-e1724725751972.jpg',
];

const foodMenuItems: MenuItem[] = [
  {
    title: 'Ceviche Rapa Nui',
    description:
      'Dados de pescado fresco marinado con cebolla morada, pimentones, sésamo, palta y camarón en salsa de mango.',
    price: '$10.900',
  },
  {
    title: 'Brochetas de Mariscos Kawésqar',
    description:
      'Brochetas de machas, camarón, pimentón y cebolla, asadas y servidas sobre pancitos de varas.',
    price: '$9.900',
  },
  {
    title: 'Chupe de Jaiba Pehuenche',
    description:
      'Guiso cremoso de jaiba gratinado con queso, con sabores del sur de Chile.',
    price: '$11.500',
  },
  {
    title: 'Costillar de Cordero Patagónico',
    description:
      'Cordero cocido lentamente con hierbas, acompañado con pastelera y salsa de menta.',
    price: '$13.500',
  },
  {
    title: 'Pastelitos de Papas Aymara',
    description:
      'Rellenos de cordero y especias andinas, horneados hasta dorar.',
    price: '$9.900',
  },
];

const wineMenuItems: MenuItem[] = [
  {
    title: 'Espumante Bullicio',
    description: 'Espumante frutal sin azúcar añadida.',
    price: '$6.500',
    highlightLabel: 'Ñobles Viñedos',
  },
  {
    title: 'Dulce Misterio',
    description: 'Espumante artesanal ideal para aperitivos.',
    price: '$7.500',
  },
  {
    title: 'Carmenere Gran Reserva',
    description: 'Vino ecológico de Quinchamalí, intenso y memorable.',
    price: '$24.500',
    highlightLabel: 'Viña Männle',
  },
  {
    title: 'Cabernet Sauvignon Gran Reserva',
    description: 'Vino premium con gran cuerpo y carácter.',
    price: '$21.500',
  },
];

export default function RestaurantPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>

        {/* HERO 🔥 IGUAL QUE CABAÑAS */}
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

              <p className="mt-4 text-lg md:text-xl">
                Un homenaje a los pueblos originarios
              </p>

              <p className="mt-2 text-sm md:text-base text-white/80">
                Disfruta de tus momentos más especiales en Entre Pinos
              </p>
            </motion.div>
          </div>

        </section>

        {/* CTA HERO */}
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
        <motion.section
          className="py-16 text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Una experiencia inspirada en nuestras raíces. Sabores auténticos de nuestros pueblos originarios, a un precio que te encantará.
            </p>
          </div>
        </motion.section>

        {/* GALERÍA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HorizontalGallery images={restaurantGalleryImages} height={400} />
        </motion.div>

        {/* MENÚ */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TwoColumnSection
            leftContent={
              <Image
                src="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Cordero-Patagonico-e1724621972959.jpeg"
                alt="Cordero"
                width={600}
                height={500}
                className="rounded-xl object-cover"
              />
            }
            rightContent={
              <div>
                <p className="text-gray-500 mb-2">Combinaciones deliciosas</p>
                <h2 className="text-4xl font-bold mb-6">Menús de Autor</h2>
                <FoodMenu items={foodMenuItems} />
              </div>
            }
          />
        </motion.div>

        {/* TÍTULO */}
        <motion.section
          className="py-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Sabores ancestrales y viñas locales
          </h2>
        </motion.section>

        {/* VINOS */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TwoColumnSection
            leftContent={
              <div>
                <p className="text-gray-500 mb-2">Maridaje Perfecto</p>
                <h2 className="text-4xl font-bold mb-6">Vinos & Espumantes</h2>
                <FoodMenu items={wineMenuItems} />
              </div>
            }
            rightContent={
              <Image
                src="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Fotografia-Damian-Campos-2-737-min-e1724901779250.jpg"
                alt="Vinos"
                width={600}
                height={500}
                className="rounded-xl object-cover"
              />
            }
            className="bg-gray-50"
          />
        </motion.div>

        {/* CTA FINAL */}
        <motion.section
          className="py-24 text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Una experiencia de lujo a precio accesible, donde cada momento es único.
          </p>

          <Link
            href="https://menu.fu.do/entrepinosquillon/qr-menu"
            target="_blank"
            className="inline-block px-10 py-4 rounded-full text-white font-semibold transition hover:scale-105"
            style={{ backgroundColor: 'rgb(251,176,59)' }}
          >
            Ver Carta Completa
          </Link>
        </motion.section>

      </main>

      <Footer
        tagline="Vuelve a esos lugares donde fuiste feliz. Vuelve a Valle del Sol"
        contactEmail="contacto@valledelsolquillon.cl"
        socialLinks={socialLinks}
      />
    </div>
  );
}