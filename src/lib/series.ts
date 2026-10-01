export type SeriesKey = 'truth' | 'beauty' | 'goodness' | 'standalone';

export const SERIES: Record<SeriesKey, { label: string; description: string }> = {
  truth: {
    label: 'Truth',
    description: 'What is. Essays that diagnose the world as it actually is before proposing anything about it.',
  },
  beauty: {
    label: 'Beauty',
    description: 'Form. Essays on what draws us, what moves us, what is worth making.',
  },
  goodness: {
    label: 'Goodness',
    description: 'What ought to be. Essays on how to act, once the truth of a thing is known.',
  },
  standalone: {
    label: 'Standalone',
    description: 'Essays outside the main sequence — notes, asides, things worth sharing on their own.',
  },
};

export function readingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}
