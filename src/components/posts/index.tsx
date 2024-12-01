'use client'

import { DialogCreatePost } from './dialog-create-post'
import { Post } from './post'

export function Posts() {
  const array = [1]

  return (
    <main className="flex h-auto w-full flex-col gap-4 overflow-auto">
      <DialogCreatePost />

      {array.map((i) => (
        <Post key={i} />
      ))}
    </main>
  )
}
