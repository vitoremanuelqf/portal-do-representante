import {
  getAuth,
  onAuthStateChanged,
  updatePassword,
  updateProfile,
} from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { createContext, ReactNode, useEffect, useState } from 'react'

import { app } from '@/lib/firebase'

interface IUser {
  displayName?: string | null
  email: string
  emailVerified: boolean
  uid: string
  photoURL: string | null
}

interface IUserContextDataProps {
  loading: { screen: boolean; element: boolean }
  user: IUser | null

  handleUpdatePassword: (props: { password: string }) => Promise<void>
  handleUpdateProfile: (props: {
    displayName: string
    photoURL?: string
  }) => Promise<void>
}

interface IUserContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext<IUserContextDataProps>(
  {} as IUserContextDataProps,
)

export function UserContextProvider({ children }: IUserContextProviderProps) {
  const router = useRouter()
  const auth = getAuth(app)

  const [loading, setLoading] = useState({ screen: false, element: false })
  const [user, setUser] = useState<IUser | null>(null)

  async function handleUpdateProfile({
    displayName,
    photoURL,
  }: {
    displayName: string
    photoURL?: string
  }) {
    setLoading((prev) => ({ ...prev, element: true }))

    if (!auth.currentUser) return

    await updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    })
      .then(() => {
        setUser((prev) => ({ ...prev, displayName, photoURL }) as IUser)
      })
      .catch((err) => {
        console.error('🚀 ~ updateUser ~ err:', err)
      })
      .finally(() => {
        setLoading((prev) => ({ ...prev, element: false }))
      })
  }

  async function handleUpdatePassword({ password }: { password: string }) {
    setLoading((prev) => ({ ...prev, element: true }))

    if (!auth.currentUser) return

    await updatePassword(auth.currentUser, password)
      .then(() => {
        router.push('/')
      })
      .catch(async (err) => {
        console.error('🚀 ~ awaitauth.updatePassword ~ err:', err)
        alert('Para alterar a senha, é necessário fazer o login novamente!')
      })
      .finally(() => {
        setLoading((prev) => ({ ...prev, element: false }))
      })
  }

  useEffect(() => {
    setLoading((prev) => ({ ...prev, screen: true }))

    const unsubscriber = onAuthStateChanged(auth, async (user) => {
      try {
        if (user && user.email && user.uid) {
          console.log('🚀 ~ unsubscriber ~ user:', user)

          setUser({
            displayName: user?.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            uid: user.uid,
            photoURL: user?.photoURL,
          })
        } else {
          // await signOut()
        }
      } catch {
        // await signOut()
      } finally {
        setLoading((prev) => ({ ...prev, screen: false }))
      }
    })

    return () => unsubscriber()
  }, [])

  return (
    <UserContext.Provider
      value={{
        loading,
        user,
        handleUpdatePassword,
        handleUpdateProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
