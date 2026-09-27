import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { SectorFocus } from "@/components/home/SectorFocus";
import { ClientNetworkMap } from "@/components/home/ClientNetworkMap";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <SectorFocus />
      <ClientNetworkMap />
      <ProcessStrip />
      <PortfolioPreview />
      <BlogPreview />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}