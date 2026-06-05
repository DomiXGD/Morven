import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { GsapNavbar } from "@/components/navbar";
import { PlatformSection } from "@/components/platform-section";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { GsapSection, GsapSectionsContainer } from "@/components/gsap-sections";

export default function HomePage() {
  return (
    <>
      <GsapNavbar />
      <GsapSectionsContainer>
        <GsapSection id="inicio">
          <HeroSection />
        </GsapSection>

        <GsapSection id="platform">
          <PlatformSection />
        </GsapSection>

        <GsapSection id="about">
          <AboutSection />
        </GsapSection>

        <GsapSection id="services">
          <ServicesSection />
        </GsapSection>

        <GsapSection id="process">
          <ProcessSection />
        </GsapSection>

        <GsapSection id="contact">
          <ContactSection />
        </GsapSection>

        <GsapSection id="footer">
          <Footer />
        </GsapSection>
      </GsapSectionsContainer>
    </>
  );
}
