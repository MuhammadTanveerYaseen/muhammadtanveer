"use client";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    text: "AREEJFATIMA transformed our entire sales process. The custom dashboards and automation have saved us countless hours and increased our conversion rate by 340%.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    text: "Working with AREEJFATIMA was a game-changer. Her expertise in GoHighLevel is unmatched. Our lead generation has tripled since implementing her systems.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Digital Wellness",
    text: "The funnels built for us are simply incredible. Professional, high-converting, and exactly what we needed to scale our online business.",
    rating: 5
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Others Are <span className="text-primary">Saying</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl p-8 space-y-6 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <Star className="w-5 h-5 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground italic leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="pt-4 border-t border-border/30">
                <div className="font-semibold text-lg text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
