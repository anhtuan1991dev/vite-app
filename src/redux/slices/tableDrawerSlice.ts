import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TableDrawerState {
  showTableDrawer: boolean
}

const initialState = { showTableDrawer: false } as TableDrawerState

const tableDrawerSlice = createSlice({
  name: 'tableDrawer',
  initialState,
  reducers: {
    toggleTableDrawer(state, action: PayloadAction<boolean>) {
      state.showTableDrawer = action.payload
    }
  }
})

export const { toggleTableDrawer } = tableDrawerSlice.actions
export default tableDrawerSlice.reducer
