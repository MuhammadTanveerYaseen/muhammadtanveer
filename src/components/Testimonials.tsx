import { Star, Play } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    text: "JK Funnels transformed our entire sales process. The custom dashboards and automation have saved us countless hours and increased our conversion rate by 340%.",
    rating: 5,
    videoThumb: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    text: "Working with Joshan was a game-changer. His expertise in GoHighLevel is unmatched. Our lead generation has tripled since implementing his systems.",
    rating: 5,
    videoThumb: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Digital Wellness",
    text: "The funnels JK Funnels built for us are simply incredible. Professional, high-converting, and exactly what we needed to scale our online business.",
    rating: 5,
    videoThumb: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400"
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Others Are <span className="gradient-text">Saying</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-8 space-y-6 hover:shadow-[0_0_40px_hsl(240_94%_49%/0.3)] transition-all hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Video thumbnail */}
              <div className="relative group cursor-pointer">
                <img 
                  src={testimonial.videoThumb}
                  alt={`${testimonial.name} testimonial`}
                  className="w-full aspect-video object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground italic">"{testimonial.text}"</p>

              {/* Author */}
              <div>
                <div className="font-semibold text-lg">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
