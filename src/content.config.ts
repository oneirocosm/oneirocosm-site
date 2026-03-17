import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file } from "astro/loaders";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const photoGridMeta = defineCollection({
  loader: file("src/assets/photos/pokemon-pumpkin-carving/meta.json"),
  schema: z.object({
    name: z.string(),
    class: z.string(),
    zoom: z.number().optional(),
  }).optional(),
});

export const collections = { blog, photoGridMeta };
