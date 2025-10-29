"use client";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Workflows from "@/components/Workflows";
import CustomDashboard from "@/components/CustomDashboard";
import Mission from "@/components/Mission";
import Founder from "@/components/Founder";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import SurveyShowcase from "@/components/SurveyShowcase";
import FormUpdateShowcase from "@/components/FormUpdateShowcase";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsBar />
      <Services />
      <Portfolio />
      <Workflows />
      <CustomDashboard />
      <SurveyShowcase />
      <FormUpdateShowcase />
      <Mission />
      <Founder />
      <Testimonials />
      <Footer />
    </div>
  );
}


