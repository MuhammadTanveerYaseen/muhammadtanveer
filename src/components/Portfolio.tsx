"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Websites", "Sales Funnels"];

const projects = [
  { id: 1, category: "Sales Funnels", image: "/funnel/66eed4d621c7535180c94105.png" },
  { id: 2, category: "Sales Funnels", image: "/funnel/66eed5314b96a9778ec3c744.png" },
  { id: 3, category: "Sales Funnels", image: "/funnel/66eed55b799dd51c094ab2a6.png" },
  { id: 4, category: "Sales Funnels", image: "/funnel/66eed5b03b00e27dabed5d54.png" },
  { id: 5, category: "Sales Funnels", image: "/funnel/66eed5e9acfd664e0577524f.png" },
  { id: 6, category: "Sales Funnels", image: "/funnel/66eed6113b00e277d4ed5d7b.png" },
  { id: 7, category: "Sales Funnels", image: "/funnel/66eed6432233f86a70d2a39b.png" },
  { id: 8, category: "Sales Funnels", image: "/funnel/66eed671d334053bab2dcde9.png" },
  { id: 9, category: "Sales Funnels", image: "/funnel/66eed68facfd66fdaf77527d.png" },
  { id: 10, category: "Sales Funnels", image: "/funnel/66f139890b3af8f0904e19c4.png" },
  { id: 11, category: "Sales Funnels", image: "/funnel/66f1398982215a6c2dcb2cc8.png" },
  { id: 12, category: "Sales Funnels", image: "/funnel/66f13f370b3af80c444e1f6f.png" },
  { id: 13, category: "Sales Funnels", image: "/funnel/66f140bc0b3af801bd4e205f.png" },
  { id: 14, category: "Sales Funnels", image: "/funnel/66f140f3c1f655784803952a.png" },
  { id: 15, category: "Sales Funnels", image: "/funnel/66f144210b3af849b54e21e7.png" },
  { id: 16, category: "Sales Funnels", image: "/funnel/66f144d65843468f6c170e08.png" },
  { id: 17, category: "Sales Funnels", image: "/funnel/66f149e60b3af886f14e2448.png" },
  { id: 18, category: "Sales Funnels", image: "/funnel/66f14d3210ff73715cc539c8.png" },
  { id: 19, category: "Sales Funnels", image: "/funnel/66f14d3282215a052bcb3a04.png" },
  { id: 20, category: "Sales Funnels", image: "/funnel/66f156340b3af8335b4e3230.png" },
  { id: 21, category: "Sales Funnels", image: "/funnel/66f15634b841ec0a4dbb44ca.png" },
  { id: 22, category: "Sales Funnels", image: "/funnel/66f15c7782215a901bcb4f26.png" },
  { id: 23, category: "Sales Funnels", image: "/funnel/66f1649671987e1b47833d95.png" },
  { id: 24, category: "Sales Funnels", image: "/funnel/66f2c16a8f86de4a8f4faf62.png" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 relative overflow-visible">
      <div className="container mx-auto px-4 overflow-visible">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Funnels / <span className="gradient-text">Websites</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Browse our portfolio of successful projects
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-full px-6 ${
                  activeCategory === category 
                    ? "bg-primary hover:bg-primary/90 shadow-[0_0_20px_hsl(240_94%_49%/0.3)]" 
                    : "border-primary/30 hover:bg-primary/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid layout to avoid any cropping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-start content-start overflow-visible">
          {filteredProjects.map((project, index) => (
            <a
              key={project.id}
              href={`/viewer?src=${encodeURIComponent(project.image)}`}
              className="group block hover:shadow-[0_0_40px_hsl(240_94%_49%/0.3)] transition-all duration-300 animate-fade-in overflow-visible min-h-0"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                loading="lazy"
                decoding="async"
                className="block h-auto max-w-full align-top"
                style={{ maxHeight: "none" }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
