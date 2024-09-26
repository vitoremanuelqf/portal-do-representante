import { z } from 'zod'

export const signUpSchema = z
  .object({
    email: z
      .string()
      .min(1, 'O email é obrigatório.')
      .email('Formato de email inválido.'),
    password: z
      .string()
      .min(1, 'A senha é obrigatória.')
      .min(6, 'A senha deve conter no mínimo 6 caracteres.'),
    confirmPassword: z.string().min(1, 'A confirmação de senha é obrigatória.'),
  })
  .refine(
    (data) => {
      if (data.password !== data.confirmPassword) return false
      return true
    },
    {
      message: 'As senhas não correspondem.',
      path: ['confirmPassword'],
    },
  )
