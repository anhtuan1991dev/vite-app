import { useEffect, useState } from 'react'
import { Table, TableSearch } from '~/components/Table'
import { Customer, columns } from './customerData'
import customerService from '~/services/customerService'
import Row from '~/components/Row'
import CustomerCreate from './CustomerCreate'
import CustomerEdit from './CustomerEdit'

const Customer = () => {
  const [data, setData] = useState<Customer[]>([])
  useEffect(() => {
    customerService.getAll().then((response) => {
      setData(response.data)
    })
  }, [])

  if (data.length <= 0) return null

  return (
    <Row>
      <div className='pb-2 w-full'>
        <h2 className='text-2xl'>Customer List</h2>
      </div>

      <div className='basis-full p-5 bg-white border border-gray-300'>
        <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 pb-4'>
          <TableSearch />
          <div className='w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0'>
            <CustomerCreate />
          </div>
        </div>

        <Table<Customer> columns={columns} data={data} fromEdit={<CustomerEdit />} />
      </div>
    </Row>
  )
}

export default Customer
