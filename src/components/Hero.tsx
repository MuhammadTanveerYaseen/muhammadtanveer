import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
const heroCharacterSrc = "download.png";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Go High Level</span>
                <br />
                Services by{" "}
                <span className="text-primary">Muhammad Tanveer</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Specifically for your High Level.
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                We build and integrate on: GHL, ClickFunnels, Systeme.io, Kajabi, Kartra,
                n8n, Zapier, and Make.com
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-full shadow-[0_0_40px_hsl(240_94%_49%/0.3)] hover:shadow-[0_0_60px_hsl(240_94%_49%/0.5)] transition-all">
                <a href="tel:+923236229684" className="flex items-center">
                  Call
                  <Phone className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 border-primary/50 hover:bg-primary/10">
                <a href="https://wa.me/923236229684" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  WhatsApp
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right content - Character */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img 
                src={heroCharacterSrc} 
                alt="Professional business consultant" 
                className="relative z-10 w-full max-w-lg md:max-w-xl lg:max-w-2xl animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
