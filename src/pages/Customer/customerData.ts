import appSupabase from '~/supabase/appSupabase'

export interface Customer {
  id: number
  name: string
  email: string
  phone: string
  country: string
}

export const columns = [
  {
    header: 'Customer ID',
    accessorKey: 'id'
  },
  {
    header: 'Name',
    accessorKey: 'name'
  },
  {
    header: 'email',
    accessorKey: 'email'
  },
  {
    header: 'phone',
    accessorKey: 'phone'
  },
  {
    header: 'country',
    accessorKey: 'country'
  }
]
