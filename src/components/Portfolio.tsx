"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const categories = ["All", "Websites", "Sales Funnels"];

const projects = [
  { id: 1, category: "Sales Funnels", image: "/funnel/66eed4d621c7535180c94105.png" },
  { id: 2, category: "Sales Funnels", image: "/funnel/66eed5314b96a9778ec3c744.png" },
  { id: 3, category: "Websites", image: "/funnel/66eed55b799dd51c094ab2a6.png" },
  { id: 4, category: "Sales Funnels", image: "/funnel/66eed5b03b00e27dabed5d54.png" },
  { id: 5, category: "Websites", image: "/funnel/66eed5e9acfd664e0577524f.png" },
  { id: 6, category: "Sales Funnels", image: "/funnel/66eed6113b00e277d4ed5d7b.png" },
  { id: 7, category: "Sales Funnels", image: "/funnel/66eed6432233f86a70d2a39b.png" },
  { id: 8, category: "Websites", image: "/funnel/66eed671d334053bab2dcde9.png" },
  { id: 9, category: "Sales Funnels", image: "/funnel/66eed68facfd66fdaf77527d.png" },
  { id: 10, category: "Sales Funnels", image: "/funnel/66f139890b3af8f0904e19c4.png" },
  { id: 11, category: "Websites", image: "/funnel/66f1398982215a6c2dcb2cc8.png" },
  { id: 12, category: "Sales Funnels", image: "/funnel/66f13f370b3af80c444e1f6f.png" },
  { id: 13, category: "Sales Funnels", image: "/funnel/66f140bc0b3af801bd4e205f.png" },
  { id: 14, category: "Websites", image: "/funnel/66f140f3c1f655784803952a.png" },
  { id: 15, category: "Sales Funnels", image: "/funnel/66f144210b3af849b54e21e7.png" },
  { id: 16, category: "Sales Funnels", image: "/funnel/66f144d65843468f6c170e08.png" },
  { id: 17, category: "Websites", image: "/funnel/66f149e60b3af886f14e2448.png" },
  { id: 18, category: "Sales Funnels", image: "/funnel/66f14d3210ff73715cc539c8.png" },
  { id: 19, category: "Sales Funnels", image: "/funnel/66f14d3282215a052bcb3a04.png" },
  { id: 20, category: "Websites", image: "/funnel/66f156340b3af8335b4e3230.png" },
  { id: 21, category: "Sales Funnels", image: "/funnel/66f15634b841ec0a4dbb44ca.png" },
  { id: 22, category: "Sales Funnels", image: "/funnel/66f15c7782215a901bcb4f26.png" },
  { id: 23, category: "Websites", image: "/funnel/66f1649671987e1b47833d95.png" },
  { id: 24, category: "Sales Funnels", image: "/funnel/66f2c16a8f86de4a8f4faf62.png" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(190 95% 55% / 0.2), transparent 70%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Funnels / <span className="text-primary">Websites</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Browse our portfolio of successful projects
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setActiveCategory(category)}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={`rounded-full px-6 transition-all duration-300 ${activeCategory === category
                      ? "bg-primary hover:bg-primary/90 shadow-[var(--glow-primary)] border-0"
                      : "glass-button"
                    }`}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative block overflow-hidden rounded-2xl cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -8 }}
                onClick={() => setLightboxImage(project.image)}
              >
                {/* Image Container with Overlay */}
                <div className="relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <img
                    src={project.image}
                    alt={`Project ${project.id}`}
                    loading="lazy"
                    decoding="async"
                    className="block w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="text-primary font-semibold text-lg"
                    >
                      Click to View Full Image
                    </motion.div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-colors z-10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-6 h-6 text-foreground" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              className="max-w-7xl max-h-[90vh] overflow-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Full size preview"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
