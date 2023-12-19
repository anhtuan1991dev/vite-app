import { combineReducers } from "@reduxjs/toolkit";
import counterSlices from "./counterSlice";
import sidebarSlice from "./sidebarSlice";
import tableDrawerSlice from "./tableDrawerSlice";

export const rootReducer = combineReducers({
  counter: counterSlices,
  sidebar: sidebarSlice,
  tableDrawer: tableDrawerSlice
})