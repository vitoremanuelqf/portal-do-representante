'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type TTokenCreatedWithAuth = {
  token: string
  uid: string
  emailVerified: boolean
}

export async function tokenCreatedWithAuth({
  token,
  uid,
  emailVerified,
}: TTokenCreatedWithAuth) {
  cookies().set('@portal-do-representante:token', token, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  cookies().set('@portal-do-representante:uid', uid, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  if (emailVerified) redirect('/')

  redirect('/')
}

export async function tokenDeletedWithSignOut() {
  cookies().delete('@portal-do-representante:token')
  cookies().delete('@portal-do-representante:uid')

  redirect('/auth/sign-in')
}
