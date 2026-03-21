import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesBanner } from "@/components/services-banner"
import { AirlinesSection } from "@/components/airlines-section"
import { ServicesSection } from "@/components/services-section"
import { ExperienceSection } from "@/components/experience-section"
import { PopularAirports } from "@/components/popular-airports"
import { Footer } from "@/components/footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"

export default function Home() {
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />

      <main>
        <HeroSection />
        <ServicesBanner />
        <AirlinesSection />
        <ServicesSection />
        <ExperienceSection />
        <PopularAirports />
      </main>

      <Footer />
    </div>
  )
}
