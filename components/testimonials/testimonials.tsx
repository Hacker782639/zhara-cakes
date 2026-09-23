"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The cake was absolutely beautiful. Every detail felt intentional, and it tasted even better than it looked.",
    name: "A happy customer",
    occasion: "Birthday celebration",
  },
  {
    quote:
      "From the design to the final delivery, everything felt incredibly thoughtful. It made our celebration unforgettable.",
    name: "A delighted bride",
    occasion: "Wedding celebration",
  },
  {
    quote:
      "Elegant, delicious, and exactly what we imagined. Zahra's Cakes made our special day even sweeter.",
    name: "A returning customer",
    occasion: "Special celebration",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-[#D6D3D1] bg-[#F3EEE8] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 max-w-2xl">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-[#A16207]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A16207]">
              Kind words
            </p>
          </div>

          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[0.9] tracking-tight text-[#1C1917] sm:text-6xl lg:text-7xl">
            Moments made
            <br />
            <span className="italic text-[#A16207]">sweeter.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative flex min-h-[280px] flex-col justify-between border border-[#D6D3D1] bg-[#FAFAF9] p-7 sm:p-8"
            >
              <Quote
                size={28}
                strokeWidth={1}
                className="text-[#A16207]"
              />

              <p className="mt-8 font-[family-name:var(--font-cormorant)] text-2xl leading-tight text-[#1C1917] sm:text-3xl">
                “{item.quote}”
              </p>

              <div className="mt-8 border-t border-[#D6D3D1] pt-5">
                <div className="mb-2 flex gap-1 text-[#A16207]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={11} fill="currentColor" />
                  ))}
                </div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1C1917]">
                  {item.name}
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#78716C]">
                  {item.occasion}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
