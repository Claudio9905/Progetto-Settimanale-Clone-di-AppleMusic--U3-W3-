import { GET_SONG } from "../actions";

const initialState = {
  content: [],
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONG:
      return {
        ...state,
        content: action.payload.data,
      };

    default:
      return state;
  }
};

export default songReducer;
