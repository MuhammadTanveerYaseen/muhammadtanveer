import { Workflow, GitBranch, Repeat, CheckCircle2 } from "lucide-react";

const workflows = [
  {
    icon: Workflow,
    title: "Lead Capture Workflows",
    description: "Automatically capture and qualify leads through intelligent form submissions and multi-step funnels.",
    features: ["Smart form routing", "Lead scoring", "Auto-qualification"]
  },
  {
    icon: GitBranch,
    title: "Sales Pipeline Automation",
    description: "Move prospects through your sales pipeline automatically based on their actions and engagement.",
    features: ["Stage transitions", "Task automation", "Deal tracking"]
  },
  {
    icon: Repeat,
    title: "Follow-Up Sequences",
    description: "Never miss a follow-up with automated email and SMS sequences triggered by customer behavior.",
    features: ["Email automation", "SMS campaigns", "Behavior triggers"]
  },
  {
    icon: CheckCircle2,
    title: "Appointment Booking",
    description: "Streamline your scheduling with automated appointment booking and reminder workflows.",
    features: ["Calendar sync", "Auto reminders", "Booking confirmations"]
  }
];

const Workflows = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="gradient-text">Workflow Automation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Automate your entire business process from lead capture to conversion with intelligent workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {workflows.map((workflow, index) => {
            const Icon = workflow.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 hover:shadow-[0_0_50px_hsl(240_94%_49%/0.4)] transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {workflow.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {workflow.description}
                </p>

                <div className="space-y-2">
                  {workflow.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Workflows;
