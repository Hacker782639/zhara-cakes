"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { whatsappLink } from "@/lib/whatsapp";

export default function CustomOrderPage() {
  const [submitted, setSubmitted] = useState(false);
  const [orderUrl, setOrderUrl] = useState("");

  function applyTodayAsMinimum(input: HTMLInputElement | null) {
    if (input) {
      input.min = new Date().toISOString().split("T")[0];
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const message = `Hello Zahra's Cakes! 🍰

I'd like to place a custom cake request.

Name: ${data.get("name")}
Phone / WhatsApp: ${data.get("phone")}
Occasion: ${data.get("occasion")}
Event date: ${data.get("date")}
Preferred flavour: ${data.get("flavour") || "Not specified"}
Cake size: ${data.get("size") || "Not specified"}

Cake details:
${data.get("details")}

Thank you!`;

    const whatsappUrl = whatsappLink(message);

    setOrderUrl(whatsappUrl);
    setSubmitted(true);

    const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!opened) {
      window.location.href = whatsappUrl;
    }
  }

  return (
    <main className="min-h-screen bg-[#FAFAF9] text-[#1C1917]">
      <Navbar />

      <section className="border-b border-[#D6D3D1] px-5 pb-16 pt-20 sm:px-10 lg:px-14 lg:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#A16207]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A16207]">
              Custom orders
            </p>
          </div>

          <h1 className="mt-7 max-w-4xl font-[family-name:var(--font-cormorant)] text-[clamp(4rem,9vw,8rem)] font-medium leading-[0.82] tracking-[-0.04em]">
            Tell us what
            <br />
            <span className="italic text-[#A16207]">you&apos;re dreaming.</span>
          </h1>

          <p className="mt-8 max-w-lg text-sm leading-7 text-[#57534E] sm:text-base">
            Every celebration is different. Share the details and we&apos;ll
            create something beautiful around your moment.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-[family-name:var(--font-cormorant)] text-4xl italic">
              Made especially for you.
            </p>

            <div className="mt-8 space-y-5 text-sm leading-7 text-[#57534E]">
              <p>
                Tell us about your occasion, preferred flavours, design ideas,
                and when you need your cake.
              </p>
              <p>
                We&apos;ll review your request and get back to you with the
                details.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-[#D6D3D1] bg-white p-5 sm:p-8 lg:p-10"
          >
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="flex min-h-[360px] flex-col items-center justify-center px-4 text-center sm:min-h-[420px]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#A16207] text-white">
                  <Check size={24} />
                </div>

                <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-4xl italic">
                  Request received.
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-6 text-[#57534E]">
                  Thank you. Your WhatsApp chat should be open with your request
                  ready to send — press send and Zahra&apos;s team will reply
                  with the details.
                </p>

                {orderUrl && (
                  <a
                    href={orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-3 border-b border-[#1C1917] pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-[#A16207] hover:text-[#A16207]"
                  >
                    WhatsApp didn&apos;t open? Tap here
                    <ArrowUpRight size={14} />
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#78716C] transition-colors hover:text-[#1C1917]"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                    Your name
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      className="mt-3 w-full border-b border-[#A8A29E] bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-[#A16207]"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                    Phone / WhatsApp
                    <input
                      required
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      className="mt-3 w-full border-b border-[#A8A29E] bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-[#A16207]"
                      placeholder="+234..."
                    />
                  </label>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                    Occasion
                    <select
                      required
                      name="occasion"
                      className="mt-3 w-full border-b border-[#A8A29E] bg-transparent px-0 py-3 text-sm outline-none focus:border-[#A16207]"
                    >
                      <option value="">Select occasion</option>
                      <option>Birthday</option>
                      <option>Wedding</option>
                      <option>Anniversary</option>
                      <option>Baby celebration</option>
                      <option>Corporate</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                    Event date
                    <input
                      required
                      type="date"
                      name="date"
                      ref={applyTodayAsMinimum}
                      className="mt-3 w-full border-b border-[#A8A29E] bg-transparent px-0 py-3 text-sm outline-none focus:border-[#A16207]"
                    />
                  </label>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.16em]">
                    Preferred flavour
                  <input
                    name="flavour"
                    className="mt-3 w-full border-b border-[#A8A29E] bg-transparent px-0 py-3 text-sm outline-none focus:border-[#A16207]"
                    placeholder="Chocolate, vanilla, red velvet..."
                  />
                  </label>

                  <label className="block text-[10px] font-semibold uppercase tracking-[0.16em]">
                    Cake size
                    <select
                      name="size"
                      className="mt-3 w-full border-b border-[#A8A29E] bg-transparent px-0 py-3 text-sm outline-none focus:border-[#A16207]"
                    >
                      <option value="">Select size</option>
                      <option>6 inch</option>
                      <option>8 inch</option>
                      <option>10 inch</option>
                      <option>12 inch</option>
                      <option>Custom size</option>
                    </select>
                  </label>
                </div>

                <label className="mt-8 block text-[10px] font-semibold uppercase tracking-[0.16em]">
                  Tell us about your cake
                  <textarea
                    required
                    name="details"
                    rows={5}
                    className="mt-3 w-full resize-none border border-[#D6D3D1] bg-[#FAFAF9] p-4 text-sm leading-6 outline-none focus:border-[#A16207]"
                    placeholder="Size, colours, design, message on the cake, budget..."
                  />
                </label>

                <button
                  type="submit"
                  className="group mt-8 flex w-full cursor-pointer items-center justify-center gap-3 bg-[#1C1917] px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#A16207]"
                >
                  Send request
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
