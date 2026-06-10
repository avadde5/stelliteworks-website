import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Approach />
        <Stats />
        <Clients />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
