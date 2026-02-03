import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kalai10835@gmail.com",
      href: "mailto:kalai10835@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 93446 90238",
      href: "tel:+919344690238",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm actively seeking entry-level opportunities in IT support and software development. 
            Feel free to reach out if you'd like to discuss potential collaborations or opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="glass-card flex items-center gap-4 p-5 rounded-xl hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="glass-card flex items-center gap-4 p-5 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-semibold text-foreground">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex gap-3 pt-4"
            >
              <Button
                size="lg"
                variant="outline"
                className="flex-1 gap-2 rounded-xl border-border hover:bg-muted"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 gap-2 rounded-xl border-border hover:bg-muted"
              >
                <Github className="w-5 h-5" />
                GitHub
              </Button>
            </motion.div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-gradient rounded-2xl p-8 md:p-10 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to Start a Conversation?
            </h3>
            <p className="text-primary-foreground/70 mb-8 leading-relaxed">
              Whether you have an opportunity to discuss or just want to say hello, 
              I'd love to hear from you. Let's explore how I can contribute to your team.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-base rounded-xl shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300 w-full sm:w-auto"
              onClick={() => window.location.href = 'mailto:kalai10835@gmail.com'}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Me an Email
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;