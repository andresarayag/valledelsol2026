import Header from '../components/Header'; 
import Hero from '../components/Hero';
import HighlightsCarousel from '../components/HighlightsCarousel';
import LocationSection from '../components/LocationSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Booking from '../components/Booking';
import Experiences from '../components/Experiences';
import GalleryFilter from '../components/GalleryFilter';
import { FeatureBlock, SocialLink } from '../components/types';

// Data configuration

const mainFeatures: FeatureBlock[] = [
  {
    title: 'Nuestras Cabañas',
    subtitle: 'Escápate a la Serenidad',
    href: '/cabanas',
  },
  {
    title: 'Nosotros',
    subtitle: 'Espacios que Inspiran',
    href: '/about',
  },
  {
    title: 'Restaurante',
    subtitle: 'Sabores que Enamoran',
    href: '/restaurant',
  },
];

const eventFeatures: FeatureBlock[] = [
  {
    title: 'Matrimonios',
    subtitle: 'Tu Historia de Amor',
    href: '/events/matrimonios',
  },
  {
    title: 'Eventos Corporativos',
    subtitle: 'Eventos que Conectan',
    href: '/events/corporativos',
  },
  {
    title: 'Actividades Escolares',
    subtitle: 'Aventuras Inolvidables',
    href: '/events/paseos',
  },
];

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
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        
        {/* Hero */}
        <Hero
          staticText="Descubre en Valle del Sol"
          animatedWords={[
            "Relajación",
            "Naturaleza",
            "Hospitalidad"
          ]}
        />
        <HighlightsCarousel />

        {/* Booking */}
        <Booking />

        {/* Experiences */}
        <Experiences />

        <GalleryFilter />
        
        {/* Contact */}
        <ContactSection />

        {/* Location */}
        <LocationSection />


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