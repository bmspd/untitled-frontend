import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../../store/reducers/AuthSlice/selectors'

const LoginPage = () => {
  const isAuth = useSelector(selectIsAuth)
  return (
    <div>
      <h1>Hello, I'm Login Page...</h1>
      <h1>{JSON.stringify(isAuth)}</h1>
    </div>
  )
}

export default LoginPage
