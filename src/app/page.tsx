import { Header } from '@/components/header'
import { Post } from '@/components/post'

export default function Posts() {
  return (
    <div className="flex size-full min-h-dvh flex-col items-center">
      <Header />

      <div className="flex h-auto w-full max-w-5xl items-center justify-between px-4 py-2">
        <Post />
      </div>
    </div>
  )
}
