import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth'

import { app } from '@/lib/firebase'

type TSignInProps = {
  email: string
  password: string
}

type TSignInResponse = {
  token: string | null
  uid: string | null
  emailVerified: boolean | null
}

class SignInService {
  private auth

  constructor() {
    this.auth = getAuth(app)
  }

  public async signIn({
    email,
    password,
  }: TSignInProps): Promise<TSignInResponse> {
    try {
      const res: UserCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password,
      )
      const token = await res?.user?.getIdToken()
      const { uid, emailVerified } = res?.user

      return { token, uid, emailVerified }
    } catch (err) {
      console.error('🚀 ~ signIn ~ err:', err)
      throw new Error(
        'Não foi possível realizar o login. Por favor, verifique suas credenciais e tente novamente.',
      )
    }
  }
}

export default SignInService
