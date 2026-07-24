import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './sections/HeroSection'
import FeaturedWorkSection from './sections/FeaturedWorkSection'
import AboutSection from './sections/AboutSection'
import CoreSkillsSection from './sections/CoreSkillsSection'
import ToolsSection from './sections/ToolsSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedWorkSection />
        <AboutSection />
        <CoreSkillsSection />
        <ToolsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
