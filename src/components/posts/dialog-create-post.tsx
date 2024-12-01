'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { createPost } from '@/services/firebase/create-post'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Textarea } from '../ui/textarea'
import { createPostSchema } from './dialog-create-post-schema'

export function DialogCreatePost() {
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof createPostSchema>>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      content: '',
      tags: '',
    },
  })

  async function onSubmit(values: z.infer<typeof createPostSchema>) {
    const data = {
      tags: values.tags,
      content: values.content,
      createdAt: new Date(),
    }

    await createPost({ data }).then(() => {
      setOpen(false)
      alert('Publicação criada com sucesso.')
      form.reset()
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Criar publicação</Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Criar publicação:</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form
              className="flex h-auto w-full flex-col gap-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoria:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Informe o categoria...."
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
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conteúdo da publicação:</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Informe o conteúdo da publicação..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={form.handleSubmit(onSubmit)}>
              Criar Publicação
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
