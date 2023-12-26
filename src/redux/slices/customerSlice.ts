import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { CustomerType } from '~/pages/CustomerPage/CustomerType'
import customerService from '~/services/customerService'
import appSupabase from '~/supabase/appSupabase'
import { supabase } from '~/supabase/supabase'

export const fetchAll = createAsyncThunk('customer/fetch-all', async () => {
  const response = await customerService.getAll()
  return (response.data as CustomerType[]).sort((a, b) => a.id - b.id)
})

export const fetchFiltering = createAsyncThunk('customer/filtering', async (value: string | undefined) => {
  const filter = `name.like.%${value}%,email.like.%${value}%,phone.like.%${value}%,country.like.%${value}%,address.like.%${value}%`
  const response = await supabase.from('customer').select('*').or(filter)
  if (response.data !== null) return (response.data as CustomerType[]).sort((a, b) => a.id - b.id)
  else {
    const response = await customerService.getAll()
    return (response.data as CustomerType[]).sort((a, b) => a.id - b.id)
  }
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

export const fetchUpdateCustomer = createAsyncThunk('customer/update', async (data: CustomerType, thunkAPI) => {
  const response = await appSupabase.patch(`/customer?id=eq.${data.id}`, data, {
    signal: thunkAPI.signal,
    headers: {
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    }
  })
  return response
})

export const fetchDeleteCustomer = createAsyncThunk('customer/delete', async (id: number, thunkAPI) => {
  const response = await appSupabase.delete(`/customer?id=eq.${id}`, {
    signal: thunkAPI.signal
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
      // fetchAll
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
      // fetchCreateCustomer
      .addCase(fetchCreateCustomer.fulfilled, (state) => {
        state.loading = false
        state.error = null
      })
      .addCase(fetchCreateCustomer.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
      // fetchUpdateCustomer
      .addCase(fetchUpdateCustomer.fulfilled, (state) => {
        state.loading = false
        state.error = null
      })
      .addCase(fetchUpdateCustomer.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
      // fetchDeleteCustomer
      .addCase(fetchDeleteCustomer.fulfilled, (state) => {
        state.loading = false
        state.error = null
      })
      .addCase(fetchDeleteCustomer.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
      // fetchFiltering
      .addCase(fetchFiltering.fulfilled, (state, action: PayloadAction<CustomerType[]>) => {
        state.loading = false
        state.error = null
        state.entities = action.payload
      })
      .addCase(fetchFiltering.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
  }
})

export const { dataCustomer } = customerSlice.actions
export default customerSlice.reducer
