import objectToArray from '../const/objectToArray'

export const getAllCart = async () => {
  const response = await fetch(`${process.env.REACT_APP_FIREBASE_URL}/cart/.json`)
  const data = await response.json()
  return objectToArray(data)
}
export default getAllCart
