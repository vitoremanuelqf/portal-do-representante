import { isPrivate } from '@/auth/isPrivate'
import { Header } from '@/components/header'
import { Menus } from '@/components/menus'
import { Post } from '@/components/posts/post'
import { PostComment } from '@/components/posts/post-comment'
import { CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default async function PostID() {
  await isPrivate()

  return (
    <div className="flex size-full min-h-dvh flex-col items-center">
      <Header />

      <div className="flex w-full max-w-5xl flex-1 gap-4 px-2 py-4">
        <Menus />

        <Post>
          <Separator className="w-full" />
          <CardTitle className="text-base">Comentários:</CardTitle>
          <PostComment />
          <Separator className="w-full" />
          <PostComment />
        </Post>
      </div>
    </div>
  )
}
