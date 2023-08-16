import Features from "./components/Features_comp";
import HowItWorks from "./components/howItWorks_comp";
import Hero from "./components/Hero";
import Testimonials from "./components/testimonials_comp";
import FinalCTA from "./components/FinalCTA_comp";
import Footer from "./components/Footer_comp";
import OnboardingComp from "./components/ChatOnboarding_comp";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center overflow-x-hidden">
      <div className="max-w-screen-2xl">
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
  );
}
