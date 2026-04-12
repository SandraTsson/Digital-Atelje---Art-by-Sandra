"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutBio() {
  return (
    <section
      id="about"
      className="relative w-[90%] mx-auto my-10 sm:my-14 px-2 sm:px-6 md:px-10 py-6 sm:py-8 scroll-mt-18 bg-[#F8F7F4] rounded-xl shadow-lg"
    >
      <div className="max-w-6xl mx-auto bg-[#EEEBDD]/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] p-5 sm:p-8 lg:p-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, margin: "-100px" }}
            className="relative h-[340px] sm:h-[420px] md:h-[440px] lg:h-[480px] flex justify-center lg:justify-start"
          >

            {/* Bakre bild */}
            <div className="hidden sm:block absolute 
              top-2 sm:top-0 lg:-top-6 
              left-1/2 lg:left-16 
              -translate-x-1/2 lg:translate-x-0
              bg-white p-3 sm:p-4 pb-8 sm:pb-12 shadow-2xl 
              rotate-[4deg] sm:rotate-[6deg] lg:rotate-[8deg] z-10">
              <div className="relative w-[180px] sm:w-[240px] md:w-[280px] h-[220px] sm:h-[300px] md:h-[350px]">
                <Image
                  src="/coffee.jpg"
                  alt="Konstverk"
                  fill
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 240px, 280px"
                  className="object-cover"
                />
              </div>
              <p className="text-center text-[10px] sm:text-xs mt-2 sm:mt-3 italic text-gray-600">
                Untitled, 2023
              </p>
            </div>

            {/* Främre bild */}
            <div className="relative 
              mx-auto lg:mx-0
              bg-white p-3 sm:p-4 pb-10 sm:pb-14 
              shadow-2xl rotate-[-1deg] sm:rotate-[-2deg] z-20">

              {/* Tejp */}
              <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-5 sm:h-6 bg-[#E8E2D6] opacity-70 rotate-[-6deg]" />

              <div className="relative w-[200px] sm:w-[260px] md:w-[300px] h-[240px] sm:h-[320px] md:h-[380px]">
                <Image
                  src="/Konstnär.jpg"
                  alt="Konstnären"
                  fill
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 260px, 300px"
                  className="object-cover"
                />
              </div>

              <p className="text-center text-xs sm:text-sm mt-3 sm:mt-4 italic text-gray-600">
                Sandra Turesson
              </p>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-3 sm:mb-4">
              Vem är konstnären?
            </h2>

            <div className="w-16 sm:w-20 h-px bg-gray-400 mb-4 sm:mb-6" />

            <p className="italic text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
              “Jag målar det som inte kan sägas – men kan kännas.”
            </p>

            <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                Jag växte upp med en målarpensel i handen och flödande kreatitivet. Att skapa har 
                alltid kommit naturligt för mig. Det började med avbildningar av djur, ofta hästar, men kom
                att växa till mer än så. Och idag är jag frilansande konstnär.
              </p>

              <p>
                Med åren upptäckte jag spänningen i det abstrakta. Friheten och att måla utan begränsningar.
                Hur dessa tavlor blir så levande även om de inte är föreställande. Och hur fint de gör sig som 
                en del av hemmets inredning. Där började jag exprimentera med kombinationen av förestållande och abstrakt, 
                och mitt id växte fram.
              </p>
            </div>

            <div className="mt-6 sm:mt-10 text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-2">
              <p>Bas: Stockholm</p>
              <p>Medium: Akryl & blandteknik</p>
              <p>Verksam sedan: 2020</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
