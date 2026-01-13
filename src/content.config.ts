import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const itemSchema = z.array(z.object({
    name: z.string(),
    description: z.string(),
    url: z.string(),
    logo: z.string()
}))

const list = defineCollection({
    loader: file("src/data/list.json"),
    schema: () =>
        z.object({
            id: z.number(),
            name: z.string(),
            list: itemSchema.optional(),
            subTitle: z.array(z.object({
                name: z.string(),
                list: itemSchema,
            })).optional()
        })
})

export const collections = { list }
