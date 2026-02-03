import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-8">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-primary-foreground/70 text-sm"
        >
          <p>
            © {currentYear} Kalaiyarasan S. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-accent fill-accent" /> using React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;