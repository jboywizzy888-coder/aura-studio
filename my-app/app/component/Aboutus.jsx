export default function Aboutus() {
  return (
    <section
      aria-labelledby="about-title"
      className="bg-[#fffefa] text-stone-900"
      id="about"
    >
      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.65fr_1.35fr] lg:gap-14 lg:px-12 lg:py-24">
        <div className="pt-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b84632]">
            01 <span aria-hidden="true">/</span> About us
          </p>
        </div>

        <div>
          <h2
            className="max-w-3xl font-serif text-4xl leading-[1.12] tracking-[-0.035em] sm:text-5xl"
            id="about-title"
          >
            Good design makes a brand feel unmistakably itself.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
            Aura Studio is a London-based creative agency helping brands express
            who they are through modern, minimalist design. We bring clarity,
            character, and thoughtful storytelling to every identity and digital
            experience.
          </p>
        </div>
      </div>
    </section>
  );
}
