import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import {
  ALL_CAKES_LABEL,
  type CakeCategory,
  CAKE_CATEGORIES,
  categoryHref,
  getCakesByCategory,
  resolveCategory,
} from "@/lib/cakes";

export const metadata: Metadata = {
  title: "Cakes & Desserts",
  description:
    "Explore handcrafted cakes, cupcakes and sweet gifts from Zahra's Cakes — made to order for birthdays, weddings and every celebration.",
};

export default async function CakesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string | string[] }>;
}) {
  const { category } = await searchParams;
  const selectedCategory = resolveCategory(category);
  const filteredCakes = getCakesByCategory(selectedCategory);
  const activeLabel = selectedCategory ?? ALL_CAKES_LABEL;
  const filters: { label: string; value: CakeCategory | null }[] = [
    { label: ALL_CAKES_LABEL, value: null },
    ...CAKE_CATEGORIES.map((item) => ({ label: item, value: item })),
  ];

  return (
    <main className="min-h-screen bg-[#FAFAF9] text-[#1C1917]">
      <Navbar />

      <section className="border-b border-[#D6D3D1] px-5 pb-16 pt-20 sm:px-10 sm:pb-20 lg:px-14 lg:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#A16207]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A16207]">
              The collection
            </p>
          </div>

          <h1 className="mt-7 max-w-4xl font-[family-name:var(--font-cormorant)] text-[clamp(4rem,9vw,8rem)] font-medium leading-[0.82] tracking-[-0.04em]">
            Cakes made
            <br />
            <span className="italic text-[#A16207]">for moments.</span>
          </h1>

          <p className="mt-8 max-w-lg text-sm leading-7 text-[#57534E] sm:text-base">
            Discover handcrafted cakes, desserts, and thoughtful sweet
            surprises created for birthdays, weddings, and everything worth
            celebrating.
          </p>

          <p
            aria-live="polite"
            className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A16207]"
          >
            {activeLabel}
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        <nav
          aria-label="Filter cakes by category"
          className="mx-auto mb-10 flex max-w-[1440px] gap-2 overflow-x-auto pb-2"
        >
          {filters.map((filter) => {
            const isActive = filter.value === selectedCategory;

            return (
              <Link
                key={filter.label}
                href={categoryHref(filter.value)}
                aria-current={isActive ? "true" : undefined}
                className={`shrink-0 border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  isActive
                    ? "border-[#1C1917] bg-[#1C1917] text-white"
                    : "border-[#D6D3D1] text-[#57534E] hover:border-[#A16207] hover:text-[#A16207]"
                }`}
              >
                {filter.label}
              </Link>
            );
          })}
        </nav>

        {filteredCakes.length === 0 ? (
          <div className="mx-auto max-w-[1440px] border border-[#D6D3D1] bg-white px-6 py-20 text-center">
            <p className="font-[family-name:var(--font-cormorant)] text-4xl italic">
              Nothing here yet.
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#57534E]">
              We don&apos;t have cakes in that category right now, but we can
              always create something especially for you.
            </p>
            <Link
              href="/cakes"
              className="mt-8 inline-flex items-center gap-3 bg-[#1C1917] px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#A16207]"
            >
              View all cakes
            </Link>
          </div>
        ) : (
          <div className="mx-auto grid max-w-[1440px] gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {filteredCakes.map((cake, index) => (
              <Link
                key={cake.slug}
                href={`/cakes/${cake.slug}`}
                className="group"
              >
                <article>
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#E8DED4]">
                    <Image
                      src={cake.image}
                      alt={cake.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80" />

                    <span className="absolute left-5 top-5 text-[10px] font-medium tracking-[0.2em] text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1C1917] opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  <div className="border-b border-[#D6D3D1] py-5">
                    <h2 className="font-[family-name:var(--font-cormorant)] text-3xl italic">
                      {cake.name}
                    </h2>

                    <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-[#78716C]">
                      {cake.type}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
