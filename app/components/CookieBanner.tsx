"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isAccepted = sessionStorage.getItem("cookiesAccepted");
    if (!isAccepted) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 z-50">
        <div className="bg-white text-gray-800 border border-gray-300 rounded-lg shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-slide-up">
          <div className="text-sm md:text-base leading-relaxed">
            Den här webbplatsen använder cookies för att förbättra användarupplevelsen.
          </div>
          <div className="flex gap-3 items-center">
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-blue-500 transition"
            >
              Godkänn
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Stäng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    )
  );
}
