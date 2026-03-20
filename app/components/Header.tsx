'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { name: "Inicio", href: "/" },
    { name: "Cabañas", href: "/cabanas" },
    { name: "Restaurante", href: "/restaurant" },
    { name: "Eventos", href: "/events" },
    { name: "Nosotros", href: "/about" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/">
          <Image
            src={
              scrolled
                ? "/images/logo/logo-naranjo.png"
                : "/images/logo/logo-blanco.png"
            }
            alt="Valle del Sol"
            width={100}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition ${
                scrolled
                  ? "text-gray-800 hover:text-orange-500"
                  : "text-white hover:text-orange-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* BOTON RESERVA */}
          <button className="px-5 py-2 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition">
            Reservar
          </button>

          {/* REDES */}
          <div className="flex items-center gap-3">
            <Link
              href="https://www.facebook.com/valledelsolquillon"
              target="_blank"
            >
              <Facebook
                size={18}
                className={scrolled ? "text-gray-700" : "text-white"}
              />
            </Link>

            <Link
              href="https://www.instagram.com/valledelsolquillon.cl/"
              target="_blank"
            >
              <Instagram
                size={18}
                className={scrolled ? "text-gray-700" : "text-white"}
              />
            </Link>
          </div>

          {/* TELEFONO */}
          <span
            className={`text-sm font-medium ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            +56 9 7670 5424
          </span>

        </div>

      </div>
    </header>
  );
}