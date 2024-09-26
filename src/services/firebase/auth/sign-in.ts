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

export const signIn = async ({
  email,
  password,
}: TSignInProps): Promise<TSignInResponse> => {
  const auth = getAuth(app)

  try {
    const res: UserCredential = await signInWithEmailAndPassword(
      auth,
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
