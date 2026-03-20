import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import HorizontalGallery from '../../components/HorizontalGallery';
import TwoColumnSection from '../../components/TwoColumnSection';
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
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Eventos-5-min-e1725423897963.jpeg';

const highlightStats = [
  {
    title: 'Ubicación privilegiada',
    description: 'La mejor ubicación de Quillón.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/ubicacion-1.webp?fit=60%2C60&ssl=1',
    iconAlt: 'Ubicación',
  },
  {
    title: 'Hasta 1.000 personas',
    description: 'Capacidad total para eventos masivos.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/personas.png?fit=60%2C60&ssl=1',
    iconAlt: 'Personas',
  },
  {
    title: 'Salones equipados',
    description: 'Salones de 250 y 150 personas para diferentes formatos.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/conferencia.png?fit=60%2C60&ssl=1',
    iconAlt: 'Conferencia',
  },
  {
    title: 'Audiovisuales a medida',
    description: 'Equipo audiovisual ajustado a tus requerimientos.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/escenario.png?fit=60%2C60&ssl=1',
    iconAlt: 'Escenario',
  },
  {
    title: 'Banquetería',
    description: 'Servicio de banquetería con variadas opciones.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/banquete.png?fit=60%2C60&ssl=1',
    iconAlt: 'Banquete',
  },
  {
    title: 'Estacionamientos',
    description: 'Estacionamiento privado para 100 vehículos.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/coche.png?fit=60%2C60&ssl=1',
    iconAlt: 'Estacionamiento',
  },
];

const christmasImage =
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Eventos-5-min-e1725423897963.jpeg?fit=3457%2C3885&ssl=1';

const trainingGalleryImages: string[] = [
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Auditorio-2-min-1.webp?fit=1024%2C768&ssl=1',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_6617-min-1.webp?fit=1024%2C768&ssl=1',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_6620-min.webp?fit=1024%2C768&ssl=1',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_6618-min-1.webp?fit=1024%2C768&ssl=1',
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_6619-min.jpg?fit=1024%2C768&ssl=1',
];

const experiences = [
  {
    title: 'Tour Viñas',
    description:
      'Sorprende a tu equipo con nuestros exclusivos tours de viñas: catas selectas, paisajes únicos y una experiencia para fortalecer lazos.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/tour-vinos-min.webp?resize=700%2C466&ssl=1',
    iconAlt: 'Tour viñas',
  },
  {
    title: 'Producción de Eventos',
    description:
      'Producción integral para lanzamientos, celebraciones o encuentros empresariales, con atención a cada detalle.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8756-min.webp?resize=700%2C466&ssl=1',
    iconAlt: 'Producción de eventos',
  },
  {
    title: 'Banquetería',
    description:
      'Menús personalizados con ingredientes frescos, ideales para reuniones corporativas o celebraciones especiales.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/DSC01773-min.webp?resize=700%2C466&ssl=1',
    iconAlt: 'Banquetería',
  },
  {
    title: 'Diversión en Familia',
    description:
      'Jornadas pensadas para colaboradores y sus familias, con actividades y espacios para disfrutar juntos.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8320-min.webp?resize=700%2C466&ssl=1',
    iconAlt: 'Diversión en familia',
  },
  {
    title: 'Día de Piscina',
    description:
      'Un día de piscina para relajarse, desconectar y agradecer a tu equipo en un entorno natural.',
    iconUrl:
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/IMG_8004-min.webp?resize=700%2C466&ssl=1',
    iconAlt: 'Día de piscina',
  },
];

export default function CorporateEventPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="grow pt-24">
        {/* Hero with background image */}
        <section
          className="relative py-24 md:py-32 bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${heroBackgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 text-left md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">VIVE LA</h1>
            <h2 className="text-3xl md:text-4xl font-semibold">EXPERIENCIA</h2>
          </div>
        </section>

        {/* Event types strip */}
        <section className="py-6 bg-gray-900">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm md:text-base font-semibold text-white tracking-wide">
              CAPACITACIONES • FIESTA NAVIDAD • SEMINARIOS • RETIROS • CONVENCIONES
            </p>
          </div>
        </section>

        {/* Stats / quick facts */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {highlightStats.map((item) => (
                <EventFeatureCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  iconUrl={item.iconUrl}
                  iconAlt={item.iconAlt}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Fiesta de Navidad */}
        <TwoColumnSection
          leftContent={
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Fiesta de Navidad
              </h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Celebra la magia de la Navidad con tu equipo. Disfruten de una velada
                inolvidable rodeada de naturaleza, calidez y tradición. Nuestro equipo se
                encarga de la decoración festiva, un menú exquisito y todos los detalles
                para que solo se preocupen de disfrutar.
              </p>
            </>
          }
          rightContent={
            <div className="relative h-80 md:h-[420px] rounded-lg overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={christmasImage}
                alt="Fiesta de navidad corporativa"
                className="w-full h-full object-cover"
              />
            </div>
          }
          className="bg-white"
        />

        {/* Capacitaciones with gallery */}
        <TwoColumnSection
          leftContent={
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                CAPACITACIONES
              </h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Transforma tus capacitaciones en una experiencia excepcional. Nuestros
                salones están diseñados para inspirar productividad y creatividad, en un
                entorno que combina la tranquilidad de la naturaleza con tecnología de
                vanguardia. Desde la planificación hasta la ejecución, nos encargamos de
                cada detalle para que tu equipo pueda enfocarse en lo que realmente
                importa: crecer y aprender.
              </p>
            </>
          }
          rightContent={
            <HorizontalGallery images={trainingGalleryImages} height={320} />
          }
          className="bg-gray-50"
        />

        {/* Descubre la experiencia - corporate experiences */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="mx-auto mb-4 h-px w-16 bg-gray-300" />
              <p className="text-lg font-medium text-gray-900">Descubre la</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                experiencia
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {experiences.map((exp) => (
                <EventFeatureCard
                  key={exp.title}
                  title={exp.title}
                  description={exp.description}
                  iconUrl={exp.iconUrl}
                  iconAlt={exp.iconAlt}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA (linking to existing form page) */}
        <HeroSection
          title="¿Tienes dudas? Escríbenos"
          description="Cuéntanos sobre tu evento corporativo y te ayudaremos a diseñar una experiencia a la medida de tu equipo."
          className="bg-gray-900 text-white"
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
