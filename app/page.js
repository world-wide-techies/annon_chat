
import Footer from "./components/Footer_comp";
import HowItWorks from "./components/howItWorks_comp";
import Testimonials from "./components/testimonials_comp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HowItWorks />
      <Footer />
      <Testimonials/>
      {/* <Features/> */}
    </main>
  );
}
