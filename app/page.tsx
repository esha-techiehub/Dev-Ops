import { Hero } from "@/components/home/hero";
import { StatsSection } from "@/components/home/stats-section";
import { ModulesSection } from "@/components/home/modules-section";
import { FeaturesSection } from "@/components/home/features-section";
import { RoadmapSection } from "@/components/home/roadmap-section";
import { CTASection } from "@/components/home/cta-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <FeaturesSection />
        <ModulesSection />
        <RoadmapSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
