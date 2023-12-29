import clsx from 'clsx'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { setPageSize, setPageNumber } from '~/redux/slices/tableDrawerSlice'
import { AppDispatch, RootState, useAppDispatch } from '~/redux/store'
import { TableButtonArrow } from './TableButtonArrow'
import { fetchAllCustomer } from '~/redux/slices/customerSlice'

interface TableFooterProps {
  onChangePageSize: (pageSize: number, pageNumber: number) => void
}

const TableFooter: FC<TableFooterProps> = ({ onChangePageSize }) => {
  const dispatch: AppDispatch = useAppDispatch()
  const { pageSize, pageNumber, pageTotal } = useSelector((state: RootState) => state.tableDrawer)

  const handlePageSize = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const pageSizeValue: string = e.target.value
    const parsedPageSize: number = Number(pageSizeValue)
    dispatch(setPageSize(parsedPageSize))
    dispatch(setPageNumber(1))
    onChangePageSize(parsedPageSize, 1)
  }

  const handlePageFirst = () => {
    if (pageNumber !== 1) {
      const page = 1
      dispatch(setPageNumber(page))
      dispatch(fetchAllCustomer({ pageSize: pageSize, pageNumber: page }))
    }
  }

  const handlePagePrevious = () => {
    if (pageNumber > 1) {
      const page = pageNumber - 1
      dispatch(setPageNumber(page))
      dispatch(fetchAllCustomer({ pageSize: pageSize, pageNumber: page }))
    }
  }

  const handlePageNext = () => {
    if (pageNumber < pageTotal) {
      const page = pageNumber + 1
      dispatch(setPageNumber(page))
      dispatch(fetchAllCustomer({ pageSize: pageSize, pageNumber: page }))
    }
  }

  const handlePageLast = () => {
    if (pageNumber !== pageTotal) {
      const page = pageTotal
      dispatch(setPageNumber(page))
      dispatch(fetchAllCustomer({ pageSize: pageSize, pageNumber: page }))
    }
  }

  const handleGotoPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = e.target.value ? Number(e.target.value) : 1
    if (page >= 1 && page <= pageTotal) {
      dispatch(setPageNumber(page))
      dispatch(fetchAllCustomer({ pageSize: pageSize, pageNumber: page }))
    }
  }

  return (
    <nav
      className={clsx(
        'flex flex-col md:flex-row justify-between items-start',
        'md:items-center space-y-3 md:space-y-0 pt-4'
      )}
      aria-label='Table navigation'
    >
      <div className='flex items-center gap-2'>
        <select
          className={clsx(
            'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg',
            'focus:ring-blue-500 focus:border-blue-500 block',
            'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          )}
          value={pageSize}
          onChange={handlePageSize}
        >
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>

        <span className='flex items-center gap-1'>
          <label className='text-sm fl font-medium text-gray-700'>Page</label>
          <strong className='text-sm fl font-medium text-gray-700'>
            {pageNumber} of {pageTotal}
          </strong>
        </span>
      </div>
      <div className='flex items-center gap-2'>
        <span className='flex items-center gap-2'>
          <label className='block text-sm fl font-medium text-gray-700 dark:text-white'>Go to page</label>
          <input
            type='number'
            defaultValue={1}
            min={1} max={pageTotal}
            onChange={handleGotoPage}
            className='bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </span>
        <ul className='inline-flex items-stretch -space-x-px'>
          <li>
            <TableButtonArrow page={2} onClick={handlePageFirst} />
          </li>
          <li>
            <TableButtonArrow page={0} onClick={handlePagePrevious} />
          </li>
          <li>
            <TableButtonArrow page={1} onClick={handlePageNext} />
          </li>
          <li>
            <TableButtonArrow page={3} onClick={handlePageLast} />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default TableFooter
