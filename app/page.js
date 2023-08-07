import Image from "next/image";
import Nav from "./components/Nav_comp";
import Testimonials from "./components/testimonials_comp";

export default function Home() {
  return (
    <div className="bg-testimonials_bg">
      <Nav />
      <Testimonials />
    </div>
  );
}
