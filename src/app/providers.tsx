'use client'

import { ThemeProvider, ThemeProviderProps } from 'next-themes'

import { PostsContextProvider } from '@/contexts/PostsContext'
import { UserContextProvider } from '@/contexts/UserContext'

export function Providers({ children }: ThemeProviderProps) {
  return (
    <UserContextProvider>
      <PostsContextProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </PostsContextProvider>
    </UserContextProvider>
  )
}
