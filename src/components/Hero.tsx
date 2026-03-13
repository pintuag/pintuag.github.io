
"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioData from "@/app/data/portfolio.json";

export function Hero() {
  const { profile } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-blob animation-delay-2000" />
        <div className="absolute inset-0 animated-grid opacity-20" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 inline-block">
              {profile.title}
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Hi, I'm <span className="gradient-text">{profile.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              {profile.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Button size="lg" className="gap-2 group">
              View Work <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href={profile.social.github} target="_blank"><Github className="w-5 h-5" /></a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href={profile.social.linkedin} target="_blank"><Linkedin className="w-5 h-5" /></a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href={`mailto:${profile.social.email}`}><Mail className="w-5 h-5" /></a>
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
            {profile.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                className="glass-card p-6 rounded-2xl text-left"
              >
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
