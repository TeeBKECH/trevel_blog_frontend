import { useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectCurrentUser } from '../../store/slices/auth/authSlice'

export const ProtectedRoute = ({ children }) => {
  const user = useSelector(selectCurrentUser)

  const location = useLocation()
  const state = {
    from: location,
  }

  return user ? (
    children
  ) : (
    <Navigate
      to='/login'
      state={state}
      replace
    />
  )
}
