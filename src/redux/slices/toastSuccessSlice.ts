import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ToastState {
  isShow: boolean
}

const initialState = { isShow: false } as ToastState

const toastSuccessSlice = createSlice({
  name: 'toastSuccess',
  initialState,
  reducers: {
    toggleToastSuccess(state, action: PayloadAction<boolean>) {
      state.isShow = action.payload
    }
  }
})

export const { toggleToastSuccess } = toastSuccessSlice.actions
export default toastSuccessSlice.reducer
