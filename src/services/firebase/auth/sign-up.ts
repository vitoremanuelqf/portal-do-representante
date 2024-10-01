import {
  createUserWithEmailAndPassword,
  getAuth,
  UserCredential,
} from 'firebase/auth'

import { app } from '@/lib/firebase'

type TSignUpProps = {
  email: string
  password: string
}

type TSignUpResponse = {
  token: string | null
  uid: string | null
  emailVerified: boolean | null
}

export const signUp = async ({
  email,
  password,
}: TSignUpProps): Promise<TSignUpResponse> => {
  const auth = getAuth(app)

  try {
    const res: UserCredential = await createUserWithEmailAndPassword(
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
      'Não foi possível criar a conta. Por favor, verifique as informações fornecidas e tente novamente.',
    )
  }
}
