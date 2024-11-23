'use client'

import { Button } from '../ui/button'
import { Post } from './post'

export function Posts() {
  const array = [1]

  return (
    <main className="flex h-auto w-full flex-col gap-4 overflow-auto">
      <Button>Adicionar publicação</Button>

      {array.map((i) => (
        <Post key={i} />
      ))}
    </main>
  )
}
