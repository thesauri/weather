export const fetchCities = (onSuccess) => {
  fetch("http://localhost:4000/cities")
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
  }

  const params = {
    method: "post",
    mode: "cors",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(body)
  };

  fetch("http://localhost:4000/measurements", params)
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
    
  fetch("http://localhost:4000/measurements/reset", params)
    .then((response) => response.json())
    .then((result) => {
        return onSuccess(result);
    })
    .catch((error) => {
      console.error(error);
  });
};