import React from 'react'

import Post from '../post'

import styles from './posts-list.module.scss'

const PostsList = ({ posts, isLoading, isSuccess }) => {
  return (
    <div className={styles.posts}>
      {isLoading && 'Загрузка...'}
      {isSuccess &&
        posts.length &&
        posts.map((post, i) => (
          <Post
            data={post}
            key={i}
          />
        ))}
    </div>
  )
}

export default PostsList
