import { BarChart3, ClipboardList } from "lucide-react";

const CustomSolutions = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Custom Dashboards */}
          <div className="glass-card rounded-3xl p-8 animate-fade-in hover:shadow-[0_0_40px_hsl(240_94%_49%/0.3)] transition-all">
            <div className="mb-6">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20">
                <BarChart3 className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">Custom Dashboards</h3>
            <p className="text-muted-foreground mb-6">
              Visualize your business metrics with beautifully designed, data-driven dashboards. 
              Track KPIs, monitor performance, and make informed decisions at a glance.
            </p>
            <div className="bg-muted/20 rounded-2xl p-6 border border-primary/10">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600" 
                alt="Dashboard analytics"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* Custom Forms / Surveys */}
          <div className="glass-card rounded-3xl p-8 animate-fade-in hover:shadow-[0_0_40px_hsl(240_94%_49%/0.3)] transition-all" style={{ animationDelay: "100ms" }}>
            <div className="mb-6">
              <div className="inline-flex p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
                <ClipboardList className="w-10 h-10 text-secondary" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">Custom Forms / Surveys</h3>
            <p className="text-muted-foreground mb-6">
              Create engaging forms and surveys that capture leads and gather valuable insights. 
              Fully customizable to match your brand and optimized for conversions.
            </p>
            <div className="bg-muted/20 rounded-2xl p-6 border border-secondary/10">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600" 
                alt="Custom forms"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;
