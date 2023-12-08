import { store } from './store'

import {
  createActionStart,
  createActionStop,
  createActionSetError
}
  from './state/menu'

export const handleAsyncAction = async (asyncAction, message) => {
  store.dispatch(createActionStart(message))
  try {
    await asyncAction()
  } catch (error) {
    store.dispatch(createActionSetError(error.message || error.data.error.message))
  } finally {
    store.dispatch(createActionStop())
  }
}

export default handleAsyncAction
