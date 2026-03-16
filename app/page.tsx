import Hero from "../components/Hero";
import HealthTicker from "../components/HealthTicker";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Conditions from "../components/Conditions";
import BeforeAfter from "../components/BeforeAfter";
import About from "../components/About";
import TrustSection from "../components/TrustSection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Appointment from "../components/Appointment";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <HealthTicker />
      <Stats />
      <Services />
      <Conditions />
      <BeforeAfter />
      <About />
      <TrustSection />
      <Testimonials />
      <FAQ />
      <Appointment />
      <Contact />
    </main>
  );
}
