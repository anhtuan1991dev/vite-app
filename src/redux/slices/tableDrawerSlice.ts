import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TableDrawerState {
  showTableDrawer: boolean
  showAddTableDrawer: boolean
  showEditTableDrawer: boolean
  showDeleteTableDrawer: boolean
  dataTable: any
}

const initialState = {
  showTableDrawer: false,
  showAddTableDrawer: false,
  showEditTableDrawer: false,
  showDeleteTableDrawer: false,
  dataTable: {}
} as TableDrawerState

const tableDrawerSlice = createSlice({
  name: 'tableDrawer',
  initialState,
  reducers: {
    setDataTable: (state, action) => {
      Object.assign(state.dataTable, action.payload)
    },
    toggleTableDrawer(state, action: PayloadAction<boolean>) {
      state.showTableDrawer = action.payload
    },
    toggleAddTableDrawer(state, action: PayloadAction<boolean>) {
      state.showAddTableDrawer = action.payload
    },
    toggleEditTableDrawer(state, action: PayloadAction<boolean>) {
      state.showEditTableDrawer = action.payload
    },
    toggleDeleteTableDrawer(state, action: PayloadAction<boolean>) {
      state.showDeleteTableDrawer = action.payload
    }
  }
})

export const { setDataTable, toggleTableDrawer, toggleAddTableDrawer, toggleEditTableDrawer, toggleDeleteTableDrawer } =
  tableDrawerSlice.actions
export default tableDrawerSlice.reducer
