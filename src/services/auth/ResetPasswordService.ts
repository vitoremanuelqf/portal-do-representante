import { FirebaseError } from 'firebase/app'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

import { app } from '@/lib/firebase'

type TResetPasswordProps = {
  email: string
}

class ResetPasswordService {
  private auth

  constructor() {
    this.auth = getAuth(app)
  }

  public async resetPassword({ email }: TResetPasswordProps): Promise<void> {
    try {
      await sendPasswordResetEmail(this.auth, email)
    } catch (err) {
      const error = err as FirebaseError
      console.log('🚀 ~ ResetPasswordService ~ error:', error)

      throw error
    }
  }
}

export default ResetPasswordService
