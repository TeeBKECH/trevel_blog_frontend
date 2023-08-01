import { apiSlice } from '../../api/apiSlice'

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `/posts`,
      providesTags: (result) => {
        return result ? [...result.map(({ _id }) => ({ type: 'Posts', _id })), 'Posts'] : ['Posts']
      },
    }),
    getPost: builder.query({
      query: (id) => `/posts/${id}`,
    }),
  }),
})

export const { useGetPostsQuery, useGetPostQuery } = postsApiSlice
