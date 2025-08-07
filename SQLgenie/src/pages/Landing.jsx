import Navbar from '../components/Navbar';
import Features from '../components/Features';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import SupportedDatabases from '../components/SupportedDatabases';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import ContactForm from '../components/ContactForm';
import DarkModeToggle from '../components/DarkModeToggle';


export default function Landing() {
  return (
    <>
    {/* <DarkModeToggle /> */}
      <Navbar />
      <Hero />
      <Features />
      <SupportedDatabases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Newsletter />
      <ContactForm />
      <CTA />
      <Footer />
    </>
  );
}
