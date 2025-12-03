"use client";
import { MapPin, Calendar, Briefcase, Users } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  { icon: MapPin, value: 2, label: "Locations", suffix: "" },
  { icon: Calendar, value: 5, label: "Years of Experience", suffix: "+" },
  { icon: Briefcase, value: 500, label: "Projects", suffix: "+" },
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
    <div ref={countRef} className="text-4xl font-bold text-primary">
      {count}{suffix}
    </div>
  );
};

const StatsBar = () => {
  return (
    <section className="relative py-12 -mt-16 z-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center space-y-3 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex justify-center">
                    <motion.div
                      className="p-3 rounded-2xl bg-primary/20 border border-primary/30 group-hover:border-primary/50 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-primary" />
                    </motion.div>
                  </div>
                  <div>
                    <CountUpAnimation end={stat.value} suffix={stat.suffix} />
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
