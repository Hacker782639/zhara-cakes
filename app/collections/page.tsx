import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { categoryHref, type CakeCategory } from "@/lib/cakes";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Browse Zahra's Cakes collections — celebration cakes, chocolate creations, sweet gifts and cupcakes made to order.",
};

const collections: {
  title: string;
  description: string;
  image: string;
  category: CakeCategory;
}[] = [
  {
    title: "Celebration Cakes",
    description: "Beautiful centrepieces for birthdays and unforgettable moments.",
    image: "/images/cakes/celebration-cake.jpg",
    category: "Celebration",
  },
  {
    title: "Chocolate Collection",
    description: "Rich chocolate creations made for serious dessert lovers.",
    image: "/images/cakes/chocolate-cake.jpg",
    category: "Chocolate",
  },
  {
    title: "Sweet Gifts",
    description: "Cakes, gift boxes and thoughtful surprises for someone special.",
    image: "/images/cakes/premium-gift-box.jpg",
    category: "Sweet Gifts",
  },
  {
    title: "Cupcakes & Treats",
    description: "Little handcrafted pleasures made for sharing.",
    image: "/images/cakes/cake-cupcakes.jpg",
    category: "Cupcakes & Treats",
  },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] text-[#1C1917]">
      <Navbar />

      <section className="px-5 py-16 sm:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A16207]">
            Explore
          </p>

          <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-cormorant)] text-6xl font-medium leading-[0.86] sm:text-7xl lg:text-8xl">
            Collections made
            <br />
            <span className="italic text-[#A16207]">for every moment.</span>
          </h1>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection) => (
              <Link
                key={collection.title}
                href={categoryHref(collection.category)}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#E8DED4]">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl italic">
                          {collection.title}
                        </h2>
                        <p className="mt-2 text-[10px] leading-5 text-white/70">
                          {collection.description}
                        </p>
                      </div>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#1C1917]">
                        <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
