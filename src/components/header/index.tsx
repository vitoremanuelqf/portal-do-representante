'use client'

import { Logo } from '@/assets/Logo'

import { HeaderDropdown } from './header-dropdown'

export function Header() {
  return (
    <header className="flex h-auto w-full items-center justify-center border-b border-b-muted bg-card shadow-sm">
      <div className="flex h-auto w-full max-w-5xl items-center justify-between p-4">
        <Logo />

        <HeaderDropdown />
      </div>
    </header>
  )
}
