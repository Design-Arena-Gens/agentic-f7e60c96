import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-zinc-50 to-zinc-100">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute right-[-15%] top-[-10%] h-[520px] w-[520px] rounded-full bg-zinc-200/40 blur-3xl" />
        <div className="pointer-events-none absolute left-[-10%] bottom-[-20%] h-[420px] w-[420px] rounded-full bg-zinc-300/30 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500 shadow-sm">
            Spring / Summer 2024
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-zinc-900 sm:text-5xl md:text-6xl">
            Tailored trousers engineered for movement and the modern wardrobe.
          </h1>
          <p className="max-w-xl text-lg text-zinc-600">
            Discover performance-driven fabrics, responsible materials, and sharp
            silhouettes designed to carry you from boardroom to evening lounge
            without missing a beat.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#featured"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
            >
              Shop signature fits
            </a>
            <a
              href="#fit-guide"
              className="rounded-full border border-zinc-900 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-900 hover:text-white"
            >
              Book a virtual fitting
            </a>
          </div>
          <dl className="grid grid-cols-2 gap-6 pt-6 sm:grid-cols-4">
            {[
              ["72 hr", "Express tailoring"],
              ["18", "Sustainable mills"],
              ["4.9★", "Customer rating"],
              ["30 day", "Perfect fit guarantee"],
            ].map(([stat, label]) => (
              <div key={stat}>
                <dt className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  {label}
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-zinc-900">
                  {stat}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] border border-zinc-200 bg-zinc-200/40 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1531928351158-2f736078e0a1?auto=format&fit=crop&w=1200&q=80"
            alt="Model wearing tailored trousers"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
            priority
          />
          <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 p-5 text-sm text-zinc-700 shadow-lg backdrop-blur">
            <p className="font-semibold text-zinc-900">
              Atelier Tailoring Studio
            </p>
            <p className="mt-1">
              Complimentary hemming and waistband adjustments with every pair.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
