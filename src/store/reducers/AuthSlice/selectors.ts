import { RootState } from '../../index'

export const selectIsAuth = (state: RootState) => state.auth.isAuth
export const selectIsCheckedGetInfo = (state: RootState) =>
  state.auth.isCheckedGetInfo
