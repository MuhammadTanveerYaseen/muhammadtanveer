import { Bot, MessageCircle, Video, Phone } from "lucide-react";

const features = [
  { icon: Bot, title: "Automation", description: "Streamline your processes" },
  { icon: MessageCircle, title: "Follow-Up", description: "Never miss a lead" },
  { icon: Video, title: "Webinar Workflows", description: "Automated webinar funnels" },
  { icon: Phone, title: "Cold Caller Integration", description: "Smart outreach systems" },
];

const Mission = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transform Your Ideas Into{" "}
            <span className="gradient-text">High-Converting Funnels</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We help businesses automate their operations and scale rapidly using the power of GoHighLevel. 
            From lead generation to customer retention, we build systems that work 24/7 for your success.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="glass-card rounded-2xl p-6 hover:shadow-[0_0_40px_hsl(240_94%_49%/0.3)] transition-all hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
