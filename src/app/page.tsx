
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SkillsSection } from "@/components/SkillsSection";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import portfolioData from "@/app/data/portfolio.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      
      <Hero />

      <ExperienceTimeline />
      
      <ProjectGrid />

      <SkillsSection />

      <footer className="py-20 border-t bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground max-w-md mb-8">
                Currently open to discussing Senior Engineering opportunities, system architecture consulting, and AI implementation strategies.
              </p>
              <div className="flex flex-col gap-4">
                <a href={`mailto:${portfolioData.profile.social.email}`} className="flex items-center gap-3 text-lg hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" /> {portfolioData.profile.social.email}
                </a>
                <a href={portfolioData.profile.social.linkedin} target="_blank" className="flex items-center gap-3 text-lg hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" /> linkedin.com/in/pintoo
                </a>
              </div>
            </div>
            <div className="flex flex-col md:items-end justify-center gap-4">
              <Button size="lg" className="w-full md:w-auto gap-2" asChild>
                <a href={portfolioData.profile.social.resume} target="_blank" rel="noopener noreferrer">
                  Download Resume <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href={portfolioData.profile.social.github} target="_blank"><Github className="w-5 h-5" /></a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                  <a href={portfolioData.profile.social.linkedin} target="_blank"><Linkedin className="w-5 h-5" /></a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
