import HeroSection from "@/components/pages/home/HeroSection";
import { FeaturedProductsSection } from "@/components/pages/home/ProductsSection";
import { ServiceSection } from "@/components/pages/home/ServiceSection";
import { SubscribeSection } from "@/components/pages/home/SubscribeSection";
import { TestimonialSection } from "@/components/pages/home/TestimonialSection";
import { StatsSection } from "@/components/pages/home/StatsSection";
import { FAQSection } from "@/components/pages/home/FAQSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <FeaturedProductsSection />
      <StatsSection />
      <TestimonialSection />
      <FAQSection />
      <SubscribeSection />
    </div>
  );
}
