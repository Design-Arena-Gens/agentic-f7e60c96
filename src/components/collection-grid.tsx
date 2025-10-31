import { capsuleCollections } from "@/data/products";

export function CollectionGrid() {
  return (
    <section id="collections" className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Limited Capsules
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-zinc-900">
              Curated edits, released monthly.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-zinc-600">
            Each capsule is developed with exclusive fabrications, numbered tags,
            and coordinated styling guidance from our lead tailors.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {capsuleCollections.map((collection) => (
            <article
              key={collection.title}
              className="group flex flex-col gap-6 rounded-3xl border border-zinc-200 bg-white/70 p-8 transition hover:-translate-y-1 hover:border-zinc-300"
            >
              <div className="flex items-center gap-3">
                {collection.swatch.map((color) => (
                  <span
                    key={color}
                    className="h-9 w-9 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900">
                  {collection.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-600">
                  {collection.description}
                </p>
              </div>
              <a
                href="#featured"
                className="text-sm font-medium text-zinc-900 transition group-hover:underline"
              >
                {collection.linkLabel} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
