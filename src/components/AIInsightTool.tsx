
"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Loader2, Send, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { generatePortfolioContentSummary } from "@/ai/flows/generate-portfolio-content-summary";

export function AIInsightTool() {
  const [content, setContent] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [result, setResult] = React.useState<{
    summary: string;
    keyInnovations: string[];
  } | null>(null);

  const handleGenerate = async () => {
    if (!content.trim()) return;
    setIsLoading(true);
    try {
      const output = await generatePortfolioContentSummary({ content });
      setResult(output);
    } catch (error) {
      console.error("AI Generation failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-insight" className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <Sparkles className="text-primary w-8 h-8" />
            AI Insight Tool
          </h2>
          <p className="text-muted-foreground">
            Paste a project description or work entry below to see how my AI-augmented development workflow highlights key engineering innovations.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="glass-card border-primary/20">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-primary">Input Raw Content</CardTitle>
              <CardDescription>Enter technical text for analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Textarea
                  placeholder="e.g., Developed an event-driven automation framework using Spring Boot and Kafka to optimize workflow orchestration across 15+ internal services..."
                  className="min-h-[150px] bg-background/50 border-white/10 resize-none pr-12 focus-visible:ring-primary"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <Button
                  size="icon"
                  className="absolute bottom-4 right-4 rounded-full shadow-lg"
                  onClick={handleGenerate}
                  disabled={isLoading || !content.trim()}
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          <AnimatePresence mode="wait">
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <Card className="glass-card border-accent/20">
                  <CardHeader>
                    <CardTitle className="text-sm font-bold uppercase tracking-widest text-accent">Concise Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground leading-relaxed">{result.summary}</p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-secondary/20">
                  <CardHeader>
                    <CardTitle className="text-sm font-bold uppercase tracking-widest text-secondary">Key Innovations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.keyInnovations.map((inn, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Lightbulb className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          {inn}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
