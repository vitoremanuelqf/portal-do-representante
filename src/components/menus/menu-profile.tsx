import * as React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
    <Card>
      <CardHeader>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <CardTitle>Vítor Emanuel Queiroz Ferreira</CardTitle>

        <CardDescription>Aluno</CardDescription>
      </CardHeader>

      <CardContent>
        <CardDescription>
          PÓS GRADUAÇÃO LATO SENSU EM DESENVOLVIMENTO WEB
        </CardDescription>
      </CardContent>

      <CardFooter>
        <CardDescription>Itapetininga, SP</CardDescription>
      </CardFooter>
    </Card>
  )
}
