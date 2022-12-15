import { RootState } from '../../index'

export const selectIsAuth = (state: RootState) => state.auth.isAuth
