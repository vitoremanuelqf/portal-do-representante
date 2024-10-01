'use client'

import Logo from '@/assets/Logo'
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
        <Logo />

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
