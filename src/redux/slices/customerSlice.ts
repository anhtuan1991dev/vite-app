import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CustomerState {
  id: number
  name: string
  email: string
  phone: string
  country: string
}

type initialStateType = {
  customerList: CustomerState[]
}

const customerList: CustomerState[] = []

const initialState: initialStateType = {
  customerList
}

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    updateCustomer: (state, action: PayloadAction<CustomerState>) => {
      const {
        payload: { id, name, email, phone, country }
      } = action

      state.customerList = state.customerList.map((data) =>
        data.id === id ? { ...data, name, email, phone, country } : data
      )
    }
  }
})

export const { updateCustomer } = customerSlice.actions
export default customerSlice.reducer
