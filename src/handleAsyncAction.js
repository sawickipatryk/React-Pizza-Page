// import { store } from './store'

// export const handleAsyncAction = async (asyncAction, message) => {
//   store.dispatch(createActionStart(message))
//   try {
//     await asyncAction()
//   } catch (error) {
//     store.dispatch(createActionSetError(error.message || error.data.error.message))
//   } finally {
//     store.dispatch(createActionStop())
//   }
// }
