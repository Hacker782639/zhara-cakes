import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { CAKES, getCake } from "@/lib/cakes";
import { orderCakeMessage, whatsappLink } from "@/lib/whatsapp";

type CakeDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CAKES.map((cake) => ({ slug: cake.slug }));
}

export async function generateMetadata({
  params,
}: CakeDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const cake = getCake(slug);

  if (!cake) {
    return { title: "Cake not found" };
  }

  return {
    title: cake.name,
    description: cake.description,
    openGraph: {
      title: `${cake.name} | Zahra's Cakes`,
      description: cake.description,
      type: "website",
    },
  };
}

export default async function CakeDetail({ params }: CakeDetailProps) {
  const { slug } = await params;
  const cake = getCake(slug);

  if (!cake) {
    notFound();
  }

  const orderUrl = whatsappLink(orderCakeMessage(cake.name, cake.type));

  return (
    <main className="min-h-screen bg-[#FAFAF9] text-[#1C1917]">
      <Navbar />

      <section className="px-5 py-10 sm:px-10 lg:px-14 lg:py-16">
        <div className="mx-auto max-w-[1200px]">
          <Link
            href="/cakes"
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#57534E] transition-colors hover:text-[#A16207]"
          >
            <ArrowLeft size={14} />
            Back to collection
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#E8DED4]">
              <Image
                src={cake.image}
                alt={cake.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A16207]">
                Zahra&apos;s collection
              </p>

              <h1 className="mt-5 font-[family-name:var(--font-cormorant)] text-6xl font-medium leading-[0.85] tracking-tight sm:text-7xl">
                {cake.name}
              </h1>

              <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[#78716C]">
                {cake.type}
              </p>

              <div className="my-9 h-px bg-[#D6D3D1]" />

              <p className="max-w-md text-sm leading-7 text-[#57534E] sm:text-base">
                {cake.description}
              </p>

              <p className="mt-8 max-w-md text-xs uppercase leading-6 tracking-[0.12em] text-[#78716C]">
                Every cake is prepared to order. Contact us for size,
                availability, pricing and customisation.
              </p>

              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex items-center gap-3 bg-[#1C1917] px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#A16207]"
              >
                Order this cake
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
