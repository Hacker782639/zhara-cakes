"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function BrandStory() {
  return (
    <section className="overflow-hidden bg-[#FAFAF9] px-5 py-20 sm:px-8 lg:px-14 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-[4/5] max-w-[560px] overflow-hidden bg-[#E5D8CC]">
            <Image
              src="/images/cakes/cake-gift-closeup.jpg"
              alt="Beautifully presented Zahra's cake"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 border border-white/30 bg-[#1C1917]/80 px-5 py-4 text-white backdrop-blur-sm">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#D6B878]">
                Made by hand
              </p>
              <p className="mt-1 font-[family-name:var(--font-cormorant)] text-2xl italic">
                Never ordinary.
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-xs text-[10px] uppercase leading-5 tracking-[0.16em] text-[#78716C]">
            Every layer.
            <br />
            Every detail.
            <br />
            Made with intention.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl"
        >
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-[#A16207]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A16207]">
              Our philosophy
            </p>
          </div>

          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[0.92] tracking-tight text-[#1C1917] sm:text-6xl lg:text-7xl">
            Beautiful things
            <br />
            <span className="italic text-[#A16207]">take time.</span>
          </h2>

          <p className="mt-8 text-sm leading-7 text-[#57534E] sm:text-base">
            At Zahra&apos;s, every cake begins with an idea and ends as
            something worth remembering. We believe the smallest details can
            turn an ordinary celebration into a beautiful memory.
          </p>

          <p className="mt-5 text-sm leading-7 text-[#57534E] sm:text-base">
            From the first layer to the final decoration, everything is
            handcrafted with care, patience, and a love for beautiful things.
          </p>

          <Link
            href="/about"
            className="group mt-9 inline-flex items-center gap-3 border-b border-[#1C1917] pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1C1917] transition-colors hover:border-[#A16207] hover:text-[#A16207]"
          >
            Our story
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
