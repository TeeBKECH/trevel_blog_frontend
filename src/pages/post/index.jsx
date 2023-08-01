import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import clsx from 'clsx'

import { useGetPostQuery } from '../../store/slices/posts/postsApiSlice'

import styles from './post.module.scss'

const PostPage = () => {
  const { id } = useParams()

  const { data, isError, isLoading, isSuccess, error } = useGetPostQuery(id)

  useEffect(() => {
    if (isSuccess) {
      console.log(data)
    }
    if (isError) {
      console.log(error)
    }
  }, [isSuccess])

  return (
    <section className={styles.post}>
      <div className={clsx('container', styles.container)}>{data?.title}</div>
    </section>
  )
}

export default PostPage
