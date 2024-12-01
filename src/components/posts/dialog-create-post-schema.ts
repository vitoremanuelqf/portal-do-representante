import { z } from 'zod'

export const createPostSchema = z.object({
  tags: z.string().optional(),
  content: z.string().min(1, 'O conteúdo da publicação é obrigatório.'),
})
