"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { CAKES } from "@/lib/cakes";

const FEATURED_SLUGS = [
  "the-signature",
  "chocolate-indulgence",
  "the-celebration",
  "birthday-dreams",
  "sweet-moments",
];

const cakes = CAKES.filter((cake) => FEATURED_SLUGS.includes(cake.slug)).map(
  (cake, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: cake.name,
    category: cake.category,
    slug: cake.slug,
    image: cake.image,
    alt: cake.alt,
  })
);

export function CakeCollection() {
  return (
    <section className="bg-[#F5F1EC] px-5 py-20 sm:px-8 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 max-w-2xl sm:mb-16">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-[#A16207]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A16207]">
              Explore
            </p>
          </div>

          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[0.9] tracking-tight text-[#1C1917] sm:text-6xl lg:text-7xl">
            Cakes for every
            <br />
            <span className="italic text-[#A16207]">beautiful moment.</span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-[#57534E] sm:text-base">
            From intimate celebrations to unforgettable occasions, discover
            handcrafted creations made to make the moment sweeter.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {cakes.map((cake, index) => (
            <motion.article
              key={cake.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={index === 1 || index === 4 ? "lg:mt-14" : ""}
            >
              <Link href={`/cakes/${cake.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#E8DED4]">
                  <Image
                    src={cake.image}
                    alt={cake.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 text-[10px] tracking-[0.2em] text-white/90">
                    {cake.number}
                  </span>

                  <div className="absolute inset-x-5 bottom-5 border border-white/30 bg-[#1C1917]/80 p-5 text-white backdrop-blur-sm">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="font-[family-name:var(--font-cormorant)] text-3xl italic">
                          {cake.title}
                        </p>
                        <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/60">
                          {cake.category}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
