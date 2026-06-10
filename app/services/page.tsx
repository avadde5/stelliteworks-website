import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import Pillars from "@/components/Pillars";
import Offerings from "@/components/Offerings";
import Engagements from "@/components/Engagements";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services — SAP AMS, Implementations & Migrations",
  description:
    "Stellite Works' SAP services: managed Application Management Services (AMS), S/4HANA implementations and migrations, EWM, FI/CO, and the full SAP stack.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <Pillars />
        <Offerings />
        <Engagements />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
