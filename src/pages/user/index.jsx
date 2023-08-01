import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useGetUserQuery } from '../../store/slices/user/userApiSlice'

import styles from './user.module.scss'

const UserPage = () => {
  const { id } = useParams()

  const { data, isError, isLoading, isSuccess, error } = useGetUserQuery(id)

  useEffect(() => {
    if (isSuccess) {
      console.log(data)
    }
    if (isError) {
      console.log(error)
    }
  }, [isSuccess])
  return <div>{data?._id}</div>
}

export default UserPage
