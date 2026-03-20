import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import HorizontalGallery from '../../components/HorizontalGallery';
import TwoColumnSection from '../../components/TwoColumnSection';
import AmenitiesCarousel from '../../components/AmenitiesCarousel';
import { SocialLink, Amenity } from '../../components/types';

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

const paseoAmenities: Amenity[] = [
  {
    imageUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/alimentacion-saludable.webp?fit=120%2C120&ssl=1',
    alt: 'Solicita presupuesto con alimentación',
    caption: 'Solicita presupuesto con alimentación',
  },
  {
    imageUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/patio-de-recreo.webp?fit=120%2C120&ssl=1',
    alt: 'Juegos Infantiles',
    caption: 'Juegos Infantiles',
  },
  {
    imageUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/juego-de-picnic.webp?fit=120%2C120&ssl=1',
    alt: 'Zona de Picnic',
    caption: 'Zona de Picnic',
  },
  {
    imageUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/parrilla.webp?fit=120%2C120&ssl=1',
    alt: 'Parrillas para asado',
    caption: 'Parrillas para asado',
  },
  {
    imageUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/ninos-jugando.webp?fit=120%2C120&ssl=1',
    alt: 'Amplias áreas verdes',
    caption: 'Amplias áreas verdes',
  },
];

const firstGalleryImages: string[] = [
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8320-min.webp?fit=683%2C1024&ssl=1',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8327-min.webp?fit=1024%2C683&ssl=1',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Piscinas-1-1.jpeg?fit=683%2C1024&ssl=1',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8241-min.webp?fit=1024%2C683&ssl=1',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8063-min.webp?fit=683%2C1024&ssl=1',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8112-min.webp?fit=683%2C1024&ssl=1',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_7997-min.webp?fit=683%2C1024&ssl=1',
];

const secondGalleryImages: string[] = [
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC01806-min.webp?fit=1024%2C683&ssl=1',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC02000-min-min.webp?fit=1024%2C683&ssl=1',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC03733.jpg?fit=1024%2C683&ssl=1',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC03916-min.webp?fit=1024%2C683&ssl=1',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC01755-min.webp?fit=1024%2C683&ssl=1',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC01759-min.webp?fit=1024%2C683&ssl=1',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC01844-min.webp?fit=1024%2C683&ssl=1',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC03608-min.webp?fit=1024%2C683&ssl=1',
];

export default function ClassOutingsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="grow pt-24">
        {/* Hero: Paseos de Curso + amenities carousel */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Paseos de Curso
              </h1>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                ¡El paseo de curso perfecto te espera! Diversión, piscina, juegos y
                momentos inolvidables. Reserva y asegura una experiencia única para
                todos.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <AmenitiesCarousel amenities={paseoAmenities} slidesToShow={3} />
            </div>
          </div>
        </section>

        {/* Nuestro enfoque */}
        <HeroSection
          title="Nuestro enfoque"
          description="Diversión asegurada con total seguridad y cuidado, para que los niños disfruten y los apoderados estén tranquilos."
          className="bg-gray-50"
        />

        {/* First horizontal gallery */}
        <HorizontalGallery images={firstGalleryImages} height={400} />

        {/* Graduaciones + WhatsApp CTA */}
        <TwoColumnSection
          leftContent={
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                GRADUACIONES
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Celebra una graduación inolvidable, con diversión y seguridad
                garantizadas, para que todos disfruten con total tranquilidad.
              </p>
              <a
                href="https://wa.link/vjoaea"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full text-sm md:text-base font-medium hover:bg-gray-800 transition-colors"
              >
                WHATSAPP
              </a>
            </div>
          }
          rightContent={<div />}
          className="bg-white"
        />

        {/* Second horizontal gallery */}
        <HorizontalGallery images={secondGalleryImages} height={400} />

        {/* Location near Concepción and Chillán */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
              CERCA DE CONCEPCIÓN Y CHILLÁN
            </h2>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=complejo%20turistico%20valle%20del%20sol%20quillon&t=m&z=10&output=embed&iwloc=near"
                title="complejo turistico valle del sol quillon"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Budget request CTA */}
        <HeroSection
          title="SOLICITA UN PRESUPUESTO"
          description="Cuéntanos sobre tu paseo de curso o graduación y te enviaremos una propuesta a medida."
          className="bg-white"
        />
      </main>

      <Footer
        tagline="Vuelve a esos lugares donde fuiste feliz. Vuelve a Valle del Sol"
        contactEmail="contacto@valledelsolquillon.cl"
        socialLinks={socialLinks}
      />
    </div>
  );
}