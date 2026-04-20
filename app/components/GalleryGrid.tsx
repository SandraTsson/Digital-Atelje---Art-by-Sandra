"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import DigitalShowRoom from "./DigitalShowRoom";
import { motion } from "framer-motion";

const artworks = [
  { id: 1, title: "Pink Swan", meta: "Akryl på duk · 2022", description: "Ett verk om det som inte går att sätta ord på. Lager på lager av bränd sienna och djupblå skapar ett landskap av känsla snarare än form.", size: "120 × 90 cm", technique: "Akryl på duk", year: "2022", src: "/pinkswan.jpg", available: false },
  { id: 2, title: "Coffee", meta: "Akryl · 2022", description: "Närvaro utforskar ögonblicket av fullständig uppmärksamhet – när allt annat försvinner och bara detta kvarstår.", size: "80 × 80 cm", technique: "Akryl på duk", year: "2022", src: "/coffee.jpg", available: false },
  { id: 3, title: "Dirtroad", meta: "Akryl på duk · 2023", description: "Byggt av fragment, minnen och material som hittats. Ett arkiv av det som annars skulle glömmas bort.", size: "60 × 45 cm", technique: "Akryl på duk", year: "2023", src: "/dirtroad.jpg", available: false },
  { id: 4, title: "Goldcookie", meta: "Poster · 2023", description: "En hyllning till stillheten. De vardagliga tingen målade med samma vördnad som om de vore heliga.", size: "100 × 70 cm", technique: "Poster", year: "2023", src: "/goldcookie.jpg", available: true },
  { id: 5, title: "Wolf", meta: "Akryl på duk · 2023", description: "Rörelsen fångad i ett ögonblick av stillhet. Penseldragen bär hastighet även när duken är stilla.", size: "80 × 160 cm", technique: "Akryl på duk", year: "2023", src: "/wolf.jpg", available: true },
  { id: 6, title: "Cosmic Swirl", meta: "Akryl på duk · 2022", description: "En nedstigning i det okända. Vad finns under ytan när man slutar hålla emot?", size: "90 × 120 cm", technique: "Akryl på duk", year: "2022", src: "/cosmicswirl.jpg", available: true },
  { id: 7, title: "Oreo", meta: "Akryl · 2022", description: "Närvaro utforskar ögonblicket av fullständig uppmärksamhet – när allt annat försvinner och bara detta kvarstår.", size: "80 × 80 cm", technique: "Akryl på duk", year: "2022", src: "/oreo.jpg", available: true },
  { id: 8, title: "Copy 1", meta: "Poster · 2023", description: "En hyllning till stillheten. De vardagliga tingen målade med samma vördnad som om de vore heliga.", size: "100 × 70 cm", technique: "Poster", year: "2023", src: "/goldcookie.jpg", available: false },
  { id: 9, title: "Copy 2", meta: "Akryl på duk · 2022", description: "En nedstigning i det okända. Vad finns under ytan när man slutar hålla emot?", size: "90 × 120 cm", technique: "Akryl på duk", year: "2022", src: "/coffee.jpg", available: true },
];

type Artwork = (typeof artworks)[0];

function Modal({ work, onClose }: { work: Artwork; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-[#1a1714]/85"
      onClick={onClose}
    >
      <div
        className="relative bg-[#faf8f4] rounded-xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
       
        <div className="relative w-full md:w-[55%] aspect-[3/4] md:aspect-auto bg-[#ddd8ce] flex-shrink-0">
          <Image
            src={work.src}
            alt={work.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-between p-8 md:p-10 flex-1">
          <div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#b8a898] hover:text-[#2a2420] transition text-xl"
            >
              ×
            </button>

            <p className="text-[10px] uppercase tracking-[0.25em] text-[#b8a898] mb-4">
              {work.year} — {String(work.id).padStart(2, "0")}
            </p>

            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#2a2420] leading-tight mb-1">
              {work.title}
            </h2>

            <div className="w-8 h-px bg-[#c8a96e] my-5" />

            <p className="text-sm text-[#6a5a50] leading-relaxed font-light mb-8">
              {work.description}
            </p>

            <div className="flex flex-col gap-3">
              {[
                { label: "Teknik", value: work.technique },
                { label: "Mått", value: work.size },
                { label: "År", value: work.year },
                { label: "Status", value: work.available ? "Tillgänglig" : "Såld" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-baseline border-b border-[#e8e2d8] pb-2">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#b8a898]">{label}</span>
                  <span className={`text-sm ${value === "Tillgänglig" ? "text-[#7a9e7e]" : value === "Såld" ? "text-[#b8a898]" : "text-[#2a2420]"}`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {work.available && (
            <button className="mt-8 w-full py-3.5 bg-[#2a2420] text-[#f5f0e8] text-[11px] uppercase tracking-[0.2em] hover:opacity-75 transition rounded-sm">
              Kontakta för köp
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<"alla" | "tillgängliga">("alla");
  const [selected, setSelected] = useState<Artwork | null>(null);

  const filtered = activeFilter === "tillgängliga"
    ? artworks.filter((a) => a.available)
    : artworks;

  return (
    <>
    <div className="bg-[##f7f6f0] min-h-screen">
      <motion.section
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="w-[90%] mx-auto py-16 pt-35 bg-[##f7f6f0]"
>

  <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 pb-6 border-b border-[#e0d8ce] gap-6">
  
  
  <div className="flex items-end gap-4 flex-wrap">
    <div>
      <p className="text-[10px] uppercase tracking-[0.25em] text-[#b8a898] mb-1">
        Galleri & arkiv
      </p>

      <h1 className="font-serif text-5xl font-light text-[#2a2420]">
        Alla <em className="italic text-[#8a7a6a]">verk</em>
      </h1>
    </div>

    {/* Vernissage knapp */}
    <div className="mb-1">
      <DigitalShowRoom artworks={filtered} />
    </div>
  </div>

  {/* Filter */}
  <div className="flex gap-2">
    {(["alla", "tillgängliga"] as const).map((f) => (
      <button
        key={f}
        onClick={() => setActiveFilter(f)}
        className={`text-[11px] uppercase tracking-[0.15em] px-4 py-2 rounded-full border ${
          activeFilter === f
            ? "bg-[#2a2420] text-[#f5f0e8]"
            : "text-[#8a7a6a] border-[#d8d0c4]"
        }`}
      >
        {f}
      </button>
    ))}
  </div>
</div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((work) => (
            <div
              key={work.id}
              className="group cursor-pointer"
              onClick={() => setSelected(work)}
            >
              <div className="relative w-full aspect-[3/4] bg-[#ddd8ce] overflow-hidden rounded-sm">
                <Image
                  src={work.src}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {work.available && (
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.15em] bg-[#f5f0e8]/90 text-[#5a4a3a] px-2.5 py-1">
                    Tillgänglig
                  </span>
                )}
              </div>
              <div className="mt-3">
                <p className="font-serif text-lg text-[#2a2420]">{work.title}</p>
                <p className="text-[11px] text-[#b8a898] tracking-wide mt-0.5">{work.meta}</p>
              </div>
            </div>
          ))}
        </div>

      </motion.section>

      {/* Modal */}
      {selected && (
        <Modal work={selected} onClose={() => setSelected(null)} />
      )}
      </div>
    </>
  );
}