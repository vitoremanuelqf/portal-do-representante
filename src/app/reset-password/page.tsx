import { ResetPasswordCard } from './reset-password-card'
import { ResetPasswordForm } from './reset-password-form'

export default function ResetPassword() {
  return (
    <div className="flex size-full min-h-dvh items-center justify-center">
      <ResetPasswordCard>
        <ResetPasswordForm />
      </ResetPasswordCard>
    </div>
  )
}
