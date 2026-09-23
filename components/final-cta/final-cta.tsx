"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="bg-[#1C1917] px-6 py-24 text-white sm:px-10 lg:px-14 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-[1100px] text-center"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D6B878]">
          Your moment deserves something beautiful
        </p>

        <h2 className="mt-7 font-[family-name:var(--font-cormorant)] text-6xl font-medium leading-[0.85] tracking-tight sm:text-7xl lg:text-9xl">
          Let&apos;s make
          <br />
          <span className="italic text-[#D6B878]">something special.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
          Tell us about your celebration and let&apos;s create a cake that
          feels uniquely yours.
        </p>

        <Link
          href="/custom-order"
          className="group mt-9 inline-flex cursor-pointer items-center gap-3 bg-[#D6B878] px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#1C1917] transition-colors duration-200 hover:bg-white"
        >
          Start your custom order
          <ArrowUpRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </motion.div>
    </section>
  );
}
