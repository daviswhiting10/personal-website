import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    slug: z.string(),
    number: z.number(),
    title: z.string(),
    dek: z.string(),
    series: z.enum(['truth', 'beauty', 'goodness', 'standalone']),
    seriesOrder: z.number().nullable(),
    date: z.string(),
    substackUrl: z.string(),
  }),
});

export const collections = { essays };
