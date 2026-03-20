import Image from 'next/image';
import { SocialLink } from './types';

interface FooterProps {
  logoUrl?: string;
  logoAlt?: string;
  tagline: string;
  contactEmail: string;
  socialLinks: SocialLink[];
}

export default function Footer({
  logoUrl = 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Blanco-e1723074296739.png',
  logoAlt = 'Valle del Sol Logo',
  tagline,
  contactEmail,
  socialLinks,
}: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div>
            <Image
              src={logoUrl}
              alt={logoAlt}
              width={107}
              height={107}
              className="mb-4"
            />
            <p className="text-gray-400">{tagline}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-gray-400">{contactEmail}</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-2xl"
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>Hecho con ❤️ por Valle del Sol</p>
        </div>
      </div>
    </footer>
  );
}
