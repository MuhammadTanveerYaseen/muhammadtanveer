"use client";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border/30 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(265 85% 58% / 0.3), transparent 70%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-[var(--glow-primary)]">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">AREEJFATIMA</span>
            </div>
            <p className="text-muted-foreground">
              Professional Go HighLevel services to transform your business with high-converting funnels and automation.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {["Services", "Portfolio", "About", "Testimonials"].map((link, idx) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">Get in Touch</h3>
            <div className="space-y-3">
              <motion.a
                href="mailto:areejfatima1728@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>areejfatima1728@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+923236229684"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>+92 323 6229684</span>
              </motion.a>

              {/* Social Links */}
              <div className="flex space-x-3 pt-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full glass-card flex items-center justify-center group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border/30 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-muted-foreground">
            © 2025 <span className="text-primary font-semibold">AREEJFATIMA</span>. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
