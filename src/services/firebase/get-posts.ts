import { collection, getDocs, getFirestore, query } from 'firebase/firestore'

import { app } from '@/lib/firebase'
import { IPost } from '@/types/post'

type TGetPostsResponse = IPost[]

export const getPosts = async (): Promise<TGetPostsResponse> => {
  const db = getFirestore(app)
  const route = `posts`

  try {
    const postsRef = collection(db, route)

    const postsQuery = query(postsRef)

    const postsSnapshot = await getDocs(postsQuery)

    const posts = postsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as IPost[]

    return posts
  } catch (err) {
    console.error('🚀 ~ getTransactions ~ err:', err)

    throw new Error(
      'Não foi possível buscar as transações filtradas. Por favor, tente novamente mais tarde.',
    )
  }
}
