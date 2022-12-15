import { RootState } from '../../index'

export const selectAllUsers = (state: RootState) => state.user.users
