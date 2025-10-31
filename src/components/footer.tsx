export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900">
            Atelier Trousers
          </p>
          <p className="mt-4 text-sm text-zinc-600">
            Elevated essentials designed for modern movement. Crafted responsibly
            in small batches.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-900">Customer Care</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600">
            <li>Contact &amp; Support</li>
            <li>Shipping &amp; Returns</li>
            <li>Alteration Services</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-900">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600">
            <li>About Atelier</li>
            <li>Journal</li>
            <li>Responsible Sourcing</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-900">
            Join the Atelier Circle
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Members receive tailored fit consultations, early capsule access, and
            priority alterations.
          </p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
            <button
              type="button"
              className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-zinc-200/70 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Atelier Trousers. All Rights Reserved.
      </div>
    </footer>
  );
}
