import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../store/reducers/AuthSlice/selectors'
import LoginPage from '../pages/LoginPage/LoginPage'

const withAuth =
  <P extends object>(Component: React.ComponentType<P>) =>
  (props: P) => {
    const isAuth = useSelector(selectIsAuth)
    if (!isAuth) return <LoginPage />
    return <Component {...props} />
  }

export default withAuth
