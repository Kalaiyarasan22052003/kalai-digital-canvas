import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Hardware Technician",
      company: "Tech Zone",
      period: "IT Support Role",
      icon: Wrench,
      description: "Provided IT support and system maintenance services, including troubleshooting hardware issues and configuring infrastructure components.",
      responsibilities: [
        "System maintenance and troubleshooting",
        "Hardware configuration and setup",
        "Infrastructure support",
        "Technical problem resolution",
      ],
    },
    {
      title: "Business Executive",
      company: "Teshwa Cure Pharma",
      period: "Business Development",
      icon: Briefcase,
      description: "Gained valuable experience in market development and account management, developing strong communication and client relationship skills.",
      responsibilities: [
        "Market development initiatives",
        "Account management",
        "Client relationship building",
        "Business communication",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/50" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm tracking-wider uppercase mb-4 block">
            Work History
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world experience that has shaped my professional skills and work ethic.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-accent border-4 border-background hidden md:flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-accent-foreground" />
                </div>

                <div className="glass-card rounded-2xl p-8 md:ml-20 hover:scale-[1.01] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <exp.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-accent font-medium mb-3">{exp.company}</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {exp.responsibilities.map((resp) => (
                          <li key={resp} className="flex items-center gap-2 text-sm text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;