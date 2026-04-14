import { HomeHero } from "@/components/home/home-hero";
import { HomeHighlights } from "@/components/home/home-highlights";
import { HomeSummary } from "@/components/home/home-summary";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeHighlights />
      <HomeSummary />
    </>
  );
}
