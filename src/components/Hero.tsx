"use client";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background with Solid Colors */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(230 30% 6%), hsl(230 30% 8%))'
        }}
      />

      {/* Animated Mesh Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse"
          style={{
            background: 'hsl(265 85% 58% / 0.25)',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse"
          style={{
            background: 'hsl(190 95% 55% / 0.2)',
            animation: 'float 10s ease-in-out infinite reverse'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium"
                >
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-primary font-semibold">Professional Automation Services</span>
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <span className="text-primary">Go High Level</span>
                  <br />
                  <span className="text-foreground">Services by</span>{" "}
                  <span className="text-accent">AREEJFATIMA</span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Transform your business with{" "}
                  <span className="text-primary font-medium">powerful automation</span>{" "}
                  and seamless integrations
                </motion.p>

                <motion.p
                  className="text-base md:text-lg text-muted-foreground max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Expert integrations for GHL, ClickFunnels, Systeme.io, Kajabi, Kartra, n8n, Zapier, and Make.com
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 shadow-[var(--glow-primary)] text-lg px-10 py-7 rounded-full transition-all duration-300 group border-0"
                  >
                    <a href="tel:+923236229684" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Call Now
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="glass-button text-lg px-10 py-7 rounded-full"
                  >
                    <a
                      href="https://wa.me/923236229684"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right: Stats Card */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="relative glass-card p-8 rounded-3xl"
                whileHover={{
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* Glass Card Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">Premium Services</h3>
                      <p className="text-muted-foreground">Automation Excellence</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Projects Completed", value: "500+" },
                      { label: "Client Satisfaction", value: "99%" },
                      { label: "Years Experience", value: "5+" },
                    ].map((stat, idx) => (
                      <motion.div
                        key={idx}
                        className="flex justify-between items-center p-4 rounded-xl bg-background/30"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                      >
                        <span className="text-muted-foreground">{stat.label}</span>
                        <span className="text-2xl font-bold text-primary">{stat.value}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative Glow */}
                  <div className="absolute -inset-1 bg-primary/10 rounded-3xl blur-xl -z-10 opacity-50" />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-primary/20 backdrop-blur-sm"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-secondary/15 backdrop-blur-sm"
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
