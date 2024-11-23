import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import { createContext, ReactNode, useEffect, useState } from 'react'

import { app } from '@/lib/firebase'

interface IUserContextDataProps {
  loading: { screen: boolean; element: boolean }
  user: User | null
}

interface IUserContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext<IUserContextDataProps>(
  {} as IUserContextDataProps,
)

export function UserContextProvider({ children }: IUserContextProviderProps) {
  const auth = getAuth(app)

  const [loading, setLoading] = useState({ screen: false, element: false })
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    setLoading((prev) => ({ ...prev, screen: true }))

    const unsubscriber = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          setUser(user)
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
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
