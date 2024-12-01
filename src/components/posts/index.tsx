'use client'

import { useEffect, useState } from 'react'

import { getPosts } from '@/services/firebase/get-posts'

import { DialogCreatePost } from './dialog-create-post'
import { Post } from './post'

export function Posts() {
  const [posts, setPosts] = useState<any>([])

  async function fetchPosts() {
    await getPosts().then((res) => {
      setPosts(res)
    })
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <main className="flex h-auto w-full flex-col gap-4 overflow-auto">
      <DialogCreatePost />

      {posts.map((i: any) => (
        <Post key={i.id} />
      ))}
    </main>
  )
}
