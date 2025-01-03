import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section';
import { EquipmentSection } from '@/components/sections/equipment-section';
import { ContactSection } from '@/components/sections/contact-section';
import { StatsSection } from '@/components/sections/stats-section';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <EquipmentSection />
      <ContactSection />
      <Footer />
    </>
  );
}
