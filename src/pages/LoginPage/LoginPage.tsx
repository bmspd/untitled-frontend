import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../../store/reducers/AuthSlice/selectors'
import { Button } from '@mui/material'
import { login } from '../../store/reducers/AuthSlice/asyncThunks'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { selectAllUsers } from '../../store/reducers/UserSlice/selectors'
import { fetchAllUsers } from '../../store/reducers/UserSlice/asyncThunks'

const LoginPage = () => {
  const isAuth = useSelector(selectIsAuth)
  const users = useSelector(selectAllUsers)
  const dispatch = useTypedDispatch()
  return (
    <div>
      <h1>Hello, I'm Login Page...</h1>
      <h1>{JSON.stringify(isAuth)}</h1>
      <h4>{JSON.stringify(users)}</h4>
      <Button
        onClick={() =>
          dispatch(login({ password: '1234', username: 'pg_user' }))
        }
        variant="contained"
      >
        Login
      </Button>
      <Button onClick={() => dispatch(fetchAllUsers())} variant="contained">
        FETCH ALL USERS
      </Button>
    </div>
  )
}

export default LoginPage
