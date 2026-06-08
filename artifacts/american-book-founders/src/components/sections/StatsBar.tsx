import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DEFAULT_STATS = [
  { number: "500+", label: "Books Published" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Expert Writers" },
  { number: "10+", label: "Years Experience" },
];

type StatItem = { number: string; label: string };

export default function StatsBar() {
  const [stats, setStats] = useState<StatItem[]>(DEFAULT_STATS);

  useEffect(() => {
    fetch("/api/content/home")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (Array.isArray(data?.value?.stats)) {
          setStats(data.value.stats as StatItem[]);
        } else {
          fetch("/api/content/stats")
            .then((r2) => (r2.ok ? r2.json() : null))
            .then((d2) => { if (Array.isArray(d2?.value)) setStats(d2.value as StatItem[]); })
            .catch(() => {});
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="bg-navy border-y border-white/10 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">
                {stat.number}
              </h3>
              <p className="text-white font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
