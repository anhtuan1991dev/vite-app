import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TableDrawerState {
  showTableDrawer: boolean
  showAddTableDrawer: boolean
  showEditTableDrawer: boolean
}

const initialState = {
  showTableDrawer: false,
  showAddTableDrawer: false,
  showEditTableDrawer: false
} as TableDrawerState

const tableDrawerSlice = createSlice({
  name: 'tableDrawer',
  initialState,
  reducers: {
    toggleTableDrawer(state, action: PayloadAction<boolean>) {
      state.showTableDrawer = action.payload
    },
    toggleAddTableDrawer(state, action: PayloadAction<boolean>) {
      state.showAddTableDrawer = action.payload
    },
    toggleEditTableDrawer(state, action: PayloadAction<boolean>) {
      state.showEditTableDrawer = action.payload
    }
  }
})

export const { toggleTableDrawer, toggleAddTableDrawer, toggleEditTableDrawer } = tableDrawerSlice.actions
export default tableDrawerSlice.reducer
