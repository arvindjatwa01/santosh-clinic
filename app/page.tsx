import Navbar from "../components/Navbar";
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
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import MobileStickyCTA from "../components/MobileStickyCTA";
import ExitIntent from "../components/ExitIntent";

export default function Home() {
  return (
    <main>
      <Navbar />
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
      <Footer />
      <FloatingButtons />
      <MobileStickyCTA />
      <ExitIntent />
    </main>
  );
}
