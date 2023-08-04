import Image from "next/image";
import Testimonials from "./components/testimonials_comp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Testimonials />
    </main>
  );
}
