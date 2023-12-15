import makeRequest from '../../auth/makeRequest'

export const patchItem = async (item, idToPatch) => {
  return makeRequest(
    `https://pizzawebsite-dd509-default-rtdb.firebaseio.com/cart/${idToPatch}.json`, {
      method: 'PATCH',
      body: JSON.stringify({
        totalPrice: item.totalPrice,
        quantity: item.quantity
      })
    }
  )
}
export default patchItem
