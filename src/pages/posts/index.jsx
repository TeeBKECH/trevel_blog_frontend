import React from 'react'

import PostsList from '../../components/posts-list'

import styles from './posts.module.scss'

const PostsPage = ({ posts, isLoading, isSuccess }) => {
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

export default PostsPage
