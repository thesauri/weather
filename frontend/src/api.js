export const reset = () => {
  const params = {
    method: "delete",
      mode: "cors"
  };
    
  fetch("http://localhost:4000/measurements/reset", params)
    .then((response) => response.json())
    .then((result) => {
        // Should be properly done without refreshing by refreshing the city state
        window.location.reload();
    })
    .catch((error) => {
      console.error(error);
  });
}