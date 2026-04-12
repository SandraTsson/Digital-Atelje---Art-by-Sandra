"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Hem", href: "/" },
    { name: "Om Konstnären", href: "/#about" },
    { name: "Kontakt", href: "/#contact" },
    { name: "Galleri", href: "/Gallery" },
  ];

  return (
    <>
      <AnimatePresence>
        {!scrolled && (
          <motion.header
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-6 left-0 w-full z-50 flex justify-center px-4"
          >
            <div className="relative w-full max-w-6xl">

              <div className="absolute -top-6 -left-10 w-32 h-32 bg-[#E8E2D6] rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-6 -right-10 w-32 h-32 bg-[#D6CFC7] rounded-full blur-3xl opacity-60" />

              <nav className="relative flex items-center justify-between px-8 py-5 
                bg-[#EEEBDD]/85 backdrop-blur-xl 
                rounded-[2.5rem] shadow-[0_25px_70px_rgba(0,0,0,0.18)]">

                <Link href="/" className="relative text-2xl md:text-3xl font-serif tracking-wide text-gray-900">
                  Art By Sandra

                  <span className="absolute -bottom-2 left-0 w-16 h-[4px] bg-[#A79277] rounded-full rotate-[-2deg]" />
                </Link>

                {/* Desktop */}
                <ul className="hidden md:flex items-center gap-12 text-base tracking-wide text-gray-700">
                  {links.map((link, i) => (
                    <li key={i} className="relative group">
                      <Link href={link.href} className="relative z-10">
                        {link.name}
                      </Link>

                      <span className="
                        absolute inset-0 
                        bg-[#EEEBDD] 
                        rounded-full 
                        scale-0 group-hover:scale-100 
                        transition-transform duration-300 
                        -z-0
                      " />
                    </li>
                  ))}
                </ul>

                {/* Mobil */}
                <button
                  onClick={() => setOpen(!open)}
                  className="md:hidden flex flex-col gap-1"
                >
                  <span className="w-7 h-[2px] bg-gray-800"></span>
                  <span className="w-5 h-[2px] bg-gray-800"></span>
                </button>
              </nav>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Hamburgarmeny vid scroll */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40, y: -40 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-5 right-2 z-50"
          >
            <button
              onClick={() => setOpen(!open)}
              className="
                w-14 h-14 
                rounded-full 
                bg-[#EEEBDD]/90 backdrop-blur-xl 
                shadow-xl 
                flex items-center justify-center
              "
            >
              <div className="flex flex-col gap-1">
                <span className="w-6 h-[2px] bg-gray-800"></span>
                <span className="w-4 h-[2px] bg-gray-800"></span>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-24 right-5 z-50 bg-[#F8F7F4]/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8"
          >
            <ul className="flex flex-col gap-8 text-lg text-gray-800">
              {links.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}