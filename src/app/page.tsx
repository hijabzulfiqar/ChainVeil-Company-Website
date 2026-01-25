import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChainLogos from "@/components/ChainLogos";
import FeaturesCards from "@/components/FeaturesCards";
import PowerfulFeatures from "@/components/PowerfulFeatures";
import MarketMoves from "@/components/MarketMoves";
import Steps from "@/components/Steps";
import IndustryLeaders from "@/components/IndustryLeaders";
// import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />
      <Hero />
      <ChainLogos />
      <FeaturesCards />
      <PowerfulFeatures />
      <MarketMoves />
      <Steps />
      <IndustryLeaders />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
