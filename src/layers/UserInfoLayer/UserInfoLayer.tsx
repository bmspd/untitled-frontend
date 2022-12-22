import React, { PropsWithChildren, useEffect } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useSelector } from 'react-redux'
import { selectIsCheckedGetInfo } from '../../store/reducers/AuthSlice/selectors'
import { getInfo } from '../../store/reducers/AuthSlice/asyncThunks'
const UserInfoLayer: React.FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useTypedDispatch()
  const isCheckedGetInfo = useSelector(selectIsCheckedGetInfo)
  useEffect(() => {
    dispatch(getInfo(localStorage.getItem('userId')))
  }, [])
  return isCheckedGetInfo ? <>{children}</> : null
}

export default UserInfoLayer
