import { uspHighlights } from "@/data/products";

export function UspGrid() {
  return (
    <section
      id="materials"
      className="border-y border-zinc-200 bg-white/70 py-20 backdrop-blur"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-zinc-900">
            Bespoke details without the lead time.
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Every pair is developed with obsessive attention—from thread
            selection to finishing hardware—so your wardrobe works as hard as
            you do.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {uspHighlights.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white/60 p-8 shadow-[0px_12px_45px_rgba(17,17,26,0.05)] transition hover:-translate-y-1 hover:shadow-[0px_18px_65px_rgba(17,17,26,0.1)]"
            >
              <span className="text-3xl" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="text-lg font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600">{item.body}</p>
              <span className="mt-auto text-xs uppercase tracking-[0.3em] text-zinc-400">
                Atelier standard
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
