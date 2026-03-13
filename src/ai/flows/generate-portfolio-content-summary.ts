'use server';
/**
 * @fileOverview An AI-powered content assistant that generates concise summaries and highlights key innovations from raw project descriptions or experience entries.
 *
 * - generatePortfolioContentSummary - A function that handles the content summarization process.
 * - GeneratePortfolioContentSummaryInput - The input type for the generatePortfolioContentSummary function.
 * - GeneratePortfolioContentSummaryOutput - The return type for the generatePortfolioContentSummary function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GeneratePortfolioContentSummaryInputSchema = z.object({
  content: z
    .string()
    .describe(
      'The raw project description or experience entry text to be summarized.'
    ),
});
export type GeneratePortfolioContentSummaryInput = z.infer<
  typeof GeneratePortfolioContentSummaryInputSchema
>;

const GeneratePortfolioContentSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise and engaging summary of the content.'),
  keyInnovations: z
    .array(z.string())
    .describe('A list of key innovations or achievements highlighted in the content.'),
});
export type GeneratePortfolioContentSummaryOutput = z.infer<
  typeof GeneratePortfolioContentSummaryOutputSchema
>;

export async function generatePortfolioContentSummary(
  input: GeneratePortfolioContentSummaryInput
): Promise<GeneratePortfolioContentSummaryOutput> {
  return generatePortfolioContentSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePortfolioContentSummaryPrompt',
  input: { schema: GeneratePortfolioContentSummaryInputSchema },
  output: { schema: GeneratePortfolioContentSummaryOutputSchema },
  prompt: `You are an AI-powered content assistant for a Senior Software Engineer's portfolio.
Your task is to generate a concise, engaging summary and identify key innovations or achievements from the provided raw project description or experience entry.
Focus on highlighting technical depth, engineering leadership, and platform architecture expertise.

Raw Content: {{{content}}}`,
});

const generatePortfolioContentSummaryFlow = ai.defineFlow(
  {
    name: 'generatePortfolioContentSummaryFlow',
    inputSchema: GeneratePortfolioContentSummaryInputSchema,
    outputSchema: GeneratePortfolioContentSummaryOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
