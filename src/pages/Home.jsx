import Hero from '../components/Hero'
import { ServicesOverview, WhyChooseUs, HowItWorks, Testimonials, FinalCTA } from '../components/Sections'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-white text-left">
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}
