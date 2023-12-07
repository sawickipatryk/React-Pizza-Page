export const SET = 'users/SET'
export const START = 'users/START'
export const STOP = 'users/STOP'
export const ERROR = 'users/ERROR'

export const createActionSetMenu = (data) => ({
  type: SET,
  payload: { data }
})
export const createActionStart = () => ({
  type: START
})
export const createActionStop = () => ({
  type: STOP
})
export const createActionSetError = (error) => ({
  type: ERROR,
  payload: { error }
})

const initialState = {
  value: null,
  error: null,
  loading: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET:
      return {
        ...state,
        value: action.payload.data
      }
    case START:
      return {
        ...state,
        loading: true,
        value: initialState.value,
        error: initialState.error
      }
    case STOP:
      return {
        ...state,
        loading: initialState.loading
      }
    case ERROR:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default reducer
