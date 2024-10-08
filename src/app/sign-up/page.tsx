import { isGuest } from '@/auth/isGuest'

import { SignUpCard } from './sign-up-card'
import { SignUpForm } from './sign-up-form'

export default async function SignUp() {
  await isGuest()

  return (
    <div className="flex size-full min-h-dvh items-center justify-center">
      <SignUpCard>
        <SignUpForm />
      </SignUpCard>
    </div>
  )
}
