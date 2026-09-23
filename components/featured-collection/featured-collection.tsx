"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const cakes = [
  {
    number: "01",
    name: "The Signature",
    type: "Vanilla · Raspberry · Cream",
    slug: "the-signature",
    image: "/images/cakes/signature-cake.jpg",
    className: "aspect-[4/5]",
  },
  {
    number: "02",
    name: "Chocolate Indulgence",
    type: "Chocolate · Ganache · Hazelnut",
    slug: "chocolate-indulgence",
    image: "/images/cakes/chocolate-cake.jpg",
    className: "aspect-[3/4] lg:mt-16",
  },
  {
    number: "03",
    name: "The Celebration",
    type: "Celebration · Handmade · Elegant",
    slug: "the-celebration",
    image: "/images/cakes/celebration-cake.jpg",
    className: "aspect-[4/5]",
  },
];

export function FeaturedCollection() {
  return (
    <section className="border-t border-[#D6D3D1] bg-[#F3EEE8] px-5 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col justify-between gap-8 sm:mb-14 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#A16207]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A16207]">
                The collection
              </p>
            </div>

            <h2 className="max-w-2xl font-[family-name:var(--font-cormorant)] text-[3.2rem] font-medium leading-[0.9] tracking-tight text-[#1C1917] sm:text-6xl lg:text-7xl">
              A little beauty
              <br />
              <span className="italic text-[#A16207]">
                for every occasion.
              </span>
            </h2>
          </div>

          <Link
            href="/cakes"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#1C1917] pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1C1917] transition-colors hover:border-[#A16207] hover:text-[#A16207]"
          >
            View all cakes
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {cakes.map((cake, index) => (
            <motion.article
              key={cake.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={cake.className}
            >
              <Link href={`/cakes/${cake.slug}`} className="group block h-full">
                <div className="relative h-full overflow-hidden bg-[#DCC8B7]">
                  <Image
                    src={cake.image}
                    alt={cake.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 z-10 text-[10px] font-medium tracking-[0.2em] text-white">
                    {cake.number}
                  </div>

                  <div className="absolute inset-x-5 bottom-5 z-10 border border-white/30 bg-[#1C1917]/80 p-5 text-white backdrop-blur-sm">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="font-[family-name:var(--font-cormorant)] text-3xl italic">
                          {cake.name}
                        </p>
                        <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/60">
                          {cake.type}
                        </p>
                      </div>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#1C1917]">
                        <ArrowUpRight size={15} />
                      </span>
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
