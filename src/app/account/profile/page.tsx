import { isPrivate } from '@/auth/isPrivate'
import { Header } from '@/components/header'

export default async function Profile() {
  await isPrivate()

  return (
    <div className="flex size-full min-h-dvh flex-col items-center">
      <Header />

      <div className="flex w-full max-w-5xl flex-1 gap-4 px-2 py-4"></div>
    </div>
  )
}
