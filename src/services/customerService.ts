import { CustomerType } from '~/pages/CustomerPage/CustomerType'
import appSupabase from '~/supabase/appSupabase'

class customerService {
  getAll = async () => {
    return await appSupabase.get('/customer?select=*')
  }

  getId = (id: string | number) => {
    return appSupabase.get(`/customer?id=${id}&select=*`)
  }

  createCustomer = async (data: CustomerType) => {
    const json = JSON.stringify(data)
    const res = await appSupabase.post('/customer', json, {
      headers: {
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      }
    })

    return res
  }

  updateCustomer = async (data: CustomerType) => {
    const res = await appSupabase.post('/customer?id=', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return res.status
  }
}

export default new customerService()
