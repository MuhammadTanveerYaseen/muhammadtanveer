import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Websites", "Sales Funnels"];

const projects = [
  { id: 1, category: "Websites", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400" },
  { id: 2, category: "Sales Funnels", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" },
  { id: 3, category: "Websites", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400" },
  { id: 4, category: "Sales Funnels", image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=400" },
  { id: 5, category: "Websites", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400" },
  { id: 6, category: "Sales Funnels", image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400" },
  { id: 7, category: "Websites", image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400" },
  { id: 8, category: "Sales Funnels", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400" },
  { id: 9, category: "Websites", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:shadow-[0_0_40px_hsl(240_94%_49%/0.3)] transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`Project ${project.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-sm text-primary font-medium">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
