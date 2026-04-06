'use client';

import Header from './Header';
import Footer from './Footer';
import PageHeader from './PageHeader';
import HeroSection from './HeroSection';
import CabinCard from './CabinCard'; // 👈 IMPORT DIRECTO

interface Feature {
  text: string;
}

interface CardItem {
  id: string;
  title: string;
  description: string;
  [key: string]: any; // 👈 permite pasar todos los datos del cabin sin error
}

interface PageTemplateProps {
  title: string;
  heroTitle: string;
  heroDescription: string;
  features?: Feature[];
  cards?: CardItem[];
}

export default function PageTemplate({
  title,
  heroTitle,
  heroDescription,
  features = [],
  cards = [],
}: PageTemplateProps) {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        {/* HEADER */}
        <PageHeader title={title} />

        {/* HERO */}
        <HeroSection title={heroTitle} description={heroDescription} />

        {/* FEATURES */}
        {features.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-6 text-center">

              <h2 className="text-3xl md:text-4xl font-semibold mb-10">
                Todo lo que incluye tu experiencia
              </h2>

              <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
                {features.map((feature, index) => (
                  <p key={index}>✔ {feature.text}</p>
                ))}
              </div>

            </div>
          </section>
        )}

        {/* CARDS */}
        {cards.length > 0 && (
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">

              <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
                Elige tu experiencia
              </h2>

              {/* 👇 USO DIRECTO DE CABINCARD (SIN PROPS RAROS) */}
              {cards.map((item) => (
                <CabinCard key={item.id} cabin={item} />
              ))}

            </div>
          </section>
        )}

      </main>

      <Footer
        tagline="Vuelve a esos lugares donde fuiste feliz. Vuelve a Valle del Sol"
        contactEmail="contacto@valledelsolquillon.cl"
        socialLinks={[]}
      />
    </div>
  );
}