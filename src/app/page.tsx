import { HeroSection } from "@/components/home/HeroSection";
import { IPShowcase } from "@/components/home/IPShowcase";
import { FeaturedIP } from "@/components/home/FeaturedIP";
import { StatsSection } from "@/components/home/StatsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IPShowcase />
      <FeaturedIP />
      <StatsSection />
    </>
  );
}
