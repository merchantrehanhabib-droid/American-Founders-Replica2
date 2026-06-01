import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Working with American Book Founders was a transformative experience. They brought my story to life with an elegance I couldn't have imagined.",
      name: "Sarah J.",
      title: "First-time Author",
      avatar: avatar1
    },
    {
      quote: "The ghostwriting team was incredibly professional and captured my voice perfectly. My business book hit the bestseller list within weeks.",
      name: "Michael R.",
      title: "Business Author",
      avatar: avatar2
    },
    {
      quote: "From concept to publication, every step was seamless. Highly recommend their comprehensive publishing services to any aspiring author.",
      name: "Jennifer L.",
      title: "Memoir Writer",
      avatar: avatar1 // Reusing for demo
    }
  ];

  return (
    <section className="py-24 bg-navy text-white relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-navy" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold leading-tight"
          >
            Connect With Our Reputable Book Marketing Experts For A Goal-Oriented Strategy That Complements Your Writing
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white text-navy rounded-xl p-8 shadow-2xl relative"
            >
              <Quote className="w-12 h-12 text-gold/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-gray-600 font-medium mb-8 leading-relaxed italic relative z-10">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                />
                <div>
                  <h4 className="font-bold font-serif text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-500 font-medium">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
