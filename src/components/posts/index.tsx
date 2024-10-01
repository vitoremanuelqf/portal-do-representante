'use client'

import { Post } from './post'

export function Posts() {
  const array = [1, 2, 3]

  return (
    <main className="flex h-auto w-full flex-col gap-4 overflow-auto">
      {array.map((i) => (
        <Post key={i} />
      ))}
    </main>
  )
}
