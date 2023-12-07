const SET_LOADING = 'loaders/SET_LOADING'
const SET_ERROR = 'loaders/SET_ERROR'
const SET_INFO = 'loaders/SET_INFO'
const REMOVE_LOADING = 'loaders/REMOVE_LOADING'
const REMOVE_ERROR = 'loaders/REMOVE_ERROR'
const REMOVE_INFO = 'loaders/REMOVE_INFO'

export const createActionSetLoading = (message) => ({
  type: SET_LOADING,
  payload: { message }
})
export const createActionSetError = (message) => ({
  type: SET_ERROR,
  payload: { message }
})
export const createActionSetInfo = (message) => ({
  type: SET_INFO,
  payload: { message }
})

export const createActionRemoveLoading = (message) => ({
  type: REMOVE_LOADING
})
export const createActionRemoveError = (message) => ({
  type: REMOVE_ERROR
})
export const createActionRemoveInfo = (message) => ({
  type: REMOVE_INFO
})

const initialState = {
  isLoading: true,
  hasError: false,
  errorMessage: '',
  isInfoDisplayed: false,
  infoMessage: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        isLoading: true,
        loadingMessage: action.payload.message,
        ...state
      }
    case SET_ERROR:
      return {
        hasError: true,
        errorMessage: action.payload.message,
        ...state
      }
    case SET_INFO:
      return {
        isInfoDisplayed: true,
        infoMessage: action.payload.message,
        ...state
      }
    case REMOVE_LOADING:
      return {
        ...state,
        isLoading: false,
        loadingMessage: initialState.loadingMessage
      }
    case REMOVE_ERROR:
      return {
        ...state,
        hasError: false,
        errorMessage: initialState.errorMessage
      }
    case REMOVE_INFO:
      return {
        ...state,
        isInfoDisplayed: false,
        infoMessage: initialState.infoMessage
      }
    default:
      return state
  }
}
export default reducer
