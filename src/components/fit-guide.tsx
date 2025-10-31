export function FitGuide() {
  return (
    <section
      id="fit-guide"
      className="relative overflow-hidden bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 py-24 text-white"
    >
      <div className="absolute inset-y-0 right-[-20%] hidden w-[55%] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_65%)] md:block" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.7fr_1fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-white/20 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
            Atelier Fit Lab
          </span>
          <h2 className="text-3xl font-semibold leading-snug md:text-4xl">
            Discover your signature fit with a virtual tailor.
          </h2>
          <p className="text-sm text-white/70">
            Book a 20-minute session and our stylists will recommend the ideal
            rise, taper, and fabric for your routine. Receive a personalized
            size profile stored for future orders.
          </p>
        </div>
        <div className="grid gap-4 rounded-3xl bg-white/5 p-8 backdrop-blur">
          {[
            {
              title: "Precision measurement capture",
              description:
                "Guided video consultation with AI-assisted measurement logging.",
            },
            {
              title: "Fit playbook delivered",
              description:
                "Receive styling notes, alteration recommendations, and fabric pairings.",
            },
            {
              title: "Ongoing concierge",
              description:
                "Priority tailoring and seasonal capsule previews, curated to your profile.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-xs text-white/70">{item.description}</p>
            </div>
          ))}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
            <span>Available worldwide</span>
            <span aria-hidden>•</span>
            <span>Complimentary with every order</span>
          </div>
          <a
            href="#"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            Schedule a fitting
          </a>
        </div>
      </div>
    </section>
  );
}
