import objectToArray from './objectToArray'

export const getAll = async () => {
  const response = await fetch(`${process.env.REACT_APP_FIREBASE_URL}/.json`)
  const data = await response.json()
  return objectToArray(data)
}
export default getAll
