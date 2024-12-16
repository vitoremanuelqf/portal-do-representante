import { collection, getDocs, getFirestore, query } from 'firebase/firestore'

import { app } from '@/lib/firebase'

class GetPostsService {
  public async getPostsService(): Promise<any> {
    const db = getFirestore(app)

    try {
      const postsRef = collection(db, `posts`)
      const postsQuery = query(postsRef)
      const postsSnapshot = await getDocs(postsQuery)

      const posts = postsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      return posts
    } catch (err) {
      console.log('🚀 ~ GetPostsService ~ getPostsService ~ err:', err)
    }
  }
}

export default GetPostsService
