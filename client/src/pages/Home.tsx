import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import HealthBenefitsSection from "@/components/HealthBenefitsSection";
import ProductsSection from "@/components/ProductsSection";
import AppointmentSection from "@/components/AppointmentSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TreatmentsSection />
        <HealthBenefitsSection />
        <ProductsSection />
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  );
}
