import { createStore, combineReducers } from 'redux'

import loadersReducer from './state/loaders'
import menuReducer from './state/menu'
import authReducer from './state/auth'

const rootReducer = combineReducers({
  loaders: loadersReducer,
  menu: menuReducer,
  auth: authReducer
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
