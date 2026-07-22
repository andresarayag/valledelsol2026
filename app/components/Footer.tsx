'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTripadvisor, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white pt-16 pb-10 relative">

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* 🔥 COLUMNA 1 - LOGO */}
          <div>
            <Image
              src="https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Blanco-e1723074296739.png"
              alt="Valle del Sol"
              width={120}
              height={120}
              className="mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              Vuelve a esos lugares donde fuiste feliz, vuelve a Valle del Sol.
            </p>
          </div>

          {/* 🔥 COLUMNA 2 - CONTACTO */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>

            <p className="text-gray-400 mb-2">
              Km. 1,5 Camino a Cerro Negro, Parcela 51, Quillón
            </p>

            <a
              href="mailto:contacto@valledelsolquillon.cl"
              className="text-gray-400 hover:text-white transition"
            >
              contacto@valledelsolquillon.cl
            </a>
          </div>

          {/* 🔥 COLUMNA 3 - MENÚ */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menú</h3>

            <ul className="space-y-2 text-gray-400">
              <li><Link href="/cabanas" className="hover:text-white transition">Cabañas</Link></li>
              <li><Link href="/restaurante" className="hover:text-white transition">Restaurante</Link></li>
              <li><Link href="/matrimonios" className="hover:text-white transition">Matrimonios</Link></li>
              <li><Link href="/colegios" className="hover:text-white transition">Colegios</Link></li>
              <li><Link href="/empresas" className="hover:text-white transition">Empresas</Link></li>
              <li><Link href="/tour-operadores" className="hover:text-white transition">Tour Operadores</Link></li>
              <li><Link href="/nosotros" className="hover:text-white transition">Nosotros</Link></li>
            </ul>
          </div>

          {/* 🔥 COLUMNA 4 - REDES */}
          {/* 🔥 COLUMNA 4 - REDES */}
<div>
  <h3 className="text-lg font-semibold mb-4">Síguenos</h3>

  <div className="flex gap-4 text-xl mb-8">

    <a
      href="https://www.instagram.com/valledelsolquillon.cl/"
      target="_blank"
      className="text-gray-400 hover:text-white transition"
    >
      <FaInstagram />
    </a>

    <a
      href="https://www.facebook.com/valledelsolquillon"
      target="_blank"
      className="text-gray-400 hover:text-white transition"
    >
      <FaFacebookF />
    </a>

    <a
      href="https://www.tripadvisor.cl/Hotel_Review-g3732316-d7155218-Reviews-Centro_de_Eventos_Valle_del_Sol-Quillon_Biobio_Region.html"
      target="_blank"
      className="text-gray-400 hover:text-white transition"
    >
      <FaTripadvisor />
    </a>

    <a
      href="https://wa.me/56940588585"
      target="_blank"
      className="text-gray-400 hover:text-green-400 transition"
    >
      <FaWhatsapp />
    </a>

  </div>

  {/* SELLOS */}
  {/* SELLOS */}
<div className="mt-8 w-[204px]">

  <div className="grid grid-cols-2 gap-3 items-center">

    {/* Chile Sustentable */}
    <div className="flex justify-center hover:scale-105 transition duration-300">
      <Image
        src="/images/tour/iconos/sellochilesustentable.png"
        alt="Chile Sustentable"
        width={92}
        height={92}
        className="object-contain"
      />
    </div>

    {/* Sernatur */}
    <div className="flex justify-center hover:scale-105 transition duration-300">
      <Image
        src="/images/tour/iconos/sellosernatur.png"
        alt="Sernatur"
        width={92}
        height={92}
        className="object-contain"
      />
    </div>

    {/* ChileCompra */}
    <div className="col-span-2 bg-white rounded-xl shadow-lg flex items-center justify-center py-2 hover:scale-105 transition duration-300">
      <Image
        src="/images/tour/iconos/spemundohosting.webp"
        alt="Proveedor del Estado y ChileCompra"
        width={170}
        height={46}
        className="object-contain"
      />
    </div>

  </div>

</div>

</div>

        </div>

        {/* 🔥 COPYRIGHT */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          Todos los derechos reservados 2026. Hecho con ❤️ por Valle del Sol
        </div>

      </footer>

      {/* 🔥 BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/56940588585"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative flex items-center">

          {/* TEXTO HOVER */}
          <span className="absolute right-16 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 bg-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Cotiza por WhatsApp
          </span>

          {/* BOTÓN */}
          <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 transition-all duration-300 animate-heartbeat">
            <FaWhatsapp className="text-white text-2xl" />
          </div>

        </div>
      </a>

      {/* 🔥 ANIMACIÓN HEARTBEAT */}
      <style jsx>{`
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.08);
          }
          40% {
            transform: scale(1);
          }
          60% {
            transform: scale(1.12);
          }
        }

        .animate-heartbeat {
          animation: heartbeat 2s infinite;
        }
      `}</style>

    </>
  );
}