"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className="relative z-20 border-b border-stone-300 bg-stone-50 text-stone-900"
      id="top"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
        <Link
          className="shrink-0 text-[17px] font-bold tracking-[0.12em]"
          href="#top"
          aria-label="Aura Studio home"
          onClick={closeMenu}
        >
          AURA<span className="text-[#e96e55]" aria-hidden="true">.</span>
        </Link>

        <button
          className="inline-flex size-11 items-center justify-center rounded border border-stone-300 text-stone-800 transition hover:border-[#e96e55] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b84632] sm:hidden"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-2xl leading-none" aria-hidden="true">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>

        <nav
          className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b border-stone-300 bg-stone-50 px-5 pb-5 pt-2 shadow-sm sm:static sm:flex sm:flex-row sm:items-center sm:gap-7 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              className="rounded px-3 py-3 text-sm text-stone-600 transition hover:text-stone-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b84632] sm:px-0 sm:py-2"
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded border border-stone-300 px-4 text-sm text-stone-900 transition hover:border-[#e96e55] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b84632] sm:mt-0"
            href="#contact"
            onClick={closeMenu}
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

