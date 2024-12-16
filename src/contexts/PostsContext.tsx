import { createContext, ReactNode, useEffect, useState } from 'react'

import GetPostsService from '@/services/posts/GetPostsService'

interface IPostsContextDataProps {
  loading: { screen: boolean; element: boolean }
  posts: any[]
}

interface IPostsContextProviderProps {
  children: ReactNode
}

export const PostsContext = createContext<IPostsContextDataProps>(
  {} as IPostsContextDataProps,
)

export function PostsContextProvider({ children }: IPostsContextProviderProps) {
  const { getPostsService } = new GetPostsService()
  const [loading, setLoading] = useState({ screen: false, element: false })

  const [posts, setPosts] = useState<any[]>([])

  async function getPosts() {
    await getPostsService()
      .then((res) => {
        setPosts(res)
      })
      .catch((err) => {
        console.log('🚀 ~ awaitgetPostsService ~ err:', err)
      })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <PostsContext.Provider
      value={{
        loading,
        posts,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
