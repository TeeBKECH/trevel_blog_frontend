import { useEffect } from 'react'
import clsx from 'clsx'

import { useGetPostsQuery } from '../../store/slices/posts/postsApiSlice'

import styles from './home.module.scss'
import Post from '../../components/post'
import PostSkeleton from '../../components/post/PostSkeleton'

const Home = () => {
  const { data, isError, isLoading, isSuccess, error } = useGetPostsQuery()

  return (
    <section className={styles.home}>
      <div className={clsx('container', styles.container)}>
        {isLoading && [...Array(10)].map((item, i) => <PostSkeleton key={i} />)}
        {isError && <div>{error?.data?.message}</div>}
        {isSuccess &&
          data.map((post, i) => (
            <Post
              key={i}
              {...post}
            />
          ))}
      </div>
    </section>
  )
}

export default Home
