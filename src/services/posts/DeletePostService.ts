import { deleteDoc, doc, getFirestore } from 'firebase/firestore'

import { app } from '@/lib/firebase'

type TDeletePostService = {
  id: string
}

class DeletePostService {
  private db

  constructor() {
    this.db = getFirestore(app)
  }

  public async deletePostService({ id }: TDeletePostService): Promise<void> {
    try {
      const postRef = doc(this.db, `posts`, id)
      await deleteDoc(postRef)
    } catch (err) {
      console.log('🚀 ~ DeletePostService ~ deletePostService ~ err:', err)
    }
  }
}

export default DeletePostService
