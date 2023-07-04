import PostsList from '../../components/posts-list'

import styles from './home.module.scss'

const Home = ({ posts, isLoading, isSuccess }) => {
  // console.log('posts: ', posts)
  return (
    <section className={styles.posts}>
      <PostsList
        posts={posts}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
    </section>
  )
}

export default Home
