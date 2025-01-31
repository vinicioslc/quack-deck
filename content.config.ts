import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    games: defineCollection({
      source: 'games/*.md',
      type: 'page',
      // Define custom schema for docs collection
      schema: z.object({
        image: z.string(),
        title: z.string(),
        slug: z.string(),
        steam_appid: z.number(),
        compatibility: z.array(z.object({
          name: z.string(),
          steamos: z.boolean(),
          windows: z.boolean()
        })),
        windows: z.boolean(),
        steamos: z.boolean(),
        date: z.date()
      })
    })
  }
})