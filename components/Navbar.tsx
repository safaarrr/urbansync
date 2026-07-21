"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
  { name: "Instagram", href: "#instagram" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <a
          href="#home"
          className="text-2xl font-bold tracking-widest hover:opacity-80 transition"
        >
          URBAN SYNC
        </a>

        <nav className="hidden md:flex gap-8">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative group text-sm uppercase tracking-wide"
            >
              {item.name}

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-white/10">

          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-6 py-5 border-b border-white/5 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}

        </div>
      )}
    </header>
  );
}
