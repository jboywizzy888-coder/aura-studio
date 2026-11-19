import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-12 lg:py-24"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E0674D]">
          Independent creative studio <span aria-hidden="true">·</span> London
        </p>

        <h1
          className="mt-5 max-w-2xl font-serif text-5xl leading-[0.98] tracking-[-0.055em]  sm:text-6xl lg:text-7xl text-[#EBCFC6]"
          id="hero-title"
        >
          Bringing ideas to life.
        </h1>

        <p className="mt-6 max-w-lg text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
          We help ambitious brands find their voice and express it through
          thoughtful, modern design.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#e96e55] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d75d45] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b84632]"
            href="#services"
          >
            Explore our services <span aria-hidden="true">↘</span>
          </Link>
          <Link
            className="border-b border-stone-900 pb-1 text-sm font-semibold text-stone-900 transition hover:border-[#e96e55] hover:text-[#b84632] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b84632]"
            href="#contact"
          >
            Start a conversation
          </Link>
        </div>
      </div>

      <div
        aria-label="Abstract coral and sand colored brand identity artwork"
        className="relative isolate grid min-h-[280px] place-items-center overflow-hidden bg-[#e9e2d5] sm:min-h-[350px] lg:min-h-[390px]"
        role="img"
      >
        <div className="absolute -right-4 top-5 size-48 rounded-full bg-[#e96e55] sm:right-8 sm:top-8 sm:size-60" />
        <div className="absolute bottom-6 left-6 size-20 rounded-full bg-[#e5b26d] sm:bottom-8 sm:left-10 sm:size-24" />

        <div className="relative z-10 flex h-56 w-44 rotate-[-7deg] flex-col justify-between bg-[#f8f4eb] p-5 shadow-[0_20px_50px_rgba(55,48,39,0.13)] sm:h-64 sm:w-52 sm:p-6">
          <span className="font-serif text-4xl leading-none text-stone-900">a.</span>
          <span className="h-px w-full bg-[#ccc5b8]" />
          <span className="text-[9px] uppercase leading-4 tracking-[0.16em] text-stone-700">
            Aura Studio
            <br />
            Identity studies
          </span>
        </div>
      </div>
    </section>
  );
}

