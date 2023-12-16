import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface SidebarState {
  showSidebar: boolean
}

const initialState = { showSidebar: true } as SidebarState

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSideBar(state, action: PayloadAction<boolean>) {
      state.showSidebar = action.payload
    }
  }
})

export const { toggleSideBar } = sidebarSlice.actions
export default sidebarSlice.reducer
