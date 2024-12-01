'use client'

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
import { useUser } from '@/hooks/useUser'
import { getInitials } from '@/utils/getInitials'

import { Button } from '../ui/button'

export function MenuProfile() {
  const { user } = useUser()

  return (
    <Card className="h-auto w-full">
      <CardHeader className="h-auto w-full items-center justify-between gap-2 space-y-0">
        <Button
          className="size-min rounded-full border border-transparent bg-white p-0 hover:bg-white focus-visible:ring-transparent focus-visible:ring-offset-0"
          variant={'secondary'}
        >
          <Avatar>
            <AvatarImage alt="Foto" src={user?.photoURL || ''} />
            <AvatarFallback>
              {getInitials(user?.displayName || '')}
            </AvatarFallback>
          </Avatar>
        </Button>

        <CardTitle className="text-center text-base">
          {user?.displayName}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="text-center">
          PÓS GRADUAÇÃO LATO SENSU EM DESENVOLVIMENTO WEB
        </CardDescription>
      </CardContent>

      <CardFooter className="h-auto w-full items-center justify-center"></CardFooter>
    </Card>
  )
}
