import { defineCollection, z } from 'astro:content';

const gallery = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    category: z.enum(['weddings', 'corporate', 'decor', 'cultural']),
    description: z.string().optional(),
    location: z.string().optional(),
    year: z.number().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0)
  })
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    clientName: z.string(),
    eventType: z.string(),
    quote: z.string(),
    rating: z.number().min(1).max(5).default(5),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0)
  })
});

export const collections = { gallery, testimonials };