import { z } from 'zod'

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, 'O email é obrigatório.')
    .email('Formato de email inválido.'),
  password: z
    .string()
    .min(1, 'A senha é obrigatória.')
    .min(6, 'A senha deve conter no mínimo 6 caracteres.'),
})
