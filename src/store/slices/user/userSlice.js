import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  accessToken: localStorage.getItem('accessToken') || null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, accessToken } = action.payload
      state.user = user
      state.accessToken = accessToken
    },
    logOut: (state) => {
      state.user = null
      state.accessToken = null
    },
  },
})

export const { setUser, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectAccessToken = (state) => state.auth.accessToken
