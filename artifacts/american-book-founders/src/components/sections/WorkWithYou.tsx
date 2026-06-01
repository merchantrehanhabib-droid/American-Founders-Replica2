import { Button } from "@/components/ui/button";
import writingDesk from "@/assets/writing-desk.png";
import { motion } from "framer-motion";

export default function WorkWithYou() {
  return (
    <section className="py-24 bg-cream text-navy overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              We Will Work With You To Find Your Voice And Add a Custom Touch To Your Writing
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Every author has a unique story to tell. Our approach isn't one-size-fits-all; we tailor our ghostwriting and editing services to match your tone, style, and vision perfectly. 
            </p>

            <div className="pt-6">
              <Button size="lg" className="bg-gold hover:bg-gold-hover text-navy font-bold px-8 h-14 rounded-md">
                Get A Free Consultation
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={writingDesk} 
                alt="Writing Desk" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
            
            {/* Decorative block */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold rounded-xl -z-10" />
            <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-navy rounded-xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
