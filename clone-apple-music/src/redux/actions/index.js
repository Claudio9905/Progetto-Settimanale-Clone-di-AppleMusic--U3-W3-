// Qui vado a creare le creator actions e l'action per la chiamata all'API
export const GET_CARD = "GET_CARD";
export const GET_SONG = "GET_SONG";

const endpoint =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";

export const getSongAction = () => {
  return (dispatch) => {
    fetch(endpoint)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((resData) => {
        console.log(resData);
        dispatch({
          type: GET_SONG,
          payload: resData,
        });
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };
};
