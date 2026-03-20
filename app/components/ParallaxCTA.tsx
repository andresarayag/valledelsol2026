import Link from 'next/link';

interface ParallaxCTAProps {
  backgroundImage?: string;
  text: string;
  buttonText: string;
  buttonHref: string;
}

export default function ParallaxCTA({
  backgroundImage = 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/DSC01775-min-min.jpg',
  text,
  buttonText,
  buttonHref,
}: ParallaxCTAProps) {
  return (
    <section
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{text}</p>
        <Link
          href={buttonHref}
          className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
