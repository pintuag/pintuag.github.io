
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SkillsSection } from "@/components/SkillsSection";
import { AIInsightTool } from "@/components/AIInsightTool";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      
      <Hero />

      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl" />
            <h2 className="text-3xl font-bold mb-8">Engineering Narrative</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Senior Software Engineer with over seven years of experience building scalable mobile and backend platforms across fintech, logistics, and enterprise systems.
              </p>
              <p>
                Experienced in designing distributed backend systems, building reliable microservices architectures, improving developer productivity, and delivering production-grade platforms used by internal operations teams and end customers.
              </p>
              <p>
                Strong expertise across backend engineering, Android platform development, distributed systems design, and modern AI-assisted development workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ExperienceTimeline />
      
      <ProjectGrid />

      <SkillsSection />

      <AIInsightTool />

      <footer className="py-20 border-t bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground max-w-md mb-8">
                Currently open to discussing Senior Engineering opportunities, system architecture consulting, and AI implementation strategies.
              </p>
              <div className="flex flex-col gap-4">
                <a href="mailto:pintoo.aggarwal@example.com" className="flex items-center gap-3 text-lg hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" /> pintoo.aggarwal@example.com
                </a>
                <span className="flex items-center gap-3 text-lg">
                  <Linkedin className="w-5 h-5 text-primary" /> linkedin.com/in/pintoo
                </span>
              </div>
            </div>
            <div className="flex flex-col md:items-end justify-center gap-4">
              <Button size="lg" className="w-full md:w-auto gap-2">
                Download Resume <ExternalLink className="w-4 h-4" />
              </Button>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Pintoo Aggarwal. Built with Next.js & Framer Motion.</p>
            <p>Designed for High Performance & Scalability.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
