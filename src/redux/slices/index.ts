import { combineReducers } from "@reduxjs/toolkit";
import counterSlices from "./counterSlice";
import sidebarSlice from "./sidebarSlice";

export const rootReducer = combineReducers({
  counter: counterSlices,
  sidebar: sidebarSlice
})