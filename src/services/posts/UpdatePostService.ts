import { doc, getFirestore, updateDoc } from 'firebase/firestore'

import { app } from '@/lib/firebase'

type TEditPostProps = {
  id: string
  data: any
}

class EditPostService {
  private db

  constructor() {
    this.db = getFirestore(app)
  }

  public async editPostService({ id, data }: TEditPostProps): Promise<void> {
    try {
      const postDoc = doc(this.db, `posts`, id)

      await updateDoc(postDoc, {
        ...data,
      })
    } catch (err) {
      console.log('🚀 ~ EditPostService ~ editPostService ~ err:', err)
    }
  }
}

export default EditPostService
