import { addDoc, collection, getFirestore } from 'firebase/firestore'

import { app } from '@/lib/firebase'

type TCreatePostProps = {
  data: any
}

export const createPost = async ({ data }: TCreatePostProps): Promise<void> => {
  if (!data) return

  const db = getFirestore(app)
  const route = `posts`

  try {
    const postRef = collection(db, route)

    await addDoc(postRef, {
      ...data,
    })
  } catch (err) {
    console.error('🚀 ~ createPost ~ err:', err)

    throw new Error('....')
  }
}
