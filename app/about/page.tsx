import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HorizontalGallery from '../components/HorizontalGallery';
import TeamMemberCard from '../components/TeamMemberCard';
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
  'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Matrimonio-min-e1723475932473.webp',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="grow pt-24">
        {/* Hero / Headline with animated words */}
        <Hero
          staticText="Mas que un complejo turistico queremos ser"
          animatedWords={['una Experiencia', 'un Recuerdo']}
        />

        {/* Intro section with title, logo and story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Una escapda llena de cultura y naturaleza
            </h2>

            <div className="flex justify-center">
              <img
                src="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Negro.png?fit=300%2C247&ssl=1"
                alt="Valle del Sol logo negro"
                className="h-24 w-auto"
              />
            </div>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Nuestra historia comenzó en 2023, cuando decidimos dejar atrás la vida de
              oficina en Santiago para perseguir un sueño compartido: crear una experiencia
              turística única, que conectara a nuestros visitantes con la naturaleza y la
              cultura local. Con esta visión clara, nos aventuramos en un proyecto que
              integra una red de proveedores y productores locales, aportando autenticidad
              y apoyando el crecimiento económico de nuestra comunidad y región. Desde el
              inicio, hemos combinado lo mejor de las tradiciones locales con prácticas
              administrativas de excelencia, sumando tecnología avanzada para brindar una
              experiencia turística innovadora y memorable. Hoy, seguimos creciendo con el
              mismo compromiso: ofrecer calidad, sostenibilidad y un impacto positivo en
              cada paso que damos.
            </p>
          </div>
        </section>

        {/* Team section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <TeamMemberCard
                name="Bárbara López"
                role="Socia · Administración"
                description="Contador Público y Auditor con postítulo en tributación. Ex Gerente de Impuestos Corporativos y ahora socia y encargada de Administración en Valle del Sol. Lidera la gestión administrativa con una visión enfocada en el crecimiento sostenible y el impacto comunitario."
                imageUrl="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Nosotros-Barbara-3.webp"
              />
              <TeamMemberCard
                name="Felipe Vargas"
                role="Socio · Finanzas y Estrategia"
                description="Ingeniero Civil Industrial, con diplomado en Transformación Digital. Ex Gerente de finanzas corporativas y consultor de Management Consulting, ahora socio y encargado de las relaciones comerciales y estrategias de negocio en Valle del Sol."
                imageUrl="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Nosotros-Felipe.jpeg"
              />
              <TeamMemberCard
                name="Camila Carvajal"
                role="Operaciones"
                description="Ingeniera Agrónoma con diplomado en paisajismo, ex supervisora de áreas verdes. Hoy es la coordinadora de operaciones en Valle del Sol y se asegura de que todo funcione a la perfección, siendo clave en cada detalle para que las cosas sucedan."
                imageUrl="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Nosotros-Camila.jpeg"
              />
              <TeamMemberCard
                name="Bela"
                role="Relaciones Públicas"
                description="Ex perrita callejera, ingeniera en recolección de basura y ahora nuestra encargada de relaciones públicas. Su historia con Valle del Sol comenzó el día que llegamos: nos siguió a todas partes y supimos que sería parte esencial de nuestra familia."
                imageUrl="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/09/Bela-7.jpeg"
              />
            </div>
          </div>
        </section>

        {/* Horizontal gallery */}
        <HorizontalGallery images={aboutGalleryImages} height={400} />

        {/* Reflection text */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-8">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Nos perdemos en la búsqueda de lo que no necesitamos, comprando con dinero
              que no tenemos, para impresionar a quienes no ven nuestro valor. Y sin darnos
              cuenta, lo esencial está en esos momentos sencillos, cuando compartimos risas
              y abrazos con quienes nos sostienen. La verdadera riqueza no está en lo que
              acumulamos, sino en quienes caminan a nuestro lado, compartiendo el peso de
              nuestros días.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              &quot;Somos el tiempo que gastamos en quienes amamos&quot;
            </h2>
          </div>
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
