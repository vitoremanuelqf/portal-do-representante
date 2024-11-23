'use client'

import * as React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function MenuProfile() {
  return (
    <Card className="h-auto w-full">
      <CardHeader className="h-auto w-full items-center justify-between gap-2 space-y-0">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <CardTitle className="text-center text-base">
          Vítor Emanuel Queiroz Ferreira
        </CardTitle>

        <Badge>Aluno</Badge>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-center">
          PÓS GRADUAÇÃO LATO SENSU EM DESENVOLVIMENTO WEB
        </CardDescription>
      </CardContent>

      <CardFooter className="h-auto w-full items-center justify-center">
        <CardDescription className="text-center">
          Itapetininga, SP
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
