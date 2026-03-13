
"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import portfolioData from "@/app/data/portfolio.json";

export function ExperienceTimeline() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-surface/50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-primary/20 ml-4 md:ml-0 md:pl-0">
            {experience.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${idx}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative mb-12 pl-8 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
                
                <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4" /> {exp.company}</span>
                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {exp.duration}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="bg-muted/50 border-white/5 font-code">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="achievements" className="border-none">
                      <AccordionTrigger className="py-2 hover:no-underline text-primary text-sm font-semibold">
                        View Achievements
                      </AccordionTrigger>
                      <AccordionContent className="pt-4">
                        <ul className="space-y-3">
                          {exp.achievements.map((ach, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                              {ach}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
