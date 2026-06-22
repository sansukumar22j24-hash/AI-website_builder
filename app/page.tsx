import Navigation from "@/components/Navigation"
import CustomCursor from "@/components/CustomCursor"
import ScrollIndicator from "@/components/ScrollIndicator"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"
import GitHubStats from "@/components/GitHubStats"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <ScrollIndicator />
      <Navigation />
      
      <div className="pt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <GitHubStats />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
