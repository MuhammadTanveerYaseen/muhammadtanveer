import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cosmic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(240_80%_10%)] via-[hsl(240_94%_20%)] to-[hsl(195_100%_15%)]" />
      
      {/* Animated stars/particles effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-40 w-1 h-1 bg-secondary rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-40 left-60 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-200" />
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse delay-300" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Centered content */}
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Go High Level</span>
                <br />
                Services by{" "}
                <span className="text-primary">AREEJFATIMA</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
                Transform your business with powerful automation and integrations
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
                Expert integrations for GHL, ClickFunnels, Systeme.io, Kajabi, Kartra, n8n, Zapier, and Make.com
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-10 py-7 rounded-full shadow-[0_0_40px_hsl(240_94%_49%/0.3)] hover:shadow-[0_0_60px_hsl(240_94%_49%/0.5)] transition-all group">
                <a href="tel:+923236229684" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-full border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all">
                <a href="https://wa.me/923236229684" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
