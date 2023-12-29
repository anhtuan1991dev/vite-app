import Row from '~/components/Row'
import CustomerCreate from './CustomerCreate'
import CustomerEdit from './CustomerEdit'
import CustomerDelete from './CustomerDelete'
import CustomerExport from './CustomerExport'
import CustomerSearch from './CustomerSearch'
import CustomerSkeleton from './CustomerSkeleton'
import clsx from 'clsx'
import {
  Tables,
  TableHeader,
  TableHeaderCol,
  TableBody,
  TableBodyRow,
  TableBodyCell,
  TableBodyAction,
  TableFooter
} from '~/components/Tables'
import { useEffect } from 'react'
import { AppDispatch, RootState, useAppDispatch } from '~/redux/store'
import { useSelector } from 'react-redux'
import { fetchAllCustomer, fetchCountCustomer } from '~/redux/slices/customerSlice'
import { setPageTotal } from '~/redux/slices/tableDrawerSlice'

function CustomerPage() {
  const dispatch: AppDispatch = useAppDispatch()
  const { entities, error, countData } = useSelector((state: RootState) => state.customer)
  const { pageSize, pageNumber } = useSelector((state: RootState) => state.tableDrawer)

  useEffect(() => {
    dispatch(fetchAllCustomer({ pageSize: pageSize, pageNumber: pageNumber }))
    dispatch(fetchCountCustomer({ pageSize: pageSize }))
  }, [dispatch])

  useEffect(() => {
    if (countData) {
      dispatch(setPageTotal(countData))
    }
  }, [countData, dispatch])

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <Row>
      <div className='pb-2 w-full'>
        <h2 className='text-2xl'>Customer List</h2>
      </div>

      <div className='basis-full p-5 bg-white border border-gray-300'>
        <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 pb-4'>
          <CustomerSearch />
          <div
            className={clsx(
              'w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center',
              'items-end space-x-0 flex-shrink-0'
            )}
          >
            <div className='w-full md:w-auto flex flex-col md:flex-row md:pl-2'>
              <CustomerCreate />
            </div>
            <div className='w-full md:w-auto flex flex-col md:flex-row md:pl-2'>
              <CustomerExport />
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
            {entities.map((customer) => (
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
        <TableFooter
          onChangePageSize={(pageSize, pageNumber) => {
            dispatch(fetchAllCustomer({ pageSize, pageNumber }))
            dispatch(fetchCountCustomer({ pageSize }))
          }}
        />
        <CustomerEdit />
        <CustomerDelete />
      </div>
    </Row>
  )
}

export default CustomerPage
