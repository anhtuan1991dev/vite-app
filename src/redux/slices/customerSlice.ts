import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { CustomerType } from '~/pages/Customer/CustomerType'
import customerService from '~/services/customerService'
import appSupabase from '~/supabase/appSupabase'

export const fetchAll = createAsyncThunk('customer/fetch-all', async () => {
  const response = await customerService.getAll()
  return (response.data as CustomerType[]).sort((a, b) => a.id - b.id)
})

export const fetchCreateCustomer = createAsyncThunk('customer/create', async (data: CustomerType, thunkAPI) => {
  const response = await appSupabase.post('/customer', data, {
    signal: thunkAPI.signal,
    headers: {
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    }
  })
  return response
})

interface CustomersState {
  createCustomerDrawer: boolean
  updateCustomerDrawer: boolean
  entities: CustomerType[]
  customer: CustomerType
  loading: boolean
  error: string | null
  status: number
}

const initialState: CustomersState = {
  createCustomerDrawer: false,
  updateCustomerDrawer: false,
  entities: [],
  customer: { id: 0, name: '', email: '', phone: '', address: '', country: '' },
  loading: false,
  error: null,
  status: 0
}

const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    toggleCreateCustomerDrawer(state, action: PayloadAction<boolean>) {
      state.createCustomerDrawer = action.payload
    },
    toggleUpdateCustomerDrawer(state, action: PayloadAction<boolean>) {
      state.updateCustomerDrawer = action.payload
    },
    dataCustomer: (state, action: PayloadAction<CustomerType>) => {
      Object.assign(state.customer, action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAll.fulfilled, (state, action: PayloadAction<CustomerType[]>) => {
        state.loading = false
        state.entities = action.payload
      })
      .addCase(fetchAll.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
      .addCase(fetchCreateCustomer.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCreateCustomer.fulfilled, (state) => {
        state.loading = false
        state.error = null
      })
      .addCase(fetchCreateCustomer.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
  }
})

export const { dataCustomer } = customerSlice.actions
export default customerSlice.reducer
