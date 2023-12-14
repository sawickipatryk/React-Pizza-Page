import makeRequest from '../../auth/makeRequest'

const CART_URL = 'https://pizzawebsite-dd509-default-rtdb.firebaseio.com/cart/.json'

export const sendItem = async (item) => {
  return makeRequest(
    CART_URL, {
      method: 'POST',
      body: JSON.stringify({
        id: item.id,
        name: item.name,
        price: item.price,
        text: item.text,
        quantity: item.quantity
      })
    }
  )
}
export default sendItem
