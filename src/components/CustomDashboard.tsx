import { BarChart3, TrendingUp, PieChart, Activity } from "lucide-react";

const dashboardFeatures = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Monitor your business metrics in real-time with beautifully designed charts and graphs"
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "Track KPIs, conversion rates, and revenue growth all in one centralized dashboard"
  },
  {
    icon: PieChart,
    title: "Custom Reports",
    description: "Generate custom reports tailored to your specific business needs and goals"
  },
  {
    icon: Activity,
    title: "Live Data Updates",
    description: "Get instant updates as your data changes with live synchronization"
  }
];

const CustomDashboard = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Custom <span className="gradient-text">Dashboards</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visualize your business data with stunning, customizable dashboards built specifically for your needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Features */}
          <div className="space-y-6 animate-fade-in">
            {dashboardFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 hover:shadow-[0_0_40px_hsl(240_94%_49%/0.3)] transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right side - Dashboard Preview */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="glass-card rounded-3xl p-8 hover:shadow-[0_0_60px_hsl(240_94%_49%/0.4)] transition-all duration-500">
              <div className="space-y-6">
                {/* Dashboard mockup header */}
                <div className="flex items-center justify-between pb-4 border-b border-border/50">
                  <h3 className="text-2xl font-bold">Business Overview</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>

                {/* Dashboard mockup content */}
                <div className="space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/20 rounded-xl p-4 border border-primary/10">
                      <div className="text-sm text-muted-foreground mb-1">Total Revenue</div>
                      <div className="text-2xl font-bold text-primary">$127,500</div>
                      <div className="text-xs text-green-500 mt-1">↑ 23.5%</div>
                    </div>
                    <div className="bg-muted/20 rounded-xl p-4 border border-secondary/10">
                      <div className="text-sm text-muted-foreground mb-1">Conversions</div>
                      <div className="text-2xl font-bold text-secondary">1,234</div>
                      <div className="text-xs text-green-500 mt-1">↑ 18.2%</div>
                    </div>
                  </div>

                  {/* Chart mockup */}
                  <div className="bg-muted/20 rounded-xl p-6 border border-primary/10">
                    <div className="flex items-end justify-between h-32 space-x-2">
                      {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t-lg opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Lead Generation</span>
                        <span className="text-primary font-semibold">87%</span>
                      </div>
                      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full" style={{ width: '87%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Conversion Rate</span>
                        <span className="text-secondary font-semibold">72%</span>
                      </div>
                      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-secondary to-primary rounded-full" style={{ width: '72%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDashboard;
