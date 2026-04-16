import FloatingNavbar from '@/components/FloatingNavbar'
import HeroSection from '@/components/HeroSection'
import FeaturedTaxCard from '@/components/FeaturedTaxCard'
import ServicesGrid from '@/components/ServicesGrid'
import Spotlight from '@/components/Spotlight'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <FloatingNavbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedTaxCard />
        <ServicesGrid />
        <Spotlight />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
