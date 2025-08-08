import { configureStore, combineReducers } from "@reduxjs/toolkit";
import songReducer from "../reducer/songReducer";
import favReducer from "../reducer/favReducer";

const combinedReducer = combineReducers({
  song: songReducer,
  card: favReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
