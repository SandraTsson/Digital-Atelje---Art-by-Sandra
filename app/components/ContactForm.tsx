"use client";
import { useState, useEffect } from "react";
import { PiPaintBrush } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  {/* Visa modal efter reload */}
  useEffect(() => {
    const sent = sessionStorage.getItem("mailSent");

    if (sent === "true") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowSuccess(true);
      sessionStorage.removeItem("mailSent");

      {/* Auto stäng */}
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  }, []);

  return (
    <>
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, margin: "-100px" }}
        className="relative w-[100%] mx-auto bg-[#f5f1ea] rounded-2xl shadow-xl px-5 sm:px-10 py-10 sm:py-14 scroll-mt-28 text-center"
      >
        <span className="font-serif text-2xl text-[#b8a898] italic block mb-3">✦</span>

        <div className="inline-flex items-center justify-center gap-2 mb-4">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light leading-tight">
            Låt oss <em>höras</em>
          </h2>
          <PiPaintBrush className="text-[#8a7a6a]" size={28} />
        </div>

        <p className="text-sm text-[#8a7a6a] leading-relaxed font-light max-w-sm mx-auto mb-8 sm:mb-10">
          Är du nyfiken på ett verk eller vill du diskutera ett samarbete? Fyll i formuläret så återkommer jag.
        </p>

        {/* refresha formuläret */}
        <form
          action="#"
          method="GET"
          onSubmit={() => {
            sessionStorage.setItem("mailSent", "true");
          }}
          className="w-full max-w-sm sm:max-w-[70%] mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Ditt namn"
            required
            className="bg-white border border-[#d8d0c4] rounded-sm px-4 py-3 text-sm"
          />

          <input
            type="email"
            placeholder="Din e-postadress"
            required
            className="bg-white border border-[#d8d0c4] rounded-sm px-4 py-3 text-sm"
          />

          <textarea
            placeholder="Ditt meddelande..."
            rows={4}
            required
            className="bg-white border border-[#d8d0c4] rounded-sm px-4 py-3 text-sm resize-none"
          />

          <button
            type="submit"
            className="w-full py-3.5 sm:py-4 bg-[#2a2420] text-[#f5f1ea] text-xs uppercase tracking-[0.25em] hover:opacity-75 transition rounded-sm"
          >
            Skicka
          </button>
        </form>

        <span className="font-serif text-2xl text-[#b8a898] italic block mt-8">✦</span>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#f5f1ea] px-10 py-8 rounded-2xl shadow-2xl text-center max-w-sm mx-4"
            >
              <p className="font-serif text-2xl mb-3">✦</p>

              <h3 className="text-xl text-[#2a2420] mb-2">
                Mail skickat
              </h3>

              <p className="text-sm text-[#8a7a6a]">
                Tack för ditt meddelande – jag återkommer snart.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}