import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import HorizontalGallery from '../../components/HorizontalGallery';
import ParallaxCTA from '../../components/ParallaxCTA';
import EventFeatureCard from '../../components/EventFeatureCard';
import { SocialLink } from '../../components/types';

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

const heroBackgroundImage =
  'https://valledelsolquillon.cl/wp-content/uploads/2024/08/MF-0221-min.jpg';

const servicesIntroText =
  'Celebra tu amor en un lugar mágico, rodeado de naturaleza y tranquilidad, donde cada detalle se convierte en un recuerdo inolvidable.';

const services = [
  {
    title: 'Wedding Planner',
    description:
      'Profesional dedicado exclusivamente a coordinar y asesorar a los novios, asegurando que cada detalle de tu matrimonio sea perfecto.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/planificador-de-la-boda.webp?fit=80%2C80&ssl=1',
    iconAlt: 'Wedding planner',
  },
  {
    title: 'Decoraciones',
    description:
      'Cada matrimonio es único, y por eso contamos con profesionales que ofrecen a los novios una decoración personalizada y de estilo inigualable.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/pasillo-1.webp?fit=80%2C80&ssl=1',
    iconAlt: 'Decoraciones pasillo',
  },
  {
    title: 'Chef de Especialidad',
    description:
      'Ofrecemos menús personalizados, incluyendo alternativas veganas o vegetarianas, diseñados para reflejar la experiencia única que cada pareja desea vivir.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/sombrero-de-cocinero.webp?fit=80%2C80&ssl=1',
    iconAlt: 'Sombrero de cocinero',
  },
  {
    title: 'Audiovisuales',
    description:
      'Equipo experto que ofrece las mejores opciones en sonido, iluminación, DJ y animación, garantizando una experiencia única y memorable.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/sistema-de-sonido.webp?fit=80%2C80&ssl=1',
    iconAlt: 'Sistema de sonido',
  },
  {
    title: 'Adicionales',
    description:
      'Cabinas fotográficas, espejo mágico, cámara 360°, estación de tatuajes, carritos de comida, artistas en vivo, cotillón y más opciones para tu matrimonio.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/fotografo.webp?fit=80%2C80&ssl=1',
    iconAlt: 'Fotógrafo',
  },
  {
    title: 'Servicio de Barra',
    description:
      'Espumantes de la zona para el brindis, vinos del Valle del Itata para la cena y la mejor barra libre durante la fiesta.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/copa-de-vino.png?fit=80%2C80&ssl=1',
    iconAlt: 'Copa de vino',
  },
];

const weddingsGalleryImages: string[] = [
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/22789193_1336544243138635_4034647322991933903_n.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/22688736_1336631363129923_5058742057974768606_n.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/22852865_1343100705816322_7890504004774089660_n.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/23244168_1345175188942207_6660311132141092709_n.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/16864273_1109300759196319_1723822983234255931_n.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/23376595_1352910931501966_8454051898756448670_n.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/473_821327091327022_8409173245548621767_n.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/MF-0160-min.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Matrimonio-1.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Eventos-4.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/DSC01866-min.webp',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC03733-min.jpg',
];

export default function WeddingsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="grow pt-24">
        {/* Hero heading */}
        <section
          className="relative py-24 md:py-32 bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${heroBackgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sí, acepto</h1>
            <p className="text-lg md:text-xl">
              Cotiza con nuestro formato all inclusive
            </p>
          </div>
        </section>

        {/* Intro text */}
        <HeroSection
          title="Un día perfecto en un entorno de ensueño."
          description={servicesIntroText}
        />

        {/* Main services (Nuestros servicios incluyen) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestros Servicios Incluyen:
              </h2>
              <ul className="text-gray-700 text-sm md:text-base leading-relaxed space-y-1 list-disc list-inside text-left md:text-left">
                <li>Servicio de alimentación completo</li>
                <li>Diversas alternativas de menú</li>
                <li>Banquetería y bar abierto</li>
                <li>Menús con opción buffet</li>
                <li>Papelería completamente personalizada</li>
                <li>Wedding planner para la coordinación del evento</li>
                <li>DJ y Animador a elección, según preferencias de los novios</li>
                <li>Servicio audiovisual completo</li>
                <li>Salones amplios, con vistas y climatizados</li>
                <li>Decoración incluida</li>
                <li>Jardines para celebración de ceremonias</li>
                <li>Estacionamiento privado sin costo</li>
                <li>Cabaña para los novios</li>
                <li>Los mejores vinos y espumantes del Valle del Itata.</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
              {services.map((service) => (
                <EventFeatureCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  iconUrl={service.iconUrl}
                  iconAlt={service.iconAlt}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA with parallax background */}
        <ParallaxCTA
          backgroundImage={heroBackgroundImage}
          text="La mejor experiencia en matrimonios, tu boda soñada en manos de profesionales."
          buttonText="Cotiza tu evento"
          buttonHref="/cotiza-tu-evento"
        />

        {/* Our couples gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nuestros Novios
            </h2>
          </div>
          <HorizontalGallery images={weddingsGalleryImages} height={400} />
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
