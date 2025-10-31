import Image from "next/image";
import { testimonials } from "@/data/products";

export function TestimonialCarousel() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Client Stories
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-zinc-900">
              Tailored to real lives.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-zinc-600">
            From creative studios to global boardrooms, Atelier trousers adapt to
            every agenda with ease.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-8 shadow-[0px_12px_50px_rgba(17,17,26,0.05)]"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <figcaption className="text-sm font-semibold text-zinc-900">
                    {testimonial.name}
                  </figcaption>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <blockquote className="text-sm text-zinc-600">
                “{testimonial.quote}”
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
