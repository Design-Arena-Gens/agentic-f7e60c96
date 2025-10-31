import Link from "next/link";

const navLinks = [
  { href: "#collections", label: "Collections" },
  { href: "#featured", label: "Featured" },
  { href: "#materials", label: "Materials" },
  { href: "#testimonials", label: "Stories" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="#"
          className="text-lg font-semibold tracking-[0.2em] text-zinc-900 uppercase"
        >
          Atelier&nbsp;Trousers
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-zinc-600 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-sm">
          <Link
            href="#fit-guide"
            className="hidden text-zinc-600 transition-colors hover:text-zinc-900 sm:inline"
          >
            Fit Guide
          </Link>
          <Link
            href="#"
            className="rounded-full bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-700"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
}
