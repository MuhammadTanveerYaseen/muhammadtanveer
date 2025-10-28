import { MapPin, Calendar, Briefcase, Users } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const stats = [
  { icon: MapPin, value: 2, label: "Locations", suffix: "" },
  { icon: Calendar, value: 5, label: "Years of Experience", suffix: "" },
  { icon: Briefcase, value: 500, label: "Projects", suffix: "" },
  { icon: Users, value: 250, label: "Satisfied Clients", suffix: "+" },
];

const CountUpAnimation = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={countRef} className="text-4xl font-bold gradient-text">
      {count}{suffix}
    </div>
  );
};

const StatsBar = () => {
  return (
    <section className="relative py-12 -mt-16 z-20">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-3xl p-8 shadow-[0_8px_32px_hsl(0_0%_0%/0.4)] hover:shadow-[0_0_50px_hsl(240_94%_49%/0.4)] transition-all duration-500">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center space-y-3 animate-fade-in hover:scale-110 transition-transform duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center">
                    <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 hover:rotate-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <CountUpAnimation end={stat.value} suffix={stat.suffix} />
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
