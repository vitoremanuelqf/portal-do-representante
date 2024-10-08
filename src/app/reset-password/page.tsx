import { isGuest } from '@/auth/isGuest'

import { ResetPasswordCard } from './reset-password-card'
import { ResetPasswordForm } from './reset-password-form'

export default async function ResetPassword() {
  await isGuest()

  return (
    <div className="flex size-full min-h-dvh items-center justify-center">
      <ResetPasswordCard>
        <ResetPasswordForm />
      </ResetPasswordCard>
    </div>
  )
}
