'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as Icon from 'lucide-react'
import { useEffect } from 'react'
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
import { Textarea } from '@/components/ui/textarea'
import { useUser } from '@/hooks/useUser'

import { profileSchema } from './profile-schema'

export default function ProfileForm() {
  const { loading, user, handleUpdatePassword, handleUpdateProfile } = useUser()

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      bio: '',
      confirmPassword: '',
      displayName: '',
      email: '',
      password: '',
      photoURL: '',
    },
  })

  async function onSubmit(values: z.infer<typeof profileSchema>) {
    await handleUpdateProfile({
      displayName: values.displayName,
      photoURL: values.photoURL,
    })

    if (values?.password) {
      await handleUpdatePassword({ password: values.password })
    }
  }

  useEffect(() => {
    form.setValue('displayName', user?.displayName ? user.displayName : '')
    form.setValue('photoURL', user?.photoURL ? user.photoURL : '')
    form.setValue('email', user?.email ? user.email : '')
  }, [form, user?.displayName, user?.email, user?.photoURL])

  return (
    <Form {...form}>
      <form
        className="flex h-auto w-full flex-col gap-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex h-auto w-full flex-col gap-4">
          <div className="flex h-auto w-full flex-col gap-2">
            <h2 className="text-xl font-extralight text-muted-foreground md:text-2xl">
              Informações pessoais:
            </h2>
            <Separator className="w-full" orientation={'horizontal'} />
          </div>

          <div className="flex h-auto w-full flex-col gap-4 md:flex-row">
            <FormField
              control={form.control}
              name="displayName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nome:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite seu nome..."
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
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input
                      disabled
                      placeholder="Digite seu email..."
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex h-auto w-full flex-col gap-4 md:flex-row">
            <FormField
              control={form.control}
              name="photoURL"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Foto personalizada:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Link da foto..."
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex h-auto w-full flex-col gap-4 md:flex-row">
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>BIO:</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={`ex.: "PÓS GRADUAÇÃO LATO SENSU EM DESENVOLVIMENTO WEB"`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex h-auto w-full flex-col gap-4">
          <div className="flex h-auto w-full flex-col gap-2">
            <h2 className="text-xl font-extralight text-muted-foreground md:text-2xl">
              Acesso:
            </h2>
            <Separator className="w-full" orientation={'horizontal'} />
          </div>

          <div className="flex h-auto w-full flex-col gap-4 md:flex-row">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nova senha:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite sua nova senha..."
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Confirmar senha:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirme sua nova senha..."
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button className="w-min" type="submit" disabled={loading.element}>
          {loading.element ? (
            <Icon.Loader2 className="size-3 animate-spin" />
          ) : (
            'Atualizar'
          )}
        </Button>
      </form>
    </Form>
  )
}
