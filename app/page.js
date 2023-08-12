import Features from "./components/Features_comp";
import HowItWorks from "./components/howItWorks_comp";
import Hero from "./components/Hero";
import Testimonials from "./components/testimonials_comp";
import FinalCTA from "./components/FinalCTA_comp";
import Footer from "./components/Footer_comp";

export default function Home() {
  return (
    <div>
      <main>
        <div className="min-h-screen overflow-x-hidden">
          <Hero />
          <Features />
          <div className="mt-16">
            <HowItWorks />
          </div>
          <Testimonials />
          <div className="mt-16">
            <FinalCTA />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
