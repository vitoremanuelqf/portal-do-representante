'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type TTokenCreatedWithSignIn = {
  token: string
  uid: string
}

type TTokenCreatedWithSignUp = {
  token: string
  uid: string
  emailVerified: boolean
}

export async function tokenCreatedWithSignIn({
  token,
  uid,
}: TTokenCreatedWithSignIn) {
  cookies().set('@portal-do-representante:token', token, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  cookies().set('@portal-do-representante:uid', uid, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  redirect('/')
}

export async function tokenCreatedWithSignUp({
  token,
  uid,
  emailVerified,
}: TTokenCreatedWithSignUp) {
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
