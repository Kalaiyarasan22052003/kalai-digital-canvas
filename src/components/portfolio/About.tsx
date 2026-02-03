import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Sparkles } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: "MCA Student",
      description: "Bharathiar University",
      detail: "CGPA: 7.7",
    },
    {
      icon: Target,
      title: "Career Focus",
      description: "IT Support & Software",
      detail: "Entry-level roles",
    },
    {
      icon: Sparkles,
      title: "Learning Mindset",
      description: "Eager to grow",
      detail: "Industry experience",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Passionate About Technology
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            As an MCA student at Bharathiar University, I'm enthusiastic about entry-level 
            roles where I can learn, contribute, and build a strong foundation in the IT industry. 
            My academic journey and hands-on projects have equipped me with practical skills 
            and a problem-solving mindset.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card p-8 rounded-2xl text-center hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground mb-1">{item.description}</p>
              <span className="text-sm font-medium text-accent">{item.detail}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;