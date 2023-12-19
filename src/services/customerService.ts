import appSupabase from '~/supabase/appSupabase'

type Props = {
  id: number
}

class customerService {
  getAll = () => {
    return appSupabase.get('/customer?select=*')
  }

  getId = ({ id }: Props) => {
    return appSupabase.get(`/customer?id=${id}&select=*`)
  }
}

export default new customerService()
