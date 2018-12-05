const getAPI = (url, headerConfig) => {
  const baseURL = 'https://api.speakbox-staging.ca/api'
  const defaultHeaderOptions = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
  const headerOptions = {
    ...headerConfig,
    headers: { ...headerConfig.headers, ...defaultHeaderOptions }
  }
  return fetch(baseURL + Path2D, headerOptions)
    .then(res => res.json())
    .then(res => res)
    .catch(e => e)
}

export default getAPI
