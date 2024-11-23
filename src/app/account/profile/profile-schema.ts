import { z } from 'zod'

export const profileSchema = z
  .object({
    displayName: z.string().min(1, 'O nome é obrigatório.'),
    email: z.string().optional(),
    password: z
      .string()
      .optional()
      .refine(
        (data) => {
          if (data === undefined) return true
          if (data.length > 0 && data.length < 6) return false
          return true
        },
        { message: 'A senha deve conter no mínimo 6 caracteres.' },
      ),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.password === undefined) return true
      if (data.password.length > 0 && data.password.length < 6) return true
      if (data.password !== data.confirmPassword) return false
      return true
    },
    {
      message: 'As senhas não correspondem.',
      path: ['confirmPassword'],
    },
  )
