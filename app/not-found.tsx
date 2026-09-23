import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] text-[#1C1917]">
      <Navbar />

      <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-20 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A16207]">
          404
        </p>

        <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl font-medium italic leading-[0.9] sm:text-6xl">
          This treat isn&apos;t here.
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#57534E]">
          The page you were looking for has moved or never existed. Explore our
          cakes or tell us what you&apos;re dreaming of.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/cakes"
            className="bg-[#1C1917] px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#A16207]"
          >
            View the collection
          </Link>

          <Link
            href="/"
            className="border-b border-[#1C1917] pb-1 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[#A16207] hover:text-[#A16207]"
          >
            Back home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
