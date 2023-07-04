import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import Header from '../header'
import Footer from '../footer'
import { ProtectedRoute } from '../../protected'

import WelcomePage from '../../../pages/welcome'
// import Home from '../../../pages/home'
import LoginPage from '../../../pages/login'
import RegistrationPage from '../../../pages/registration'
// import PostsPage from '../../../pages/posts'
import ProfilePage from '../../../pages/profile'
import ErrorPage from '../../../pages/ErrorPage'

import { selectCurrentUser } from '../../../store/slices/auth/authSlice'
// import { useGetPostsQuery } from '../../../store/slices/posts/postsApiSlice'
import { useGetMeQuery } from '../../../store/slices/auth/authApiSlice'
import { setUser } from '../../../store/slices/auth/authSlice'
// import { toggleModal } from '../../../store/slices/modal/modalSlice'

import { notify } from '../../../utils/notify'

import styles from './App.module.scss'

function App() {
  const accessToken = localStorage.getItem('accessToken')

  const dispatch = useDispatch()
  const location = useLocation()

  const { from } = location?.state || '/profile'

  console.log(from)

  const userInfo = useSelector(selectCurrentUser)
  const { showModal } = useSelector((store) => store.modal)

  // const {
  //   data: userData,
  //   isError: isUserError,
  //   isLoading: isUsersLoadaing,
  //   isSuccess: isUserSuccess,
  //   error: userError,
  // } = useGetMeQuery()

  // const {
  //   data: postsData,
  //   isLoading: isPostsLoadaing,
  //   isSuccess: isPostsSuccess,
  //   isError: isPostsError,
  //   error: postsError,
  // } = useGetPostsQuery()

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
      <Header />
      <main className={styles.main}>
        <Routes location={location}>
          <Route
            index
            element={
              <WelcomePage />
              // <Home
              // posts={postsData}
              // isLoading={isPostsLoadaing}
              // isSuccess={isPostsSuccess}
              // />
            }
          />
          <Route
            path='/login'
            element={
              userInfo ? (
                <Navigate
                  to='/'
                  replace
                />
              ) : (
                <LoginPage />
              )
            }
          />
          <Route
            path='/registration'
            element={
              userInfo ? (
                <Navigate
                  to='/'
                  replace
                />
              ) : (
                <RegistrationPage />
              )
            }
          />
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
            path='/profile'
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
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
