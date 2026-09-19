import { HeroSection } from '@/components/sections/hero-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { FeaturedEquipmentSection } from '@/components/sections/featured-equipment-section';
import { CTASection } from '@/components/sections/cta-section';
import { allListings } from '@/lib/listings';

export default function Home() {
  const featured = allListings.filter((l) => l.status === 'available').slice(0, 5);

  return (
    <div className="flex flex-col">
      <HeroSection />
      <HowItWorksSection />
      <FeaturedEquipmentSection listings={featured} />
      <CTASection />
    </div>
  );
}
