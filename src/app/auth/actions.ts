'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type TTokenCreatedWithAuth = {
  action: 'sign-in' | 'sign-up'
  uid: string
  token: string
}

export async function tokenCreatedWithAuth({
  action,
  uid,
  token,
}: TTokenCreatedWithAuth) {
  cookies().set('@portal-do-representante:token', token, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  cookies().set('@portal-do-representante:uid', uid, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  if (action === 'sign-up') redirect('/account/profile')

  redirect('/')
}

export async function tokenDeletedWithSignOut() {
  cookies().delete('@portal-do-representante:token')
  cookies().delete('@portal-do-representante:uid')

  redirect('/auth/sign-in')
}
