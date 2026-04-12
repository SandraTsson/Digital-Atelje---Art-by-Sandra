"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { PiPlayFill } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

type Artwork = {
  id: number;
  title: string;
  meta: string;
  src: string;
};

export default function DigitalShowRoom({
  artworks,
}: {
  artworks: Artwork[];
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  {/* Reset när öppnad */}
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (open) setIndex(0);
  }, [open]);

  {/* Lås scroll & keyboard */}
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight")
        setIndex((i) => (i + 1) % artworks.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + artworks.length) % artworks.length);
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, artworks.length]);

  {/* Autoplay */}
  useEffect(() => {
    if (!open || isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % artworks.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [open, isPaused, artworks.length]);

  const work = artworks[index];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] px-4 py-2 rounded-full border border-[#c8a96e] text-[#2a2420] hover:bg-[#2a2420] hover:text-white transition whitespace-nowrap"
      >
        <PiPlayFill size={14} className="translate-y-[1px]" />
        Vernissage
      </button>

      {/* Modal */}
      {open && (
  <div
    className="fixed inset-0 z-50 bg-[#1a1714]/90 flex items-center justify-center p-4"
    onClick={() => setOpen(false)}
  >
    <div
      className="relative w-full max-w-4xl bg-[#111] rounded-2xl overflow-hidden shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-4 right-4 z-20 text-white text-2xl opacity-70 hover:opacity-100"
        onClick={() => setOpen(false)}
      >
        ×
      </button>

      <div
        className="relative w-full aspect-[4/3] bg-black flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
      <AnimatePresence mode="wait">
        <motion.div
          key={work.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
        <Image
          src={work.src}
          alt={work.title}
          fill
          className="object-contain p-6"
        />
        </motion.div>
      </AnimatePresence>

        <button
          onClick={() =>
            setIndex((i) => (i - 1 + artworks.length) % artworks.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center text-white text-xl hover:bg-white/20 transition"
        >
          ‹
        </button>

        <button
          onClick={() =>
            setIndex((i) => (i + 1) % artworks.length)
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center text-white text-xl hover:bg-white/20 transition"
        >
          ›
        </button>
      </div>

      <div className="text-center text-white py-6 px-6 bg-[#111]">
        <h2 className="font-serif text-2xl">{work.title}</h2>
        <p className="text-sm opacity-60 mt-1">{work.meta}</p>
      </div>
    </div>
  </div>
)}
    </>
  );
}