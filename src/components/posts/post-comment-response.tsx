import { Heart, Trash2 } from 'lucide-react'
import * as React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function PostCommentResponse() {
  return (
    <Card className="h-auto w-full border-none shadow-none">
      <CardHeader className="h-auto w-full flex-row items-center justify-between gap-2 space-y-0 p-0 pb-2">
        <Avatar className="size-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-1 flex-col">
          <CardTitle className="text-sm">
            Vítor Emanuel Queiroz Ferreira
          </CardTitle>

          <CardDescription>Aluno · 1h</CardDescription>
        </div>

        <Button variant="ghost" size="xs">
          <Trash2 className="inline size-5 stroke-[1.25] text-muted-foreground" />
        </Button>
      </CardHeader>

      <CardContent className="h-auto w-full p-0 pb-2 pl-10">
        <p className="whitespace-pre-wrap text-sm">
          Aqui está a resposta do post.
        </p>
      </CardContent>

      <CardFooter className="h-auto w-full flex-col items-start gap-4 p-0 pb-2 pl-10">
        <div className="flex h-auto w-full gap-4">
          <Button variant="ghost" size="xs">
            <Heart className="mr-2 inline size-5 stroke-[1.25] text-muted-foreground" />
            Gostei
          </Button>
        </div>
        <Separator className="w-full" />
      </CardFooter>
    </Card>
  )
}
