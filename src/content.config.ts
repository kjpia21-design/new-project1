import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

export const collections = {
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        level: z.enum(['beginner', 'practical', 'advanced']).optional(),
        category: z.enum(['claude', 'chat', 'coding', 'media', 'automation', 'agents', 'dev', 'basics']).optional(),
        tools: z.array(z.string()).default([]),
        duration: z.string().optional(),
        prerequisites: z.array(z.string()).default([]),
        lastVerified: z.coerce.date().optional(),
        sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
        status: z.enum(['draft', 'published']).default('draft'),
      }),
    }),
  }),
};
