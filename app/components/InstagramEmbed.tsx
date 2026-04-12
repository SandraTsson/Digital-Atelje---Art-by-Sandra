"use client";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { PiInstagramLogo } from "react-icons/pi";
import { motion } from "framer-motion";

type InstagramSectionProps = {
  permalink: string;
};

export default function InstagramEmbed({ permalink }: InstagramSectionProps) {
  return (
    <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  viewport={{ once: false, margin: "-100px" }}
  className="relative w-[90%] mx-auto my-10 md:my-16 bg-[#F8F7F4] rounded-lg shadow-xl px-5 sm:px-8 md:px-6 py-5"
>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div>
          <span className="uppercase tracking-widest text-xs sm:text-sm text-gray-500">
            Instagram
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-4 md:mt-6 leading-tight">
            Följ processen
            <br />
            bakom verken
          </h2>

          <p className="mt-5 md:mt-8 text-base md:text-lg text-gray-600 leading-relaxed">
            Här delar jag arbetet i ateljén, detaljer från pågående verk
            och glimtar från utställningar. Följ med bakom kulisserna
            och ta del av det som inte alltid syns i galleriet.
          </p>

          <div className="hidden sm:flex mt-8 md:mt-10 flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="https://www.instagram.com/art.by.sandrat/"
              target="_blank"
              className="px-8 py-4 bg-[#8E806A] text-white rounded-full text-sm tracking-wide hover:bg-gray-800 transition"
            >
              Besök Instagram
            </Link>
            <Link
              href="/gallery"
              className="text-sm underline underline-offset-4 hover:opacity-70 transition"
            >
              Se senaste verk
            </Link>
          </div>

          {/* Mobilbild */}
<div className="md:hidden">
  <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-xl">
    <Image
      src="/pinkswan.jpg" 
      alt="Instagram preview"
      fill
      className="object-cover"
    />
  </div>
</div>

          {/* Mobilknapp */}
          <Link
            href="https://www.instagram.com/art.by.sandrat/"
            target="_blank"
            className="md:hidden mt-8 flex items-center gap-3 w-full justify-center py-4 bg-white rounded-2xl shadow border border-gray-100 hover:shadow-md transition"
          >
            <PiInstagramLogo size={24} className="text-[#8E806A]" />
            <span className="text-sm font-medium text-gray-700">Följ på Instagram</span>
          </Link>
        </div>
        

        {/* Instagram embed – dold på mobil */}
        <div className="hidden md:flex justify-end bg-white p-8 rounded-2xl shadow-2xl">
          <blockquote
            className="instagram-media max-w-xl w-full"
            data-instgrm-permalink={permalink}
            data-instgrm-version="14"
          />
        </div>

      </div>

      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </motion.section>
  );
}