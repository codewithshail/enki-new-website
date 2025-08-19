'use client'
import BrandClientsMarquee from "@/components/BrandClientsMarquee";
import ContactSection from "@/components/ContactSection";
import DesignInnovation from "@/components/DesignInnovation";
import EnkiBanner from "@/components/EnkiBanner";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";
import StatsPanel from "@/components/StatsPanel";
import { JSX } from "react";

export default function LandingPage(): JSX.Element {
  const scrollToContact = (): void => {
    const contactElement = document.getElementById('contact-section');
    if (contactElement) {
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      <EnkiBanner />
      <StatsPanel onGetInTouchClick={scrollToContact} />
      <DesignInnovation />
      <ServicesGrid />
      <BrandClientsMarquee />
      <ContactSection />
      <Footer />
    </main>
  )
}