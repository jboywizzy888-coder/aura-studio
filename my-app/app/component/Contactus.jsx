"use client";

import { useState } from "react";

export default function Contactus() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <section
      aria-labelledby="contact-title"
      className="bg-stone-800 text-stone-50"
      id="contact"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f0a18e]">
            03 <span aria-hidden="true">/</span> Get in touch
          </p>
          <h2
            className="mt-3 max-w-md font-serif text-4xl leading-[1.12] tracking-[-0.035em] sm:text-5xl"
            id="contact-title"
          >
            Have a project in mind?
          </h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-stone-300">
            Tell us a little about what you’re working on. We’d love to hear
            from you.
          </p>
          <a
            className="mt-6 inline-block border-b border-[#f0a18e] pb-1 text-sm font-medium text-[#f0a18e] transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0a18e]"
            href="mailto:hello@aurastudio.co"
          >
            hello@aurastudio.co
          </a>
        </div>

        <form className="grid gap-5" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <label className="text-sm text-stone-200" htmlFor="contact-name">
              Your name
            </label>
            <input
              autoComplete="name"
              className="min-h-12 border-0 border-b border-stone-500 bg-transparent px-0 py-2 text-base text-white placeholder:text-stone-400 focus:border-[#f0a18e] focus:outline-none focus:ring-0"
              id="contact-name"
              name="name"
              placeholder="Name"
              required
              type="text"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-stone-200" htmlFor="contact-email">
              Email address
            </label>
            <input
              autoComplete="email"
              className="min-h-12 border-0 border-b border-stone-500 bg-transparent px-0 py-2 text-base text-white placeholder:text-stone-400 focus:border-[#f0a18e] focus:outline-none focus:ring-0"
              id="contact-email"
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-stone-200" htmlFor="contact-message">
              Your message
            </label>
            <textarea
              className="min-h-28 resize-y border-0 border-b border-stone-500 bg-transparent px-0 py-2 text-base text-white placeholder:text-stone-400 focus:border-[#f0a18e] focus:outline-none focus:ring-0"
              id="contact-message"
              name="message"
              placeholder="Tell us about your project"
              required
              rows={3}
            />
          </div>

          <button
            className="mt-1 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-sm bg-[#e96e55] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d75d45] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0a18e]"
            type="submit"
          >
            Send message <span aria-hidden="true">↗</span>
          </button>

          <p aria-live="polite" className="min-h-6 text-sm text-[#f0a18e]">
            {submitted
              ? "Thanks for reaching out. This demo form does not send messages yet."
              : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
