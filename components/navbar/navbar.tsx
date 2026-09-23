"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Cakes", href: "/cakes" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#FAFAF9]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold tracking-tight"
        >
          Zahra&apos;s
          <span className="ml-1 text-[#A16207]">Cakes</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              className="text-sm font-medium tracking-wide text-[#44403C] transition-colors duration-200 hover:text-[#A16207]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/cakes"
            aria-label="Browse the cake collection"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5"
          >
            <Search size={18} strokeWidth={1.7} />
          </Link>

          <Link
            href="/custom-order"
            aria-label="Start a custom order"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5"
          >
            <ShoppingBag size={18} strokeWidth={1.7} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-black/5 md:hidden"
        >
          {open ? <X size={21} strokeWidth={1.7} /> : <Menu size={21} strokeWidth={1.7} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-black/5 bg-[#FAFAF9]/95 px-5 py-5 backdrop-blur-xl md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                className="rounded-xl px-3 py-3 text-sm font-medium transition-colors hover:bg-black/5"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/custom-order"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-[#1C1917] px-3 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white"
            >
              Start a custom order
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
