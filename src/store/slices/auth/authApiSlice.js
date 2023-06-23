import { apiSlice } from '../../api/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: '/auth/registration',
        method: 'POST',
        body: data,
      }),
    }),
    logOut: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
    getMe: builder.query({
      query: () => ({
        url: '/auth/profile',
      }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation, useGetMeQuery, useLogOutMutation } =
  authApiSlice
