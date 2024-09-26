'use client'

import Image from 'next/image'

import logoLight from '@/assets/logo-light.svg'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface SignInCardProps {
  children: React.ReactNode
}

export function SignUpCard({ children }: SignInCardProps) {
  return (
    <Card className="h-auto w-full max-w-96">
      <CardHeader className="flex h-auto w-full flex-col gap-4">
        <div className="h-auto w-full">
          <Image
            src={logoLight}
            className="h-16 w-auto"
            alt="Logo Portal do Colaborador"
          />
        </div>

        <div className="h-auto w-full">
          <CardTitle>Criar conta</CardTitle>
          <CardDescription>Inscreva-se para começar.</CardDescription>
        </div>
      </CardHeader>

      <CardContent>{children}</CardContent>

      <CardFooter className="flex h-auto w-full flex-col gap-4"></CardFooter>
    </Card>
  )
}
