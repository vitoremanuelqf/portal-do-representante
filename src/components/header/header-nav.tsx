import { Globe } from 'lucide-react'
import Link from 'next/link'

export function HeaderNav() {
  return (
    <nav className="flex h-auto flex-1 items-center justify-start">
      <ul className="flex h-auto w-full items-center gap-4">
        <li className="size-auto">
          <Link
            className="ml-auto flex items-center justify-center text-sm"
            href={'/'}
          >
            <Globe className="mr-1 size-5 stroke-[1.25] text-primary" />
            Publicações
          </Link>
        </li>
      </ul>
    </nav>
  )
}
