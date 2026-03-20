import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import HeroSection from '../components/HeroSection';
import TwoColumnSection from '../components/TwoColumnSection';
import CabinCard from '../components/CabinCard';
import { Cabin, SocialLink } from '../components/types';

// Social links (reused from home)
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

// Cabin data
const cabins: Cabin[] = [
  {
    id: 'cabana-2p',
    title: 'Cabaña para 2 personas',
    description: 'Un rincón perfecto para disfrutar en pareja.',
    images: [
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/PHOTO-2024-05-15-13-29-18-7-e1723668037323.jpg',
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/PHOTO-2024-05-15-13-29-18-4.webp',
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/PHOTO-2024-05-15-14-02-01-4-1.webp',
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/PHOTO-2024-05-15-13-29-18-3-e1723668391928.webp',
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Cabanas-1.jpeg',
    ],
    details:
      'Suite de un ambiente con techo panoramico de 30m2. Se ubica escondida entre arbustos y arboles frente a la piscina principal, cuenta con una terraza de 15m2',
    amenities: [
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/servicio-de-habitacion.webp',
        alt: 'Servicio a la habitación',
        caption: 'Servicio a la habitación',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/wifi.webp',
        alt: 'Wifi incluido',
        caption: 'Wifi incluido',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/smart-tv.webp',
        alt: 'Smar TV',
        caption: 'Smar TV',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/nevera.webp',
        alt: 'Frigobar',
        caption: 'Frigobar',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/papel-de-bano.webp',
        alt: 'Papel higienico',
        caption: 'Papel higienico',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/toallas.webp',
        alt: 'Toallas',
        caption: 'Toallas',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/terraza.webp',
        alt: 'Salida a Terraza',
        caption: 'Salida a Terraza',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/parrilla-de-barbacoa.webp',
        alt: 'Parrilla incluida',
        caption: 'Parrilla incluida',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/cama-2-plazas.webp',
        alt: '1 cama de dos plazas',
        caption: '1 cama de dos plazas',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/estufa-de-lena.webp',
        alt: 'Estufa a leña',
        caption: 'Estufa a leña',
      },
    ],
    reserveButtonId: 'btn-widget2p',
  },
  {
    id: 'cabana-4p',
    title: 'Cabañas para 4 personas',
    description: 'Espacio acogedor ideal para experiencias familiares inolvidables.',
    images: [
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/image00003-min.webp',
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/DSC04528-min.webp',
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/DSC04519-min.webp',
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/image00004-min.webp',
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/image00006-min.webp',
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/image00002-min.jpeg',
    ],
    details:
      'Cabaña familiar de dos habitaciones más cocina americana de 40m2. Se ubica frente a una zona de juegos infantiles bajo la sombra de pinos insigne, cuenta con una terraza de 20m2',
    amenities: [
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/cocina.png',
        alt: 'Cocina Equipada',
        caption: 'Cocina Equipada',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/servicio-de-habitacion.webp',
        alt: 'Servicio a la habitación',
        caption: 'Servicio a la habitación',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/wifi.webp',
        alt: 'Wifi incluido',
        caption: 'Wifi incluido',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/smart-tv.webp',
        alt: 'Smar TV',
        caption: 'Smar TV',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/nevera.webp',
        alt: 'Frigobar',
        caption: 'Frigobar',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/toallas.webp',
        alt: 'Toallas',
        caption: 'Toallas',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/papel-de-bano.webp',
        alt: 'Papel higienico',
        caption: 'Papel higienico',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/terraza.webp',
        alt: 'Salida a Terraza',
        caption: 'Salida a Terraza',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/parrilla-de-barbacoa.webp',
        alt: 'Parrilla incluida',
        caption: 'Parrilla incluida',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/cama-2-plazas.webp',
        alt: '1 cama de dos plazas',
        caption: '1 cama de dos plazas',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/cama-1-plaza.webp',
        alt: '2 camas de una plaza',
        caption: '2 camas de una plaza',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/estufa-de-lena.webp',
        alt: 'Estufa a leña',
        caption: 'Estufa a leña',
      },
    ],
    reserveButtonId: 'btn-widget4p',
  },
  {
    id: 'cabana-6p',
    title: 'Cabaña para 6 personas',
    description: 'Cabaña acogedora para familias grandes y grupos de amigos',
    images: [
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/image00014-min.jpeg',
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/image00016-min.jpeg',
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/image00022-min.jpeg',
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/image00017-min.jpeg',
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/image00025-min.jpeg',
      'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/image00033-min.jpeg',
    ],
    details:
      'Cabaña familiar de tres habitaciones más cocina americana de 65m2. Se ubica frente a la fuente con cascada de agua, cuenta con una terraza de 30m2',
    amenities: [
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/cocina.png',
        alt: 'Cocina Equipada',
        caption: 'Cocina Equipada',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/servicio-de-habitacion.webp',
        alt: 'Servicio a la habitación',
        caption: 'Servicio a la habitación',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/wifi.webp',
        alt: 'Wifi incluido',
        caption: 'Wifi incluido',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/parrilla-de-barbacoa.webp',
        alt: 'Parrilla incluida',
        caption: 'Parrilla incluida',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/terraza.webp',
        alt: 'Salida a Terraza',
        caption: 'Salida a Terraza',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/toallas.webp',
        alt: 'Toallas',
        caption: 'Toallas',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/papel-de-bano.webp',
        alt: 'Papel higienico',
        caption: 'Papel higienico',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/nevera.webp',
        alt: 'Frigobar',
        caption: 'Frigobar',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/smart-tv.webp',
        alt: 'Smar TV',
        caption: 'Smar TV',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/estufa-de-lena.webp',
        alt: 'Estufa a leña',
        caption: 'Estufa a leña',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/cama-2-plazas.webp',
        alt: '1 cama de dos plazas',
        caption: '1 cama de dos plazas',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/cama-1-plaza.webp',
        alt: '2 camas de una plaza',
        caption: '2 camas de una plaza',
      },
      {
        imageUrl:
          'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Litera.webp',
        alt: '1 litera',
        caption: '1 litera',
      },
    ],
    reserveButtonId: 'btn-widget6p',
  },
];

