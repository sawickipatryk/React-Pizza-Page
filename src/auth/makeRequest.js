export const makeRequest = async (url, options) => {
  const response = await fetch(url, options)
  const data = await response.json()
  if (!response.ok) {
    // eslint-disable-next-line no-throw-literal
    throw {
      data,
      code: response.status
    }
  }
  return data
}

export default makeRequest
