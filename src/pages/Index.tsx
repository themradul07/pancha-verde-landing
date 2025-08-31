import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutPanchakarma from "@/components/AboutPanchakarma";
import TherapiesSection from "@/components/TherapiesSection";
import TherapistsSection from "@/components/TherapistsSection";
import ConsultationSection from "@/components/ConsultationSection";
import CentersSection from "@/components/CentersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen">
      
      <main>
        <HeroSection />
        <AboutPanchakarma />
        <TherapiesSection />
        <TherapistsSection />
        <ConsultationSection />
        <CentersSection />
        <TestimonialsSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
      </>
  );
};

export default Index;
