import { GET_CARD } from "../actions";

const initialState = {
  songFavourite: [],
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARD:
      return {
        ...state,
        songFavourite: action.payload,
      };
    default:
      return state;
  }
};

export default favReducer;
