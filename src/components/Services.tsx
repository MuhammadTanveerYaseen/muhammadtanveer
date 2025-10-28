import { Workflow, Database, LayoutDashboard, Zap, Mail, Calendar } from "lucide-react";

const services = [
  { icon: Workflow, title: "Funnel Building", description: "High-converting sales funnels designed for maximum ROI" },
  { icon: Database, title: "CRM Setup", description: "Complete CRM configuration and optimization" },
  { icon: LayoutDashboard, title: "Custom Dashboard", description: "Tailored dashboards for your business metrics" },
  { icon: Zap, title: "Automation", description: "Streamline workflows with powerful automation" },
  { icon: Mail, title: "Email & SMS Campaigns", description: "Targeted campaigns that drive engagement" },
  { icon: Calendar, title: "Appointment Systems", description: "Seamless booking and scheduling solutions" },
];

const Services = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Go HighLevel solutions to transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="glass-card rounded-2xl p-8 hover:shadow-[0_0_40px_hsl(240_94%_49%/0.3)] transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
