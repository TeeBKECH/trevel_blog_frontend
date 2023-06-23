import { apiSlice } from '../../api/apiSlice'

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `/posts`,
      providesTags: (result) => {
        return result ? [...result.map(({ id }) => ({ type: 'Posts', id })), 'Posts'] : ['Posts']
      },
    }),
  }),
})

export const { useGetPostsQuery } = postsApiSlice
