import { configureStore } from '@reduxjs/toolkit'

import { apiSlice } from './api/apiSlice'
import authReducer from './slices/auth/authSlice'
import modalReducer from './slices/modal/modalSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    modal: modalReducer,
  },
  // devTools: false,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([apiSlice.middleware]),
})
