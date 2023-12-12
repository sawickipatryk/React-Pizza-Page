import { removeIdToken, removeRefreshToken } from './token'

import { store } from '../store'

import {
  createActionRemoveIsUserLoggedId,
  createActionRemoveUserEmail
} from '../state/auth'

export const logOut = () => {
  removeIdToken()
  removeRefreshToken()
  store.dispatch(createActionRemoveIsUserLoggedId())
  store.dispatch(createActionRemoveUserEmail())
  return Promise.resolve()
}

export default logOut
