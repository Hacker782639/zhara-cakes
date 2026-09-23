"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Story() {
  return (
    <section className="overflow-hidden border-t border-[#D6D3D1] bg-[#F3EEE8] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A16207]">
            The craft
          </p>

          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[0.9] tracking-tight text-[#1C1917] sm:text-6xl lg:text-7xl">
            Made slowly.
            <br />
            <span className="italic text-[#A16207]">
              Loved completely.
            </span>
          </h2>

          <p className="mt-7 max-w-md text-sm leading-7 text-[#57534E] sm:text-base">
            We believe great cakes deserve patience. Every layer, filling,
            decoration, and finishing touch is carefully considered before it
            reaches your table.
          </p>

          <div className="mt-10 grid max-w-md grid-cols-3 border-t border-[#D6D3D1] pt-6">
            <div>
              <p className="font-[family-name:var(--font-cormorant)] text-3xl text-[#1C1917]">
                01
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#78716C]">
                Handcrafted
              </p>
            </div>

            <div>
              <p className="font-[family-name:var(--font-cormorant)] text-3xl text-[#1C1917]">
                02
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#78716C]">
                Fresh
              </p>
            </div>

            <div>
              <p className="font-[family-name:var(--font-cormorant)] text-3xl text-[#1C1917]">
                03
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#78716C]">
                Personal
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-[#DCC8B7]">
            <Image
              src="/images/cakes/premium-gift-box.jpg"
              alt="Zahra's beautifully prepared cake gift"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 border border-white/25 bg-[#1C1917]/75 p-5 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#D6B878]">
                Zahra&apos;s Cakes
              </p>
              <p className="mt-2 font-[family-name:var(--font-cormorant)] text-3xl italic sm:text-4xl">
                For moments that matter.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
