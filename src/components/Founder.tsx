import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import founderImage from "@/assets/founder-joshan.jpg";

const Founder = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6 animate-fade-in">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Hi there, I'm <span className="gradient-text">Muhammad Tanveer!</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  As a certified GoHighLevel Expert and Funnel Strategist, I've helped hundreds of businesses 
                  transform their marketing and sales processes. With over 5 years of experience in digital marketing 
                  and automation, I specialize in creating systems that don't just look good—they convert.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My passion lies in building high-converting funnels, setting up powerful automations, and 
                  creating custom dashboards that give you complete control over your business metrics. 
                  Let's work together to take your business to the next level.
                </p>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 py-6 text-lg shadow-[0_0_40px_hsl(240_94%_49%/0.3)]">
                Get in Touch
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl rounded-full" />
                <img 
                  src={founderImage} 
                  alt="Muhammad Tanveer - GoHighLevel Expert"
                  className="relative z-10 w-full max-w-sm rounded-3xl shadow-2xl border-4 border-primary/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
