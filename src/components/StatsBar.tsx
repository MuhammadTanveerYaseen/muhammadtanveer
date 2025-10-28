import { MapPin, Calendar, Briefcase, Users } from "lucide-react";

const stats = [
  { icon: MapPin, value: "2", label: "Locations" },
  { icon: Calendar, value: "5", label: "Years of Experience" },
  { icon: Briefcase, value: "500", label: "Projects" },
  { icon: Users, value: "250", label: "Satisfied Clients" },
];

const StatsBar = () => {
  return (
    <section className="relative py-12 -mt-16 z-20">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-3xl p-8 shadow-[0_8px_32px_hsl(0_0%_0%/0.4)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center space-y-3 animate-fade-in hover:scale-105 transition-transform"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center">
                    <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
