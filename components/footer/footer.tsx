import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  GENERAL_ENQUIRY_MESSAGE,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-[#1C1917] px-5 py-16 text-white sm:px-8 lg:px-14 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="border-b border-white/10 pb-14">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#D6B878]">
            Your moment deserves something special
          </p>

          <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-cormorant)] text-5xl leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
            Let&apos;s make
            <br />
            <span className="italic text-[#D6B878]">
              something beautiful.
            </span>
          </h2>

          <Link
            href="/custom-order"
            className="group mt-9 inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[#D6B878] hover:text-[#D6B878]"
          >
            Start a custom order
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        <div className="grid gap-12 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <p className="font-[family-name:var(--font-cormorant)] text-3xl">
              Zahra&apos;s <span className="text-[#D6B878]">Cakes</span>
            </p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/50">
              Handcrafted cakes and desserts for life&apos;s sweetest
              celebrations.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D6B878]">
              Explore
            </p>

            <nav className="flex flex-col gap-3 text-sm text-white/55">
              <Link href="/cakes" className="transition-colors hover:text-white">
                Cakes
              </Link>
              <Link
                href="/collections"
                className="transition-colors hover:text-white"
              >
                Collections
              </Link>
              <Link href="/about" className="transition-colors hover:text-white">
                Our Story
              </Link>
              <Link
                href="/custom-order"
                className="transition-colors hover:text-white"
              >
                Custom Orders
              </Link>
            </nav>
          </div>

          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D6B878]">
              Contact
            </p>

            <a
              href={whatsappLink(GENERAL_ENQUIRY_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/55 transition-colors hover:text-white"
            >
              WhatsApp · {WHATSAPP_DISPLAY}
            </a>
            <p className="mt-3 text-sm text-white/55">
              Available for orders &amp; celebrations
            </p>

            <p className="mb-3 mt-8 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D6B878]">
              Chat with us
            </p>

            <a
              href={whatsappLink(GENERAL_ENQUIRY_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Zahra's Cakes on WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-xs font-semibold transition-colors hover:border-[#D6B878] hover:text-[#D6B878]"
            >
              WA
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-[8px] uppercase tracking-[0.18em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Zahra&apos;s Cakes. All rights reserved.</p>
          <p>Handcrafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
