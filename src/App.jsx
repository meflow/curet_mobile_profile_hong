import HeroSection from './components/HeroSection/HeroSection'
import ContactSection from './components/ContactSection/ContactSection'
import IntroSection from './components/IntroSection/IntroSection'
import WellnessSection from './components/WellnessSection/WellnessSection'
import ServicesSection from './components/ServicesSection/ServicesSection'
import FooterBanner from './components/FooterBanner/FooterBanner'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.card}>
      <HeroSection />
      <ContactSection />
      <IntroSection />
      <WellnessSection />
      <ServicesSection />
      <FooterBanner />
    </div>
  )
}

export default App
