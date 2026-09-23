import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { CakeCollection } from "@/components/collection/cake-collection";
import { Story } from "@/components/story/story";
import { Footer } from "@/components/footer/footer";
import { Gifts } from "@/components/gifts/gifts";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] text-[#0C0A09]">
      <Navbar />
      <Hero />
      <CakeCollection />
      <Story />
      <Gifts />
      <Footer />
    </main>
  );
}
