import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { SignatureDishes } from '@/components/SignatureDishes'
import { Menu } from '@/components/Menu'
import { Gallery } from '@/components/Gallery'
import { Reviews } from '@/components/Reviews'
import { Contact } from '@/components/Contact'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] text-[#f5f1e8]">
      <Navigation />
      <Hero />
      <About />
      <SignatureDishes />
      <Menu />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
