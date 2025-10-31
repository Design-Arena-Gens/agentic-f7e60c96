import Image from "next/image";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0px_10px_45px_rgba(17,17,26,0.08)] transition hover:-translate-y-1 hover:shadow-[0px_18px_55px_rgba(17,17,26,0.12)]">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-zinc-900 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-zinc-600">{product.description}</p>
        </div>
        <div className="mt-auto space-y-3 text-sm text-zinc-600">
          <div className="flex items-center gap-2">
            <span className="font-medium text-zinc-900">{product.price}</span>
            <span aria-hidden className="text-zinc-400">
              ·
            </span>
            <span>
              {product.rating.toFixed(1)} ({product.reviews})
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
            {product.colors.map((color) => (
              <span key={color}>{color}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {product.fits.map((fit) => (
              <span
                key={fit}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
              >
                {fit} Fit
              </span>
            ))}
          </div>
        </div>
        <button className="mt-2 w-full rounded-full bg-zinc-900 py-3 text-sm font-medium text-white transition hover:bg-zinc-700">
          Add to wardrobe
        </button>
      </div>
    </article>
  );
}
