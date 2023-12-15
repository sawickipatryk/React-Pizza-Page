import makeRequest from '../../auth/makeRequest'

export const deleteItem = async (idToDelete) => {
  return makeRequest(
    `https://pizzawebsite-dd509-default-rtdb.firebaseio.com/cart/${idToDelete}.json`, {
      method: 'DELETE'
    }
  )
}
export default deleteItem
