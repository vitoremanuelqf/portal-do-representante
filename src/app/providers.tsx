'use client'

import { ThemeProvider, ThemeProviderProps } from 'next-themes'

import { UserContextProvider } from '@/contexts/UserContext'

export function Providers({ children }: ThemeProviderProps) {
  return (
    <UserContextProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </UserContextProvider>
  )
}
