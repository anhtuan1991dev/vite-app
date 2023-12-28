import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { CustomerType } from '~/pages/CustomerPage/CustomerType'
import appSupabase from '~/supabase/appSupabase'
import { supabase } from '~/supabase/supabase'

type PropsAllCustomer = {
  pageSize: number
  pageNumber: number
  valueFilter?: string | undefined
}

export const fetchAllCustomer = createAsyncThunk(
  'customer/fetch-all-customer',
  async ({ pageSize, pageNumber, valueFilter }: PropsAllCustomer) => {
    const baseCustomer = supabase
      .from('customer')
      .select('*')
      .order('id', { ascending: true })
      .range(pageSize * (pageNumber - 1), pageSize - 1)

    async function getAll() {
      const response = await baseCustomer
      return (response.data as CustomerType[]).sort((a, b) => a.id - b.id)
    }

    async function getAllFilter() {
      const filter = `name.like.%${valueFilter}%,email.like.%${valueFilter}%,phone.like.%${valueFilter}%,country.like.%${valueFilter}%,address.like.%${valueFilter}%`
      const resFilter = await baseCustomer.or(filter)
      if (resFilter.data !== null) return (resFilter.data as CustomerType[]).sort((a, b) => a.id - b.id)
      else return await getAll()
    }

    if (valueFilter === '' || valueFilter === undefined) {
      return await getAll()
    } else {
      return await getAllFilter()
    }
  }
)

export const fetchCountCustomer = createAsyncThunk('customer/fetch-count-customer', async () => {
  const response = await supabase.from('customer').select('*', { count: 'exact', head: true })
  if (response.count === null) return 0
  else return response.count
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
  countData: number
}

const initialState: CustomersState = {
  createCustomerDrawer: false,
  updateCustomerDrawer: false,
  entities: [],
  customer: { id: 0, name: '', email: '', phone: '', address: '', country: '' },
  loading: false,
  error: null,
  status: 0,
  countData: 0
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
      // fetchAllCustomer
      .addCase(fetchAllCustomer.fulfilled, (state, action: PayloadAction<CustomerType[]>) => {
        state.loading = false
        state.entities = action.payload
      })
      .addCase(fetchAllCustomer.rejected, (state, action) => {
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
      // fetchCountCustomer
      .addCase(fetchCountCustomer.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.countData = action.payload
      })
      .addCase(fetchCountCustomer.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
  }
})

export const { dataCustomer } = customerSlice.actions
export default customerSlice.reducer
function dispatch(arg0: any) {
  throw new Error('Function not implemented.')
}
