import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setUser, logOut } from '../slices/auth/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL + '/api/',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  // console.log('result ', result)
  if (result?.error?.status === 401) {
    // console.log('sending refresh token')
    const refreshResult = await baseQuery('auth/refresh', api, extraOptions)
    // console.log('refreshResult ', refreshResult)
    if (refreshResult?.data) {
      const { accessToken, user } = refreshResult.data
      api.dispatch(setUser({ accessToken, user }))
      localStorage.setItem('accessToken', accessToken)
      result = await baseQuery(args, api, extraOptions)
    } else {
      localStorage.removeItem('accessToken')
      api.dispatch(logOut())
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Post', 'User'],
  endpoints: (builder) => ({}),
})
