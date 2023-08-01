import { apiSlice } from '../../api/apiSlice'

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // login: builder.mutation({
    //   query: (data) => ({
    //     url: '/auth/login',
    //     method: 'POST',
    //     body: data,
    //   }),
    // }),
    getUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
      }),
    }),
  }),
})

export const { useGetUserQuery } = userApiSlice
