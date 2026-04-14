import Header from '@/components/Header'
import SearchHero from '@/components/SearchHero'
import ServicesGrid from '@/components/ServicesGrid'
import Spotlight from '@/components/Spotlight'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SearchHero />
        <ServicesGrid />
        <Spotlight />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
