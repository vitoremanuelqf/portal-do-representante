'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

import { resetPasswordSchema } from './reset-password-schema'

export function ResetPasswordForm() {
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        className="flex h-auto w-full flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Informe seu email:"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="" type="submit">
          Enviar
        </Button>

        <div className="flex items-center gap-4">
          <Separator className="w-full shrink" />
          <span className="min-w-max text-xs text-muted-foreground">
            Não tem uma conta?
          </span>
          <Separator className="w-full shrink" />
        </div>

        <Button className="w-full" type="button" variant="outline" asChild>
          <Link href={'sign-up'}>Criar conta</Link>
        </Button>
      </form>
    </Form>
  )
}
