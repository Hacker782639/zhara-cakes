import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categoryHref } from "@/lib/cakes";

type Gift = {
  title: string;
  image: string;
  href: string;
};

const gifts: Gift[] = [
  {
    title: "Cake Gift Box",
    image: "/images/cakes/cake-gift-box.jpg",
    href: categoryHref("Sweet Gifts"),
  },
  {
    title: "Premium Gift",
    image: "/images/cakes/premium-gift-box.jpg",
    href: categoryHref("Sweet Gifts"),
  },
  {
    title: "A Little Surprise",
    image: "/images/cakes/cake-gift-closeup.jpg",
    href: "/cakes/a-little-surprise",
  },
];

export function Gifts() {
  return (
    <section className="border-t border-[#D6D3D1] bg-[#F3EEE8] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-14">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A16207]">
              Thoughtful surprises
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[0.9] sm:text-6xl">
              More than
              <br />
              <span className="italic text-[#A16207]">just a cake.</span>
            </h2>
          </div>

          <Link
            href="/custom-order"
            className="hidden items-center gap-2 border-b border-[#1C1917] pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] sm:inline-flex"
          >
            Create a gift
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {gifts.map((gift) => (
            <Link key={gift.title} href={gift.href} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E8DED4]">
                <Image
                  src={gift.image}
                  alt={gift.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-3xl italic">
                    {gift.title}
                  </h3>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#1C1917]">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
