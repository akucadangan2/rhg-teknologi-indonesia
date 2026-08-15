import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { SectorFocus } from "@/components/home/SectorFocus";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { LegalCard } from "@/components/home/LegalCard";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <SectorFocus />
      <ProcessStrip />
      <PortfolioPreview />
      <BlogPreview />
      <TestimonialsSection />
      <LegalCard />
      <ContactCTA />
    </>
  );
}