import { collection, getDocs, getFirestore } from 'firebase/firestore'

import { app } from '@/lib/firebase'

type TGetPostService = {
  id: string
}

class GetPostService {
  private db

  constructor() {
    this.db = getFirestore(app)
  }

  public async getPostService({ id }: TGetPostService): Promise<any> {
    try {
      const postRef = collection(this.db, `posts`, id)
      const postSnapshot = await getDocs(postRef)

      const post = postSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      return post
    } catch (err) {
      console.log('🚀 ~ GetPostService ~ getPostService ~ err:', err)
    }
  }
}

export default GetPostService
