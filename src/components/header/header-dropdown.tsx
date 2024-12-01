'use client'

import { LogOut, Moon, Sun, SunMoon, User } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import { tokenDeletedWithSignOut } from '@/app/auth/actions'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Switch } from '@/components/ui/switch'
import { useUser } from '@/hooks/useUser'
import { getInitials } from '@/utils/getInitials'

export function HeaderDropdown() {
  const { theme, setTheme } = useTheme()
  const { user } = useUser()

  const preventCloseMenuOnClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="size-min rounded-full border border-transparent bg-white p-0 hover:bg-white focus-visible:ring-transparent focus-visible:ring-offset-0"
          variant={'secondary'}
        >
          <Avatar>
            <AvatarImage alt="Foto" src={user?.photoURL || ''} />
            <AvatarFallback>
              {getInitials(user?.displayName || '')}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="m-4 w-56">
        <DropdownMenuLabel>
          Minha Conta:
          <span className="line-clamp-1 overflow-hidden text-xs font-normal text-muted-foreground">
            {user?.displayName}
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={'/account/profile'}>
              <User className="mr-2 size-4 text-muted-foreground" />
              <span className="font-light text-muted-foreground">Perfil</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="focus:bg-transparent"
            onClick={preventCloseMenuOnClick}
          >
            <SunMoon className="mr-2 size-4 text-muted-foreground" />

            <span className="mr-auto font-light text-muted-foreground">
              Tema:
            </span>

            <div className="flex size-auto items-center justify-center gap-2">
              <Sun className="size-4 text-muted-foreground" />
              <Switch
                checked={theme !== 'light'}
                onCheckedChange={() =>
                  setTheme(theme === 'light' ? 'dark' : 'light')
                }
              />
              <Moon className="size-4 text-muted-foreground" />
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={async () => await tokenDeletedWithSignOut()}>
          <LogOut className="mr-2 size-4 text-muted-foreground" />
          <span className="font-light text-muted-foreground">Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
