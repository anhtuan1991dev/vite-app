import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { CustomerType } from '~/pages/Customer/CustomerType'
import customerService from '~/services/customerService'

export const fetchAll = createAsyncThunk('customer/fetch-all', async () => {
  const response = await customerService.getAll()
  return response.data
})

// export const fetchGetId = createAsyncThunk('customer/fetch-id', async (id: number | string) => {
//   const response = await customerService.getId(id)
//   return response.data
// })

export const fetchCreateCustomer = createAsyncThunk('customer/create', async (data: CustomerType) => {
  console.log(111);
  
  const response = await customerService.createCustomer(data)
  return response
})

interface CustomersState {
  createCustomerDrawer: boolean
  updateCustomerDrawer: boolean
  entities: CustomerType[]
  customer: CustomerType
  loading: boolean
  error: string | null
}

const initialState: CustomersState = {
  createCustomerDrawer: false,
  updateCustomerDrawer: false,
  entities: [],
  customer: { id: 0, name: '', email: '', phone: '', address: '', country: '' },
  loading: false,
  error: null
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
      .addCase(fetchAll.fulfilled, (state, action) => {
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
      .addCase(fetchCreateCustomer.fulfilled, (state, action) => {
        state.loading = false
        state.entities.push(action.payload.data)
      })
      .addCase(fetchCreateCustomer.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
  }
})

export const { dataCustomer } = customerSlice.actions
export default customerSlice.reducer
