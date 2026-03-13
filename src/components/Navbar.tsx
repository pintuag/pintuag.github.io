"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import portfolioData from "@/app/data/portfolio.json";

export function Navbar() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tighter uppercase">
            {portfolioData.profile.name.split(' ')[0]}<span className="text-primary">.dev</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="default" size="sm" className="hidden sm:flex gap-2" asChild>
            <a href={portfolioData.profile.social.resume} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4" />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
