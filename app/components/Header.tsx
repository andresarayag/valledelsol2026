'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Menu,
  Phone,
  ShoppingBag,
  X,
} from 'lucide-react';

import { useAlohaBooking } from './AlohaBookingProvider';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /*
   * ALOHA
   */
  const { isReady, openBooking } = useAlohaBooking();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const menu = [
    { name: 'Cabañas', href: '/cabanas' },
    { name: 'Restaurante', href: '/restaurante' },
    { name: 'Matrimonios', href: '/matrimonios' },
    { name: 'Colegios', href: '/colegios' },
    { name: 'Empresas', href: '/empresas' },
    { name: 'Tour Operadores', href: '/touroperadores' },
    { name: 'Nosotros', href: '/about' },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  /*
   * ABRIR RESERVAS ALOHA
   */
  const handleReservation = () => {
    closeMobileMenu();

    openBooking();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md'
            : 'bg-black/25 backdrop-blur-md'
        }`}
      >
        <div className="w-full max-w-[1500px] 2xl:max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-8 h-20 lg:h-24 flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="relative z-50 flex-shrink-0"
            aria-label="Ir al inicio"
          >
            <Image
              src={
                scrolled
                  ? '/images/logo/logo-naranjo.png'
                  : '/images/logo/logo-blanco.png'
              }
              alt="Valle del Sol"
              width={100}
              height={70}
              priority
              className="w-[82px] lg:w-[100px] h-auto object-contain"
            />
          </Link>


          {/* MENÚ ESCRITORIO */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-5 text-[13px] xl:text-sm font-medium">

            {menu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative whitespace-nowrap transition-colors duration-300 ${
                  scrolled
                    ? 'text-gray-800 hover:text-[#FBB03B]'
                    : 'text-white hover:text-[#FBB03B]'
                }`}
              >
                {item.name}

                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#FBB03B] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

          </nav>


          {/* LADO DERECHO ESCRITORIO */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5 ml-4 xl:ml-6">

            {/* TIENDA */}
            <Link
              href="https://store.aloha.co/valledelsolquillon"
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 ${
                scrolled
                  ? 'text-gray-800 hover:text-[#FBB03B]'
                  : 'text-white hover:text-[#FBB03B]'
              }`}
            >
              <ShoppingBag
                size={19}
                strokeWidth={2}
                className="text-[#FBB03B] transition-transform duration-300 group-hover:scale-110"
              />

              <span>Tienda</span>
            </Link>


            {/* RESERVAR - ALOHA */}
            <button
              type="button"
              onClick={handleReservation}
              disabled={!isReady}
              className="
                inline-flex
                items-center
                justify-center
                px-5
                py-2.5
                rounded-full
                bg-[#FBB03B]
                text-black
                font-semibold
                shadow-md
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-xl
                disabled:opacity-70
                disabled:cursor-wait
              "
            >
              Reservar
            </button>


            {/* REDES */}
            <div className="flex items-center gap-3">

              <Link
                href="https://www.facebook.com/valledelsolquillon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Valle del Sol"
                className="transition-transform duration-300 hover:scale-110"
              >
                <Facebook
                  size={18}
                  className={
                    scrolled
                      ? 'text-gray-700 hover:text-[#FBB03B]'
                      : 'text-white hover:text-[#FBB03B]'
                  }
                />
              </Link>

              <Link
                href="https://www.instagram.com/valledelsolquillon.cl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Valle del Sol"
                className="transition-transform duration-300 hover:scale-110"
              >
                <Instagram
                  size={18}
                  className={
                    scrolled
                      ? 'text-gray-700 hover:text-[#FBB03B]'
                      : 'text-white hover:text-[#FBB03B]'
                  }
                />
              </Link>

            </div>


            {/* TELÉFONO */}
            <a
              href="tel:+56940588585"
              className={`whitespace-nowrap text-sm font-medium transition-colors duration-300 hover:text-[#FBB03B] ${
                scrolled
                  ? 'text-gray-800'
                  : 'text-white'
              }`}
            >
              +56 9 4058 8585
            </a>

          </div>


          {/* CONTROLES MÓVILES */}
          <div className="flex lg:hidden items-center gap-3">

            {/* RESERVAR MÓVIL SUPERIOR */}
            <button
              type="button"
              onClick={handleReservation}
              disabled={!isReady}
              className="
                hidden
                sm:inline-flex
                items-center
                justify-center
                px-4
                py-2
                rounded-full
                bg-[#FBB03B]
                text-black
                text-sm
                font-semibold
                shadow-md
                transition-all
                duration-300
                hover:scale-105
                disabled:opacity-70
                disabled:cursor-wait
              "
            >
              Reservar
            </button>


            {/* BOTÓN MENÚ */}
            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen((prev) => !prev)
              }
              aria-label={
                mobileMenuOpen
                  ? 'Cerrar menú'
                  : 'Abrir menú'
              }
              aria-expanded={mobileMenuOpen}
              className={`relative z-50 w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${
                scrolled || mobileMenuOpen
                  ? 'border-gray-200 bg-white text-gray-900 shadow-md'
                  : 'border-white/40 bg-black/20 text-white backdrop-blur-md'
              }`}
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>

        </div>
      </header>


      {/* FONDO OSCURO MÓVIL */}
      <button
        type="button"
        aria-label="Cerrar menú"
        onClick={closeMobileMenu}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      />


      {/* MENÚ LATERAL MÓVIL */}
      <aside
        className={`fixed top-0 right-0 z-40 h-screen w-[88%] max-w-sm bg-black text-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          mobileMenuOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col px-7 pt-28 pb-8 overflow-y-auto">

          {/* MENÚ PRINCIPAL */}
          <nav className="flex flex-col">

            {menu.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className="
                  py-4
                  border-b
                  border-white/10
                  text-lg
                  font-medium
                  text-white/90
                  transition-all
                  duration-300
                  hover:text-[#FBB03B]
                  hover:pl-2
                "
                style={{
                  transitionDelay: mobileMenuOpen
                    ? `${index * 35}ms`
                    : '0ms',
                }}
              >
                {item.name}
              </Link>
            ))}

          </nav>


          {/* TIENDA + RESERVAR */}
          <div className="mt-8 space-y-3">

            {/* TIENDA */}
            <Link
              href="https://store.aloha.co/valledelsolquillon"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-[#FBB03B]/50
                px-6
                py-4
                text-[#FBB03B]
                font-semibold
                transition-all
                duration-300
                hover:bg-[#FBB03B]
                hover:text-black
                hover:scale-[1.02]
              "
            >
              <ShoppingBag size={20} />
              Tienda
            </Link>


            {/* RESERVAR ALOHA */}
            <button
              type="button"
              onClick={handleReservation}
              disabled={!isReady}
              className="
                flex
                w-full
                items-center
                justify-center
                rounded-full
                bg-[#FBB03B]
                px-6
                py-4
                text-black
                font-semibold
                shadow-xl
                transition-all
                duration-300
                hover:scale-[1.02]
                disabled:opacity-70
                disabled:cursor-wait
              "
            >
              Reservar
            </button>

          </div>


          {/* CONTACTO + REDES */}
          <div className="mt-auto pt-10">

            <a
              href="tel:+56940588585"
              className="
                flex
                items-center
                gap-3
                text-white/80
                hover:text-[#FBB03B]
                transition-colors
              "
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Phone size={18} />
              </div>

              <span className="font-medium">
                +56 9 4058 8585
              </span>
            </a>


            <div className="flex items-center gap-4 mt-7">

              <Link
                href="https://www.facebook.com/valledelsolquillon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Valle del Sol"
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/15
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  text-white/80
                  transition-all
                  duration-300
                  hover:bg-[#FBB03B]
                  hover:text-black
                  hover:scale-110
                "
              >
                <Facebook size={19} />
              </Link>

              <Link
                href="https://www.instagram.com/valledelsolquillon.cl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Valle del Sol"
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/15
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  text-white/80
                  transition-all
                  duration-300
                  hover:bg-[#FBB03B]
                  hover:text-black
                  hover:scale-110
                "
              >
                <Instagram size={19} />
              </Link>

            </div>

          </div>

        </div>
      </aside>
    </>
  );
}