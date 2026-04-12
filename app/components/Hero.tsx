"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="h-screen flex items-center justify-center">

      {/* Svart overlay */}
      <div className="fixed inset-0 bg-black/40 -z-10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative text-center text-white px-6 max-w-2xl"
      >
        <motion.h1
          variants={item}
          className="text-4xl mt-35 md:text-6xl font-serif mb-6 leading-tight"
        >
          En plats för färg,<br /> känsla & kreativitet
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-white/90 mb-8"
        >
          Utforska originalverk direkt från ateljén.
        </motion.p>

        <motion.div variants={item}>
          <Link href="/gallery">
            <button className="inline-block bg-white text-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#EEEBDD] rounded-full transition">
              Se tillgängliga verk
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
