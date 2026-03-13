
"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import portfolioData from "@/app/data/portfolio.json";

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 bg-surface/50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Technical Proficiencies</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="py-1 px-3 border-white/5 bg-white/5 hover:bg-primary/20 hover:border-primary/30 transition-all font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
