import { Navbar } from "~/components/layout/navbar";
import { HeroSection } from "~/components/sections/hero-section";
import type { Route } from "./+types/home";
import { FeaturesSection } from "~/components/sections/features-section";
import { Footer } from "~/components/layout/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rockbit" },
    { name: "description", content: "Welcome to Rockbit!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="pt-[78px]">
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
