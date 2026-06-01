import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function PremiumProduction() {
  const services = [
    "Professional Ghostwriting",
    "Book Editing & Proofreading",
    "Cover Design",
    "Publishing Services",
    "Marketing & Distribution",
    "Audiobook Production"
  ];

  return (
    <section className="py-24 bg-cream text-navy">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            Upgrade to Premium Book Production
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-4 py-4">
                <CheckCircle2 className="w-8 h-8 text-gold flex-shrink-0" />
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-gold transition-colors">
                  {service}
                </h3>
              </div>
              <div className="w-full h-px bg-gold/30 group-hover:bg-gold transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
