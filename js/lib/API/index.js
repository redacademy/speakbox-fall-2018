export const apiPromise = (path, headerConfigs) => {
  const baseURL = 'https://api.speakbox-staging.ca/api';

  const defaultHeaderOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  const headerOptions = {
    method: 'GET', //defalut method
    ...headerConfigs,
    headers: { ...headerConfigs.headers, ...defaultHeaderOptions.headers },
  };

  return fetch(baseURL + path, headerOptions)
    .then(res => res.json())
    .then(res => res)
    .catch(e => e);
};
