import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router-dom'

import Header from '../header'
import Footer from '../footer'
import { ProtectedRoute } from '../../protected'

import Home from '../../../pages/home'
import Auth from '../../../pages/auth/auth'
import ErrorPage from '../../../pages/ErrorPage'

import { useGetPostsQuery } from '../../../store/slices/posts/postsApiSlice'
// import { useGetMeQuery } from '../../../store/slices/auth/authApiSlice'
// import { setUser } from '../../../store/slices/auth/authSlice'
// import { toggleModal } from '../../../store/slices/modal/modalSlice'

import { notify } from '../../../utils/notify'

import styles from './App.module.scss'

function App() {
  const accessToken = localStorage.getItem('accessToken')
  const dispatch = useDispatch()
  const location = useLocation()

  const { showModal } = useSelector((store) => store.modal)

  // const {
  //   data: userData,
  //   isError: isUserError,
  //   isLoading: isUsersLoadaing,
  //   isSuccess: isUserSuccess,
  //   error: userError,
  // } = useGetMeQuery()

  const {
    data: postsData,
    isLoading: isPostsLoadaing,
    isSuccess: isPostsSuccess,
    isError: isPostsError,
    error: postsError,
  } = useGetPostsQuery()

  // useEffect(() => {
  //   if (isUserSuccess) {
  //     notify(`Добро пожаловать ${userData.email}`, 'success')
  //     dispatch(setUser({ accessToken, user: userData }))
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isUserSuccess])

  // useEffect(() => {
  //   if (productError?.status) {
  //     notify(productError?.data?.message, 'error')
  //   }
  //   if (userError?.status) {
  //     notify(userError?.data?.message, 'error')
  //   }
  // }, [productError, userError])

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
              <Home
                posts={postsData}
                isLoading={isPostsLoadaing}
                isSuccess={isPostsSuccess}
              />
            }
          />
          <Route
            path='/auth'
            element={<Auth />}
          />
          {/* <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <Profile />
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
