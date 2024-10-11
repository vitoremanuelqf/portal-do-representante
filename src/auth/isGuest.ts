import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function isGuest(): Promise<void> {
  const token = cookies().get('@portal-do-representante:token')?.value

  if (token) redirect('/')
}