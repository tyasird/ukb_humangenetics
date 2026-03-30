import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const breadcrumbItem = z.object({
  label: z.string(),
  href: z.string().optional(),
})

const cardData = z.object({
  imageSrc: z.string(),
  imageAlt: z.string(),
  imageWidth: z.number(),
  imageHeight: z.number(),
  title: z.string(),
  href: z.string(),
})

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content' }),
  schema: z.object({
    type: z.enum(['content', 'landing']),
    title: z.string(),
    activeHref: z.string(),
    breadcrumbs: z.array(breadcrumbItem),
    columns: z.union([z.literal(2), z.literal(3), z.literal(4)]).optional(),
    intro: z.union([z.string(), z.array(z.string())]).optional(),
    cards: z.array(cardData).optional(),
  }),
})

export const collections = { pages }
