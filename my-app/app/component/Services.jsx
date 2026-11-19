const services = [
  {
    number: "01",
    title: "Branding",
    description: "Logos, identity and visual systems that make a brand memorable.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Intuitive interfaces and flows shaped around real people.",
  },
  {
    number: "03",
    title: "Web Design",
    description: "Clean, responsive websites that tell your story well.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="font-display text-3xl tracking-tight">What we do</h2>
          <p className="text-xs tracking-[0.08em] text-muted">SERVICES</p>
        </div>

        <div className="grid grid-cols-1 border-y border-stone-300 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.number}
              className={`py-6 md:py-7 ${
                index > 0
                  ? "border-t border-stone-300 md:border-l md:border-t-0 md:pl-8"
                  : "md:pr-8"
              }`}
            >
              <p className="mb-10 text-xs text-muted">{service.number}</p>
              <h3 className="mb-2 font-display text-xl">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}