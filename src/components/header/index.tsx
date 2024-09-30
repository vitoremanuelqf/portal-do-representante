'use client'

import { HeaderDropdown } from './header-dropdown'

export function Header() {
  return (
    <header className="flex h-auto w-full items-center justify-center border-b border-b-muted">
      <div className="flex h-auto w-full max-w-5xl items-center justify-between p-2">
        <h2>Logo</h2>

        <HeaderDropdown />
      </div>
    </header>
  )
}
