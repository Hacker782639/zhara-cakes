import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "@/components/whatsapp/whatsapp-button";

export const metadata: Metadata = {
  title: {
    default: "Zahra's Cakes | Handcrafted Cakes & Desserts",
    template: "%s | Zahra's Cakes",
  },
  description:
    "Elegant handcrafted cakes and desserts made for life's most meaningful celebrations.",
  applicationName: "Zahra's Cakes",
  openGraph: {
    type: "website",
    siteName: "Zahra's Cakes",
    title: "Zahra's Cakes | Handcrafted Cakes & Desserts",
    description:
      "Elegant handcrafted cakes and desserts made for life's most meaningful celebrations.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Zahra's Cakes | Handcrafted Cakes & Desserts",
    description:
      "Elegant handcrafted cakes and desserts made for life's most meaningful celebrations.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
