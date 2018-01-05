const url = process.env.NODE_ENV === "production" ?
  "https://weather-reporting.herokuapp.com" :
  "http://localhost:4000";

export const fetchCities = (onSuccess) => {
  fetch(`${url}/cities`)
    .then((response) => response.json())
    .then((result) => {
      return onSuccess(result);
    }).catch((error) => {
      console.error(error);
  });
};

export const updateCity = (cityId, temperature, onSuccess) => {
  const body = {
    city_id: cityId,
    temperature: temperature
  };

  const params = {
    method: "post",
    mode: "cors",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(body)
  };

  fetch(`${url}/measurements`, params)
    .then((response) => response.json())
    .then((result) => {
      return onSuccess(result);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const reset = (onSuccess) => {
  const params = {
    method: "delete",
      mode: "cors"
  };
    
  fetch(`${url}/measurements/reset`, params)
    .then((response) => response.json())
    .then((result) => {
        return onSuccess(result);
    })
    .catch((error) => {
      console.error(error);
  });
};