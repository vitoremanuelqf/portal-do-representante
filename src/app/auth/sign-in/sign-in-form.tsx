'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
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
import SignInService, { TSignInResponse } from '@/services/auth/SignInService'

import { tokenCreatedWithAuth } from '../actions'
import { signInSchema } from './sign-in-schema'

export function SignInForm() {
  const signInService = new SignInService()
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    setLoading(true)

    await signInService
      .signIn(values)
      .then(async (res) => {
        const { token, uid, emailVerified } = res as TSignInResponse

        console.log('Pedir para verificar o email!', emailVerified)

        await tokenCreatedWithAuth({
          action: 'sign-in',
          uid,
          token,
        })
      })
      .catch(() => {
        setLoading(false)
      })
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

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Informe sua senha:"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Link
          className="ml-auto text-xs text-muted-foreground hover:underline"
          href={'/auth/reset-password'}
        >
          Esqueceu sua senha?
        </Link>

        <Button className="" type="submit" disabled={loading}>
          {loading ? <Loader2 className="size-4 animate-spin" /> : 'Entrar'}
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
