"use client"
import React from 'react';

const Foot = () => {
    function scrollToTop() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <a
          aria-label="Aura Studio home"
          className="w-fit text-sm font-bold tracking-[0.12em] text-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0a18e]"
          href="#top"
        >
          AURA<span className="text-[#e96e55]" aria-hidden="true">.</span>
        </a>

        <p>London, UK</p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          
          <button
            className="min-h-11 rounded-sm text-[#f0a18e] underline underline-offset-4 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0a18e]"
            onClick={scrollToTop}
            type="button"
          >
            Back to top <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Foot;
