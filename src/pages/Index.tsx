import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Workflows from "@/components/Workflows";
import CustomDashboard from "@/components/CustomDashboard";
import CustomSolutions from "@/components/CustomSolutions";
import Mission from "@/components/Mission";
import Founder from "@/components/Founder";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsBar />
      <Services />
      <Workflows />
      <CustomDashboard />
      <Portfolio />
      <CustomSolutions />
      <Mission />
      <Founder />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
