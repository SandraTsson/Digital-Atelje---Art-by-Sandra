"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, margin: "-100px" }}
      className="hidden md:flex relative w-[100%] bg-[#f5f1ea] rounded-2xl shadow-xl px-8 py-12 flex-col">


      <p className="text-xs uppercase tracking-[0.22em] text-[#38291b] mb-8">Hitta mig</p>

      <h2 className="font-serif text-3xl font-light text-[#38291b] leading-tight mb-2">
        Sandra <em>Turesson</em>
      </h2>
      <p className="text-sm text-[#8a7a6a] font-light leading-relaxed mb-8 max-w-xs">
        Konstnär baserad i Stockholm. Tillgänglig för beställningar och försäljning av originalverk.
      </p>

      <div className="h-px bg-[#d8d0c4] mb-6" />

      <p className="text-[10px] uppercase tracking-[0.2em] text-[#b8a898] mb-3">Kontaktuppgifter</p>
      <ul className="flex flex-col gap-2">
        {[
          { label: "artbysandra@mail.se", href: "mailto:sandratsson@gmail.com" },
          { label: "Stockholm, Sverige" },
          { label: "Svarar inom 2–3 dagar" },
        ].map(({ label, href }) => (
          <li key={label} className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e] flex-shrink-0" />
            {href
              ? <Link href={href} className="text-sm text-[#5a4a3a] hover:text-[#2a2420] transition">{label}</Link>
              : <span className="text-sm text-[#5a4a3a]">{label}</span>
            }
          </li>
        ))}
      </ul>

    </motion.section>
  );
}