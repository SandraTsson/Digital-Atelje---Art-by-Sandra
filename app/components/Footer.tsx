import { Instagram, Mail, Palette } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#1e1a16] text-neutral-300 overflow-hidden">
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[500px] h-[500px] bg-[#c8a96e] rounded-full blur-3xl top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-[#c8a96e] rounded-full blur-3xl bottom-[-100px] right-[-100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        
        <div className="space-y-4 text-center flex flex-col items-center">
          <h2 className="text-2xl font-semibold tracking-wide text-white">
            Art By Sandra
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            En plats för färg, känsla och kreativitet <br></br>
            Sedan 2020

          </p>
        </div>

        <div className="space-y-4 text-center flex flex-col items-center">
          <h3 className="text-sm uppercase tracking-widest text-neutral-500">
            Navigate
          </h3>
          <ul className="space-y-2 text-sm">
  {[
    { name: "Galleri", href: "/Gallery" },
    { name: "Om", href: "/#about" },
    { name: "Kontakt", href: "/#contact" },
  ].map((item) => (
    <li key={item.name}>
      <Link
        href={item.href}
        className="hover:text-white transition-colors duration-300"
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>
  </div>
  <div className="space-y-4 text-center flex flex-col items-center">
    <h3 className="text-sm uppercase tracking-widest text-neutral-500">
      Connect
    </h3>
  <div className="flex items-center justify-center gap-4">
  <a
    href="https://www.instagram.com/art.by.sandrat/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-[#8f6854] hover:bg-[#6e5d52] transition"
  >
    <Instagram size={18} />
  </a>

  <a
    href="mailto:artbysandra@mail.com"
    className="p-3 rounded-full bg-[#8f6854] hover:bg-[#6e5d52] transition"
  >
    <Mail size={18} />
  </a>

  <Link
    href="/Gallery"
    className="p-3 rounded-full bg-[#8f6854] hover:bg-[#6e5d52] transition"
  >
    <Palette size={18} />
  </Link>
</div>
          <p className="text-sm text-neutral-400">
            artbysandra@mail.com
          </p>
        </div>
      </div>
      <div className="relative border-t border-neutral-800 text-center text-xs text-neutral-500 py-6">
        © {new Date().getFullYear()} Art By Sandra — Sandra Turesson
      </div>
    </footer>
  );
}
