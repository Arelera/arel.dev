import { z } from 'astro:content'
import { TECHNOLOGIES } from '../consts'

const ProjectSchema = z.object({
  name: z.string(),
  createdAt: z.coerce.date(),
  technologies: z.array(z.enum(TECHNOLOGIES)),
  updatedAt: z.coerce.date().optional(),
})

export type ProjectType = z.infer<typeof ProjectSchema>
export default ProjectSchema