export default function Cabanas() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        {/* Page Header */}
        <PageHeader title="Nuestras Cabañas" />

        {/* Hero Section */}
        <HeroSection
          title="Más cerca del paraiso"
          description="Despierta cada mañana disfrutando los colores verdes de la naturaleza y termina el día con la magia de un atardecer. Nuestras cabañas, diseñadas con un toque rústico y moderno, están rodeadas de paisajes impresionantes que invitan al descanso y la desconexión. Aquí, cada amanecer te regala paz y cada atardecer, un momento para atesorar. Ven y vive la tranquilidad en su máxima expresión."
        />

        {/* Two Column Section - Description and Amenities */}
        <TwoColumnSection
          leftContent={
            <p>
              Despierta cada mañana disfrutando los colores verdes de la
              naturaleza y termina el día con la magia de un atardecer. Nuestras
              cabañas, diseñadas con un toque rústico y moderno, están rodeadas
              de paisajes impresionantes que invitan al descanso y la
              desconexión. Aquí, cada amanecer te regala paz y cada atardecer,
              un momento para atesorar. Ven y vive la tranquilidad en su máxima
              expresión.
            </p>
          }
          rightContent={
            <div>
              <p className="font-bold mb-4">TODAS LAS CABAÑAS TIENEN INCLUIDO</p>
              <ul className="space-y-2 list-none">
                <li>● <strong>Desayuno Incluido</strong></li>
                <li>● Smart TV</li>
                <li>● Amenidades de baño</li>
                <li>● Acceso a piscina y áreas verdes</li>
                <li>● Acceso zona de picnic</li>
                <li>● Terraza, parrilla y accesorios</li>
              </ul>
            </div>
          }
        />

        {/* Cabin Cards */}
        {cabins.map((cabin) => (
          <CabinCard key={cabin.id} cabin={cabin} />
        ))}
      </main>

      {/* Footer */}
      <Footer
        tagline="Vuelve a esos lugares donde fuiste feliz. Vuelve a Valle del Sol"
        contactEmail="contacto@valledelsolquillon.cl"
        socialLinks={socialLinks}
      />
    </div>
  );
}
