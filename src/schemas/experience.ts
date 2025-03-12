import { z } from 'astro:content'
import { TECHNOLOGIES } from '../consts'

const ExperienceSchema = z.object({
  company: z.string(),
  position: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  technologies: z.array(z.enum(TECHNOLOGIES)),
  description: z.string().optional(),
  bulletPoints: z.array(z.string()).optional(),
})

export type ExperienceType = z.infer<typeof ExperienceSchema>
export default ExperienceSchema
