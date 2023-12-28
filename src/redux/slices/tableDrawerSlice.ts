import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TableDrawerState {
  showTableDrawer: boolean
  showAddTableDrawer: boolean
  showEditTableDrawer: boolean
  showDeleteTableDrawer: boolean
  dataTable: any
  searchTable: string | undefined
  pageSize: number
  pageNumber: number
  pageTotal: number
}

const initialState = {
  showTableDrawer: false,
  showAddTableDrawer: false,
  showEditTableDrawer: false,
  showDeleteTableDrawer: false,
  dataTable: {},
  searchTable: '',
  pageSize: 10,
  pageNumber: 1,
  pageTotal: 1
} as TableDrawerState

const tableDrawerSlice = createSlice({
  name: 'tableDrawer',
  initialState,
  reducers: {
    setDataTable: (state, action) => {
      Object.assign(state.dataTable, action.payload)
    },
    setSearchTable: (state, action: PayloadAction<string | undefined>) => {
      state.searchTable = action.payload
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload
    },
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload
    },
    setPageTotal: (state, action: PayloadAction<number>) => {
      state.pageTotal = action.payload
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

export const {
  setDataTable,
  toggleTableDrawer,
  toggleAddTableDrawer,
  toggleEditTableDrawer,
  toggleDeleteTableDrawer,
  setSearchTable,
  setPageSize,
  setPageNumber,
  setPageTotal
} = tableDrawerSlice.actions
export default tableDrawerSlice.reducer
