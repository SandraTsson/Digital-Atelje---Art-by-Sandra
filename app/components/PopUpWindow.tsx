"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PopUpWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const hasTriggered = useRef(false); 

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("newsletter-seen");
    if (hasSeen) return;

    const triggerPopup = () => {
      if (hasTriggered.current) return; 
      hasTriggered.current = true;

      setIsOpen(true);
      sessionStorage.setItem("newsletter-seen", "true");

      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };

    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight;

      if (scrollPercent > 0.4) {
        triggerPopup();
      }
    };

    window.addEventListener("scroll", handleScroll);

    {/* Visa efter 6sek */}
    const timer = setTimeout(() => {
      triggerPopup();
    }, 6000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  {/* Lås scroll */}
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("newsletter-seen", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="relative bg-[#F8F7F4] rounded-sm shadow-[0_25px_60px_rgba(0,0,0,0.25)] max-w-md w-full p-8 text-center border border-[#e5ded3]">

              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#e8e2d6] opacity-70 rotate-[-6deg]" />

              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-gray-400 hover:text-black text-lg"
              >
                ✕
              </button>

              <span className="font-serif text-xl text-[#b8a898] italic block mb-2">
                ✦
              </span>

              <h2 className="text-2xl sm:text-3xl font-serif mb-4">
                Från ateljén
              </h2>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Få uppdateringar om nya verk, utställningar och processen bakom konsten.
              </p>

              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Din e-postadress"
                  className="bg-white border border-[#d8d0c4] px-4 py-3 rounded-sm text-sm outline-none focus:border-[#8a7a6a]"
                />

                <button
                  type="submit"
                  className="bg-[#2a2420] text-[#f5f1ea] py-3 text-xs uppercase tracking-[0.25em] hover:opacity-80 transition rounded-sm"
                >
                  Prenumerera
                </button>
              </form>

              <p className="text-xs text-gray-400 mt-4 italic">
                Inga utskick utan mening.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}