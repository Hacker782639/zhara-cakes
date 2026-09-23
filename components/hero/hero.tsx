"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF9]">
      <div className="mx-auto grid min-h-0 max-w-[1440px] items-center gap-10 px-5 py-12 sm:px-10 sm:py-14 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          className="relative z-10"
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[#A16207]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A16207]">
              Artisan Patisserie
            </p>
          </div>

          <h1 className="max-w-3xl font-[family-name:var(--font-cormorant)] text-[clamp(3.5rem,8vw,8.5rem)] font-medium leading-[0.78] tracking-[-0.04em] text-[#1C1917]">
            Made to
            <br />
            <span className="ml-[8%] italic text-[#A16207]">
              be remembered.
            </span>
          </h1>

          <p className="mt-7 max-w-md text-sm leading-7 text-[#57534E] sm:text-base">
            Handcrafted cakes and exquisite desserts, created with patience,
            detail, and a little sweetness for life&apos;s most meaningful
            celebrations.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="/cakes"
              className="group inline-flex cursor-pointer items-center gap-3 bg-[#1C1917] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-[#A16207]"
            >
              Discover the collection
              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/custom-order"
              className="inline-flex cursor-pointer items-center border-b border-[#1C1917] pb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#1C1917] transition-colors duration-200 hover:border-[#A16207] hover:text-[#A16207]"
            >
              Create your cake
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3 sm:mt-14 sm:gap-4 border-t border-[#D6D3D1] pt-5">
            <div className="flex gap-1 text-[#A16207]">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={12} fill="currentColor" />
              ))}
            </div>

            <p className="text-[10px] uppercase tracking-[0.16em] text-[#78716C]">
              Crafted for unforgettable moments
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative mx-auto w-full max-w-[650px]">
            <div className="absolute -left-1 top-4 z-20 hidden -translate-x-full lg:block">
              <p className="font-[family-name:var(--font-cormorant)] text-5xl text-[#A16207]">
                01
              </p>
              <div className="ml-3 mt-2 h-16 w-px bg-[#D6D3D1]" />
            </div>

            <div className="relative aspect-[0.88] overflow-hidden bg-[#E8DED4]">
              <Image
                src="/images/cakes/hero-wedding-cake.jpg"
                alt="Elegant handcrafted Zahra's cake"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              <div className="absolute inset-x-5 bottom-5 border border-white/40 bg-[#1C1917]/75 p-5 text-white backdrop-blur-sm sm:inset-x-8 sm:bottom-8 sm:p-6">
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#D6B878]">
                  The Zahra&apos;s collection
                </p>

                <div className="mt-2 flex items-end justify-between gap-4">
                  <p className="font-[family-name:var(--font-cormorant)] text-3xl italic sm:text-4xl">
                    Made for your moment.
                  </p>

                  <span className="text-xs uppercase tracking-widest text-white/60">
                    2026
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-start justify-between gap-6 sm:mt-5 border-t border-[#D6D3D1] pt-4">
              <p className="max-w-xs text-[10px] uppercase leading-5 tracking-[0.16em] text-[#78716C]">
                Small details.
                <br />
                Beautifully considered.
              </p>

              <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-[#57534E]">
                Since day one.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
