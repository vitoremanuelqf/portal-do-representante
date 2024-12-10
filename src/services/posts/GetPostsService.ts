import { collection, getDocs, getFirestore, query } from 'firebase/firestore'

import { app } from '@/lib/firebase'

class GetPostsService {
  private db

  constructor() {
    this.db = getFirestore(app)
  }

  public async getPostsService(): Promise<any> {
    try {
      const postsRef = collection(this.db, `posts`)
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
