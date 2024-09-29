'use client'

import { Menu } from './menu'

export function Header() {
  return (
    <header className="flex h-auto w-full items-center justify-center border-b border-b-muted">
      <div className="flex h-auto w-full max-w-5xl items-center justify-between px-4 py-2">
        <h2>Logo</h2>

        <Menu />
      </div>
    </header>
  )
}
