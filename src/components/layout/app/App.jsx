import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import Header from '../header'
import Footer from '../footer'
import { ProtectedRoute } from '../../protected'

import Home from '../../../pages/home'
import PostPage from '../../../pages/post'
import LoginPage from '../../../pages/login'
import RegistrationPage from '../../../pages/registration'
import UserPage from '../../../pages/user'
import ProfilePage from '../../../pages/profile'
import ErrorPage from '../../../pages/ErrorPage'

import { useGetMeQuery } from '../../../store/slices/auth/authApiSlice'
import { setUser } from '../../../store/slices/auth/authSlice'

// import { useGetPostsQuery } from '../../../store/slices/posts/postsApiSlice'
// import { toggleModal } from '../../../store/slices/modal/modalSlice'

import { notify } from '../../../utils/notify'

import styles from './App.module.scss'

function App() {
  const accessToken = localStorage.getItem('accessToken')

  const location = useLocation()
  const dispatch = useDispatch()

  const { showModal } = useSelector((store) => store.modal)

  const { from } = location.state || '/'

  const {
    data: userData,
    isError: isUserError,
    isLoading: isUsersLoadaing,
    isSuccess: isUserSuccess,
    error: userError,
  } = useGetMeQuery()

  useEffect(() => {
    if (isUserSuccess) {
      dispatch(setUser({ user: userData, accessToken }))
    }
    if (isUserError) {
      dispatch(setUser({ user: null, accessToken: '' }))
    }
  }, [isUserSuccess])

  // useEffect(() => {
  //   if (isUserSuccess) {
  //     notify(`Добро пожаловать ${userData.email}`, 'success')
  //     dispatch(setUser({ accessToken, user: userData }))
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isUserSuccess])

  // useEffect(() => {
  //   if (userError?.status) {
  //     notify(userError?.data?.message, 'error')
  //   }
  // }, [userError])

  // useEffect(() => {
  //   const body = document.getElementById('root-body')
  //   if (showModal) {
  //     body.classList.add('show-modal')
  //     dispatch(toggleModal(true))
  //   } else {
  //     body.classList.remove('show-modal')
  //     dispatch(toggleModal(false))
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [showModal])

  return (
    <div className={styles.app}>
      <Header userStatus={isUsersLoadaing} />
      <main className={styles.main}>
        <Routes location={location}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='/posts/:id'
            element={<PostPage />}
          />
          <Route
            path='/users/:id'
            element={<UserPage />}
          />
          <Route
            path='/login'
            element={
              isUserSuccess ? (
                <Navigate
                  to={from}
                  replace={true}
                />
              ) : (
                <LoginPage />
              )
            }
          />
          <Route
            path='/registration'
            element={
              isUserSuccess ? (
                <Navigate
                  to={from}
                  replace={true}
                />
              ) : (
                <RegistrationPage />
              )
            }
          />
          <Route path='/profile'>
            <Route
              index
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path='add'
              element={
                <ProtectedRoute>
                  <div>Add Post</div>
                </ProtectedRoute>
              }
            />
          </Route>

          {/* <Route
            path='/posts'
            element={
              <ProtectedRoute>
                <PostsPage
                  posts={postsData}
                  isLoading={isPostsLoadaing}
                  isSuccess={isPostsSuccess}
                />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path='*'
            element={<ErrorPage />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
