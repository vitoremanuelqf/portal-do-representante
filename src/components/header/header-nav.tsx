'use client'

import { Globe } from 'lucide-react'
import Link from 'next/link'

import { useUser } from '@/hooks/useUser'

export function HeaderNav() {
  const { user } = useUser()

  return (
    <nav className="flex h-auto flex-1 items-center justify-start">
      <ul className="flex h-auto w-full items-center gap-4">
        {user?.displayName && (
          <li className="size-auto">
            <Link
              className="ml-auto flex items-center justify-center text-sm"
              href={'/'}
            >
              <Globe className="mr-1 size-5 stroke-[1.25] text-primary" />
              Página Inicial
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
