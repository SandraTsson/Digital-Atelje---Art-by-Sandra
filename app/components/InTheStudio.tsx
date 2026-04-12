"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InTheStudio() {
  const itemVariants = {
    hidden: { opacity: 0, y: 40, rotate: -2 },
    show: { opacity: 1, y: 0, rotate: 0 },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      className="relative w-[90%] mx-auto my-10 md:my-16 bg-[#1e1a16] rounded-2xl shadow-xl p-5 sm:p-8 md:p-10"
    >

      <div className="flex items-baseline justify-between mb-6 md:mb-10">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#6a5e54] mb-1">
            Bakom kulisserna
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#e8e0d0] leading-none">
            Inuti <em className="italic text-[#c8a96e]">Ateljén</em>
          </h2>
        </div>
      </div>

      {/* Mobil */}
      <div className="md:hidden flex flex-col gap-3">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >

          {/* Stor bild */}
          <motion.div variants={itemVariants} className="relative w-full aspect-[4/3] bg-[#3a3028] rounded-sm overflow-hidden">
            <Image src="/captured.jpg" alt="I ateliern" fill className="object-cover" />
            <div className="absolute bottom-3 left-3 bg-[#f5f0e0] px-2.5 py-1.5 text-[11px] italic font-serif text-[#5a4a3a] leading-snug max-w-[160px] -rotate-1 shadow-lg">
              Fota färdigt verk till sociala medier & posters
            </div>
          </motion.div>

          {/* Scrollrad */}
          <div className="flex gap-3 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {[
              { src: "/paintbrush.jpg", alt: "Pågående verk", note: "Grönt är skönt!" },
              { src: "/closeup.jpg", alt: "Nästa serie", note: "Basen på plats" },
              { src: "/coffee.jpg", alt: "Paletten", note: null },
              { src: "/paintbrushes.jpg", alt: "Detalj", note: "Röran" },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative flex-shrink-0"
                style={{ width: "42vw" }}
              >
                <div className="relative w-full aspect-[4/3] bg-[#2e2820] rounded-sm overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </div>
                {img.note && (
                  <div className="mt-1.5 text-[10px] italic font-serif text-[#6a5e54]">
                    {img.note}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>

      {/* Desktop */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="hidden md:grid grid-cols-3 gap-4"
      >

        {/* Kolumn 1 */}
        <div className="flex flex-col gap-4">
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full aspect-[4/3] bg-[#2e2820] rounded-sm overflow-hidden">
              <Image src="/paintbrush.jpg" alt="Pågående verk" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-2.5 -right-2 bg-[#f5f0e0] px-2.5 py-1.5 text-[11px] italic font-serif text-[#5a4a3a] rotate-2 shadow-lg z-10">
              Grönt är skönt!
            </div>
          </motion.div>

          <motion.div variants={{ ...itemVariants, hidden: { ...itemVariants.hidden, rotate: 2 } }} className="relative">
            <div className="relative w-full aspect-[4/3] bg-[#342e26] rounded-sm overflow-hidden">
              <Image src="/closeup.jpg" alt="Nästa serie" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-2.5 -left-2 bg-[#f5f0e0] px-2.5 py-1.5 text-[11px] italic font-serif text-[#5a4a3a] -rotate-2 shadow-lg z-10">
              Basen på plats
            </div>
          </motion.div>
        </div>

        {/* Kolumn 2 */}
        <motion.div variants={itemVariants} className="relative">
          <div className="relative w-full h-full min-h-[400px] bg-[#3a3028] rounded-sm overflow-hidden">
            <Image src="/captured.jpg" alt="I ateliern" fill className="object-cover" />
          </div>
          <div className="absolute -top-2.5 -right-2 bg-[#f5f0e0] px-2.5 py-1.5 text-[11px] italic font-serif text-[#5a4a3a] -rotate-1 shadow-lg z-10">
            Fota färdigt verk till sociala medier & posters
          </div>
        </motion.div>

        {/* Kolumn 3 */}
        <div className="flex flex-col gap-4">
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full aspect-[4/3] bg-[#2a2418] rounded-sm overflow-hidden">
              <Image src="/coffee.jpg" alt="Paletten" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div variants={{ ...itemVariants, hidden: { ...itemVariants.hidden, rotate: 1 } }} className="relative">
            <div className="relative w-full aspect-[4/3] bg-[#302a20] rounded-sm overflow-hidden">
              <Image src="/paintbrushes.jpg" alt="Detalj" fill className="object-cover" />
            </div>
            <div className="absolute -top-2.5 -right-2 bg-[#f5f0e0] px-2.5 py-1.5 text-[11px] italic font-serif text-[#5a4a3a] rotate-1 shadow-lg z-10">
              Röran
            </div>
          </motion.div>
        </div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: false }}
        className="mt-6 md:mt-10 pt-5 md:pt-6 border-t border-[#2e2820] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <p className="text-sm text-[#7a6e64] font-light leading-relaxed max-w-md">
          Hemma i ateljén är mycket på gång. En perfekt röra kan man kalla det.
          Här kommer flera verk till liv, sakta men säkert.
        </p>
        <Link
          href="/Gallery"
          className="text-[11px] uppercase tracking-[0.18em] text-[#c8a96e] border-b border-[#c8a96e] pb-px hover:opacity-70 transition whitespace-nowrap"
        >
          Se färdiga verk →
        </Link>
      </motion.div>

    </motion.section>
  );
}