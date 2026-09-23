import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Orders",
  description:
    "Design a custom cake with Zahra's Cakes — share your occasion, flavours and details and we'll create something beautiful for your celebration.",
};

export default function CustomOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
