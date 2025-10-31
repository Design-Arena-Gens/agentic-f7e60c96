import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CollectionGrid } from "@/components/collection-grid";
import { ProductCard } from "@/components/product-card";
import { UspGrid } from "@/components/usp-grid";
import { FitGuide } from "@/components/fit-guide";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { Footer } from "@/components/footer";
import { featuredProducts } from "@/data/products";

export default function Home() {
  return (
    <div className="bg-white text-zinc-900">
      <Header />
      <main>
        <Hero />
        <section
          id="featured"
          className="bg-white py-24"
          aria-labelledby="featured-heading"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                  Signature Styles
                </p>
                <h2
                  id="featured-heading"
                  className="mt-2 text-3xl font-semibold text-zinc-900"
                >
                  Elevated trousers for every agenda.
                </h2>
              </div>
              <p className="max-w-xl text-sm text-zinc-600">
                From jet-setting performance fabrics to heritage selvedge denim,
                meet the silhouettes defining the modern trouser wardrobe.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        <UspGrid />
        <CollectionGrid />
        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Atelier Journal
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-900">
                The meaning of modern tailoring.
              </h2>
              <p className="mt-4 text-sm text-zinc-600">
                We collaborate with global mills pioneering regenerative
                practices, and every pattern is refined over 42 fittings before
                release. Explore fabric deep-dives, minimalist styling tips, and
                the craft behind each pair on the Atelier Journal.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Browse the journal
              </a>
            </div>
            <div className="grid gap-4 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-8 shadow-[0px_16px_45px_rgba(17,17,26,0.05)]">
              {[
                {
                  title: "Fabric Field Notes",
                  body: "Deep dives on breathable summer wool, selvedge finishing, and eco-certified blends.",
                },
                {
                  title: "Styling Sessions",
                  body: "Weekly looks curated by our stylists for creative, tailored, and off-duty outings.",
                },
                {
                  title: "Care & Longevity",
                  body: "Guides on spot cleaning, steaming, and protecting trousers between seasons.",
                },
              ].map((article) => (
                <article key={article.title}>
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-600">{article.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <FitGuide />
        <TestimonialCarousel />
      </main>
      <Footer />
    </div>
  );
}
