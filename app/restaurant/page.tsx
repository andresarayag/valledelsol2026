import Header from '../components/Header';
import Footer from '../components/Footer';
import ParallaxHero from '../components/ParallaxHero';
import HorizontalGallery from '../components/HorizontalGallery';
import TwoColumnSection from '../components/TwoColumnSection';
import FoodMenu from '../components/FoodMenu';
import Image from 'next/image';
import Link from 'next/link';
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
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/4C300B8E-3BC1-4A2E-8636-6751CE884315_1_105_c.jpeg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/IMG_7985-min.jpg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/5E0EA33A-A400-428B-9178-AEC50E3B0636.jpeg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/IMG_7953-min.jpg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/IMG_8030-min.jpg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/IMG_7944.jpg',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/20240825_162638964_iOS-min.jpg',
];

const foodMenuItems: MenuItem[] = [
  {
    title: 'Ceviche Rapa Nui',
    description:
      'Dados de pescado fresco marinado con cebolla morada, pimentones, sésamo, palta, y camarón bañado en una salsa de mango. Servido con tostadas.',
    price: '$10.900',
  },
  {
    title: 'Brochetas de Mariscos Kawésqar',
    description:
      'Brochetas de machas, camarón, pimentón y cebolla, asadas a la perfección y servidas sobre pancitos de varas',
    price: '$9.900',
  },
  {
    title: 'Chupe de Jaiba Pehuenche',
    description:
      'Guiso cremoso de jaiba, gratinado con queso, que resalta los sabores del sur de Chile',
    price: '$11.500',
  },
  {
    title: 'Costillar de Cordero Patagónico',
    description:
      'Costillas de cordero cocidas lentamente con hierbas patagónicas, acompañadas con pastelera y salsa de menta',
    price: '$13.500',
  },
  {
    title: 'Pastelitos de Papas Aymara',
    description:
      'Pastelitos de papa rellenos de carne de cordero y especias andinas horneados hasta dorar un homenaje a la papa cultivo ancestral de los Aymara',
    price: '$9.900',
  },
];

const wineMenuItems: MenuItem[] = [
  {
    title: 'Espumante Bullicio',
    description:
      'Bebida alcohólica a base de vino, con color y sabor de frutilla, sin azúcar añadida. Perfecta como aperitivo y para acompañar quesos maduros o postres',
    price: '$6.500',
    highlightLabel: 'Ñobles Viñedos',
  },
  {
    title: 'Dulce Misterio',
    description:
      'Espumante artesanal elaborado en una bodega de adobe tradicional, rodeada de un paisaje de belleza cautivadora. Ideal para acompañar quesos, frutas secas, fiambres y postres.',
    price: '$7.500',
  },
  {
    title: 'Carmenere Gran Reserva',
    description:
      'Este Carmenere, de Quinchamalí en la Región del Ñuble, se cultiva en lomajes suaves y con prácticas ecológicas. Su ubicación favorece una maduración óptima, resultando en un vino único, memorable y de producción limitada',
    price: '$24.500',
    highlightLabel: 'Viña Mannle',
  },
  {
    title: 'Cabernet Suavignon Gran Reserva',
    description:
      'La depresión intermedia y los suelos arcillosos ricos en cuarzo de Huape, bañados por el sol gran parte del día, crean el microclima perfecto para los vinos premium de Viña Männle',
    price: '$21.500',
  },
];

export default function RestaurantPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow pt-24">
        {/* Hero Section with Parallax */}
        <ParallaxHero
          backgroundImage="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Restaurante-3-1.jpeg"
          title="NUESTRO RESTAURANT"
          subtitle="Un homenaje a los pueblos originarios"
          description="Disfruta de tus momentos más especiales en Entre Pinos"
        />

        {/* Intro Text Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Una experiencia inspirada en nuestras raíces. Sabores auténticos
              de nuestros pueblos originarios, a un precio que te encantará
            </p>
          </div>
        </section>

        {/* Horizontal Gallery */}
        <HorizontalGallery images={restaurantGalleryImages} height={400} />

        {/* Menús de Autor Section */}
        <TwoColumnSection
          leftContent={
            <div className="relative h-full min-h-[500px]">
              <Image
                src="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Cordero-Patagonico-e1724621972959.jpeg"
                alt="Cordero Patagónico"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          }
          rightContent={
            <div>
              <p className="text-gray-600 mb-4">Combinaciones deliciosas</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Menús de Autor
              </h2>
              <FoodMenu items={foodMenuItems} />
            </div>
          }
        />

        {/* Sabores ancestrales Section Title */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Sabores ancestrales y viñas locales
            </h2>
          </div>
        </section>

        {/* Vinos & Espumantes Section */}
        <TwoColumnSection
          leftContent={
            <div>
              <p className="text-gray-600 mb-4">Maridaje Perfecto</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Vinos & Espumantes
              </h2>
              <FoodMenu items={wineMenuItems} />
            </div>
          }
          rightContent={
            <div className="relative h-full min-h-[500px]">
              <Image
                src="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Fotografia-Damian-Campos-2-737-min-e1724901779250.jpg"
                alt="Vinos"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          }
          className="bg-gray-50"
        />

        {/* Two Images Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-96">
                <Image
                  src="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Ceviche-e1724896325930.jpg"
                  alt="Ceviche"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-96">
                <Image
                  src="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/elegant-restaurant-table-setting-service-for-P8HYX7H.jpg"
                  alt="Restaurant setting"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Una experiencia de lujo a precio accesible, donde cada momento
              es único
            </p>
            <Link
              href="https://menu.fu.do/entrepinosquillon/qr-menu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-colors"
            >
              Nuestra Carta
            </Link>
          </div>
        </section>
      </main>
      <Footer
        logoUrl="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Blanco-e1723074296739.png"
        tagline="Vuelve a esos lugares donde fuiste feliz. Vuelve a Valle del Sol"
        contactEmail="contacto@valledelsolquillon.cl"
        socialLinks={socialLinks}
      />
    </div>
  );
}
