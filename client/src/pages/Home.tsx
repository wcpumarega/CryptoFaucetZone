import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Cryptocurrencies from "@/components/Cryptocurrencies";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import PaymentMethods from "@/components/PaymentMethods";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Cryptocurrencies />
        <HowItWorks />
        <CTA />
        <PaymentMethods />
      </main>
      <Footer />
    </div>
  );
}
