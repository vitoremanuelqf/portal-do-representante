import {
  AuthError,
  createUserWithEmailAndPassword,
  getAuth,
  UserCredential,
} from 'firebase/auth'

import { app } from '@/lib/firebase'

type TSignUpProps = {
  email: string
  password: string
}

export type TSignUpResponse = {
  token: string
  uid: string
  emailVerified: boolean
}

class SignUpService {
  private auth

  constructor() {
    this.auth = getAuth(app)
  }

  public async signUp({
    email,
    password,
  }: TSignUpProps): Promise<TSignUpResponse | AuthError> {
    try {
      const res: UserCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password,
      )
      const token = await res?.user?.getIdToken()
      const { uid, emailVerified } = res?.user

      return { token, uid, emailVerified }
    } catch (err) {
      const error = err as AuthError

      return error
    }
  }
}

export default SignUpService
