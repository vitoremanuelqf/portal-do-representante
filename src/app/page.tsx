import { Header } from '@/components/header'
import { Menus } from '@/components/menus'
import { Posts } from '@/components/posts'

export default function Home() {
  return (
    <div className="flex size-full min-h-dvh flex-col items-center">
      <Header />

      <div className="flex w-full max-w-5xl flex-1 gap-4 px-2 py-4">
        <Menus />

        <Posts />
      </div>
    </div>
  )
}
