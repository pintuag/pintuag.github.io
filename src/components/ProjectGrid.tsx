
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import portfolioData from "@/app/data/portfolio.json";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ProjectGrid() {
  const { projects } = portfolioData;

  const getImage = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id) || {
      imageUrl: "https://picsum.photos/800/600",
      description: "Project image",
      imageHint: "tech"
    };
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any, idx) => {
            const img = getImage(project.image);
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block group"
                >
                  <Card className="glass-card h-full overflow-hidden border-white/5 transition-all hover:-translate-y-2 hover:border-primary/30">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={img.imageUrl}
                        alt={img.description}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={img.imageHint}
                      />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Badge variant="secondary" className="bg-primary text-primary-foreground gap-1.5">
                          Visit Site <ExternalLink className="w-3 h-3" />
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">
                        {project.category}
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2 pt-0">
                      {project.tech.map((t: string) => (
                        <span key={t} className="text-[10px] font-code bg-muted px-2 py-0.5 rounded text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </CardFooter>
                  </Card>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
