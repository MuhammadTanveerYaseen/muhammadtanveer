"use client";
import { Workflow, Database, LayoutDashboard, Zap, Mail, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Workflow,
    title: "Funnel Building",
    description: "High-converting sales funnels designed for maximum ROI",
    color: "primary"
  },
  {
    icon: Database,
    title: "CRM Setup",
    description: "Complete CRM configuration and optimization",
    color: "accent"
  },
  {
    icon: LayoutDashboard,
    title: "Custom Dashboard",
    description: "Tailored dashboards for your business metrics",
    color: "secondary"
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Streamline workflows with powerful automation",
    color: "primary"
  },
  {
    icon: Mail,
    title: "Email & SMS Campaigns",
    description: "Targeted campaigns that drive engagement",
    color: "accent"
  },
  {
    icon: Calendar,
    title: "Appointment Systems",
    description: "Seamless booking and scheduling solutions",
    color: "secondary"
  },
];

const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(265 85% 58% / 0.2), transparent 70%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Go HighLevel solutions to transform your business
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="glass-card rounded-2xl p-8 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Icon Container */}
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-${service.color}/20 border border-${service.color}/30 group-hover:border-${service.color}/50 transition-all duration-300`}>
                    <Icon className={`w-8 h-8 text-${service.color}`} />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className={`text-xl font-semibold mb-3 group-hover:text-${service.color} transition-all duration-300`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                  <div className={`absolute inset-0 bg-${service.color}/5 rounded-2xl blur-xl`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
