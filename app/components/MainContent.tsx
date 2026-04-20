"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MainContent() {
  return (
    <section className="w-[90%] mx-auto my-20">

      <div className="
        relative 
        rounded-xl 
        bg-[#EEEBDD]/80 
        backdrop-blur-xl 
        shadow-[0_30px_80px_rgba(0,0,0,0.15)]
        px-6 py-10 md:px-14 md:py-16
      ">

        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#D6CFC7] rounded-full blur-3xl opacity-40" />

        <div className="grid md:grid-cols-2 gap-10 items-center">

        <div className="relative flex justify-start">

  {/* Stor bild */}
  <motion.div
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: -1 }}
      transition={{ duration: 0.8 }}
      className="
        relative 
        w-full max-w-[500px] 
        h-[220px] sm:h-[260px] md:h-[300px] 
        bg-white p-3 shadow-2xl
      "
    >
    <div className="relative w-full h-full">
      <Image
        src="/coffee.jpg"
        alt="Konstverk"
        fill
        className="object-cover"
      />
    </div>
  </motion.div>

  {/* Liten bild */}
  <motion.div
    initial={{ opacity: 0, y: 40, rotate: 6 }}
    whileInView={{ opacity: 1, y: 0, rotate: 3 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="
      absolute 
      -bottom-6 
      right-0 
      w-[55%] 
      h-[140px] sm:h-[160px] md:h-[180px] 
      bg-white p-2 shadow-2xl
      hidden sm:block
    "
  >
    <div className="relative w-full h-full">
      <Image
        src="/goldcookie.jpg"
        alt="Detalj"
        fill
        className="object-cover"
      />
    </div>
  </motion.div>
  </div>

        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <p className="text-xs tracking-[0.3em] text-gray-500">
              Digital Ateljé
            </p>

            <h2 className="text-3xl md:text-5xl font-serif text-[#1f160f] leading-tight">
              Art by Sandra
            </h2>

            <p className="italic text-gray-600">
              “Jag målar det som inte kan sägas – men kan kännas.”
            </p>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Mitt konstnärskap utforskar mötet mellan det intuitiva
                och det visuella. Lager av färg och struktur skapar
                berättelser som växer fram organiskt.
              </p>

              <p>
                Inspirerad av naturens rytm och stillhetens uttryck
                låter jag varje verk hitta sin egen form.
              </p>
            </div>

            <div className="text-sm text-gray-500 space-y-1">
              <p>Stockholm</p>
              <p>Akryl & blandteknik</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}