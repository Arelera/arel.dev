import { defineCollection, z } from 'astro:content'
import ProjectSchema from '../schemas/project'

const projects = defineCollection({
  type: 'content',
  schema: ProjectSchema.extend({
    isHidden: z.boolean().optional(),
    // finished projects are displayed, doesn't mean development is fully finished on that project
    isFinished: z.boolean().optional(),
    order: z.number().optional(),
  }),
})

export const collections = { projects }
