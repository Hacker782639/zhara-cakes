import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Zahra's Cakes is a handcrafted cake boutique creating elegant cakes and desserts for life's most meaningful celebrations.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] text-[#1C1917]">
      <Navbar />

      <section className="px-5 py-16 sm:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A16207]">
            Our story
          </p>

          <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-cormorant)] text-6xl font-medium leading-[0.86] sm:text-7xl lg:text-8xl">
            Beautiful cakes,
            <br />
            <span className="italic text-[#A16207]">made with intention.</span>
          </h1>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/cakes/cake-gift-closeup.jpg"
                alt="A handcrafted Zahra's Cakes creation, decorated by hand"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm leading-8 text-[#57534E] sm:text-base">
                At Zahra&apos;s Cakes, every creation begins with care.
                From delicate layers to thoughtful finishing touches, we make
                cakes and desserts designed to become part of life&apos;s most
                meaningful moments.
              </p>

              <p className="mt-6 text-sm leading-8 text-[#57534E] sm:text-base">
                We believe a beautiful cake should feel personal — something
                made especially for the people, memories and celebrations
                behind it.
              </p>

              <Link
                href="/custom-order"
                className="group mt-9 inline-flex items-center gap-3 bg-[#1C1917] px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#A16207]"
              >
                Create your cake
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#D6D3D1] bg-[#F3EEE8] px-5 py-16 sm:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A16207]">
                01 · Craft
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl italic">
                Made with care.
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#57534E]">
                Thoughtful flavours, careful layers and finishing touches that
                make every creation feel special.
              </p>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A16207]">
                02 · Personal
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl italic">
                Made for your moment.
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#57534E]">
                From intimate birthdays to meaningful celebrations, each order
                is shaped around the person and occasion.
              </p>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A16207]">
                03 · Joy
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl italic">
                Worth remembering.
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#57534E]">
                Beautiful desserts are more than something to eat — they help
                turn ordinary gatherings into memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
