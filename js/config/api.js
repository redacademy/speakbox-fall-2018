const getAPI = (path, headerConfig) => {
  const baseURL = "https://api.speakbox-staging.ca/api";
  const defaultHeaderOptions = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  const headerOptions = {
    ...headerConfig,
    headers: { ...headerConfig.headers, ...defaultHeaderOptions }
  };
  return fetch(baseURL + path, headerOptions)
    .then(res => res.json())
    .then(res => res)
    .catch(e => e);
};

export default getAPI;
