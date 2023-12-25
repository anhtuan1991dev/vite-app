import { useEffect } from 'react'
import { TableSearch } from '~/components/Table'
import Row from '~/components/Row'
import CustomerCreate from './CustomerCreate'
import CustomerEdit from './CustomerEdit'
import CustomerDelete from './CustomerDelete'
import {
  Tables,
  TableHeader,
  TableHeaderCol,
  TableBody,
  TableBodyRow,
  TableBodyCell,
  TableBodyAction
} from '~/components/Tables'
import { AppDispatch, RootState, useAppDispatch } from '~/redux/store'
import { useSelector } from 'react-redux'
import { fetchAll } from '~/redux/slices/customerSlice'
import CustomerSkeleton from './CustomerSkeleton'
import clsx from 'clsx'


function CustomerPage() {
  const dispatch: AppDispatch = useAppDispatch()
  const customerList = useSelector((state: RootState) => state.customer.entities)
  const loading = useSelector((state: RootState) => state.customer.loading)
  const error = useSelector((state: RootState) => state.customer.error)

  useEffect(() => {
    dispatch(fetchAll())
  }, [dispatch])

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <Row>
      {loading ? (
        <CustomerSkeleton />
      ) : (
        <>
          <div className='pb-2 w-full'>
            <h2 className='text-2xl'>Customer List</h2>
          </div>

          <div className='basis-full p-5 bg-white border border-gray-300'>
            <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 pb-4'>
              <TableSearch />
              <div
                className={clsx(
                  'w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center',
                  'items-end space-x-0 flex-shrink-0'
                )}
              >
                <div className='w-full md:w-auto flex flex-col md:flex-row md:pl-2'>
                  <CustomerCreate />
                </div>
              </div>
            </div>

            <Tables>
              <TableHeader>
                <TableHeaderCol name='ID' />
                <TableHeaderCol name='Name' />
                <TableHeaderCol name='Email' />
                <TableHeaderCol name='Phone' />
                <TableHeaderCol name='Address' />
                <TableHeaderCol name='Country' />
                <TableHeaderCol name='' />
              </TableHeader>
              <TableBody>
                {customerList.map((customer) => (
                  <TableBodyRow key={customer.id}>
                    <TableBodyCell name={customer.id} />
                    <TableBodyCell name={customer.name} />
                    <TableBodyCell name={customer.email} />
                    <TableBodyCell name={customer.phone} />
                    <TableBodyCell name={customer.address} />
                    <TableBodyCell name={customer.country} />
                    <TableBodyAction data={customer}></TableBodyAction>
                  </TableBodyRow>
                ))}
              </TableBody>
            </Tables>
            <CustomerEdit />
            <CustomerDelete/>
          </div>
        </>
      )}
    </Row>
  )
}

export default CustomerPage
