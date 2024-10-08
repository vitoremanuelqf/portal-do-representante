import { isGuest } from '@/auth/isGuest'

import { SignInCard } from './sign-in-card'
import { SignInForm } from './sign-in-form'

export default async function SignIn() {
  await isGuest()

  return (
    <div className="flex size-full min-h-dvh items-center justify-center">
      <SignInCard>
        <SignInForm />
      </SignInCard>
    </div>
  )
}
