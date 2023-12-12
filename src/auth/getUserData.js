import { makeRequest } from './makeRequest'
import { getIdToken } from './token'
import { FIREBASE_APP_KEY } from './const'

import { store } from '../store'

import {
  createActionSetIsUserLoggedId,
  createActionSetUserEmail
} from '../state/auth'

const GET_USER_DATA_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=' + FIREBASE_APP_KEY

export const getUserData = () => {
  const token = getIdToken()

  if (!token) return Promise.reject(new Error('No token found'))

  return makeRequest(
    GET_USER_DATA_URL,
    {
      method: 'POST',
      body: JSON.stringify({
        idToken: token
      })
    }
  ).then((data) => {
    const user = data && data.users && data.users[0]
    store.dispatch(createActionSetIsUserLoggedId())
    store.dispatch(createActionSetUserEmail(user.email))
    return data && data.users && data.users[0]
  }
  )
}

export default getUserData
