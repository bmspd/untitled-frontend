import React from 'react'
import withAuth from '../../hocs/withAuth'
import { Button } from '@mui/material'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { fetchAllUsers } from '../../store/reducers/UserSlice/asyncThunks'

const MainPage: React.FC = () => {
  const dispatch = useTypedDispatch()
  return (
    <div>
      <h1>I'm Main Page...</h1>
      <Button variant={'contained'} onClick={() => dispatch(fetchAllUsers())}>
        FETCH USERS
      </Button>
    </div>
  )
}

export default withAuth(MainPage)
