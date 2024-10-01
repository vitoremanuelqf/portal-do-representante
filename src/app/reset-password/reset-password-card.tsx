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

interface ResetPasswordCardProps {
  children: React.ReactNode
}

export function ResetPasswordCard({ children }: ResetPasswordCardProps) {
  return (
    <Card className="h-auto w-full max-w-96">
      <CardHeader className="flex h-auto w-full flex-col gap-4">
        <Logo />

        <div className="h-auto w-full">
          <CardTitle>Recuperar senha</CardTitle>
          <CardDescription>
            Digite seu e-mail para redefinir sua senha.
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>{children}</CardContent>

      <CardFooter className="flex h-auto w-full flex-col gap-4"></CardFooter>
    </Card>
  )
}
