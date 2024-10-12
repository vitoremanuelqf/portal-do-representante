import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function isPrivate(): Promise<void> {
  const token = cookies().get('@portal-do-representante:token')?.value
  const uid = cookies().get('@portal-do-representante:uid')?.value

  const isAuthenticated = uid && token

  if (!isAuthenticated) redirect('/auth/sign-in')
}
