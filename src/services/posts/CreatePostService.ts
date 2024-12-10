import { addDoc, collection, getFirestore } from 'firebase/firestore'

import { app } from '@/lib/firebase'

type TCreatePosrProps = {
  data: any
}

class CreatePostService {
  private db

  constructor() {
    this.db = getFirestore(app)
  }

  public async createPostService({ data }: TCreatePosrProps): Promise<any> {
    try {
      const postRef = collection(this.db, `posts`)

      await addDoc(postRef, {
        ...data,
      })
    } catch (err) {
      console.log('🚀 ~ CreatePostService ~ createPostService ~ err:', err)
    }
  }
}

export default CreatePostService
