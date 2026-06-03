import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { PlatformSection } from "@/components/platform-section";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PlatformSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
