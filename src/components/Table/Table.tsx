import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel
} from '@tanstack/react-table'

import clsx from 'clsx'
import { useState, useMemo } from 'react'
import { TableCheckbox } from './TableCheckbox'
import { TableButtonArrow } from './TableButtonArrow'

interface Props<T extends object> {
  data: T[]
  columns: ColumnDef<T>[]
}

const Table = <T extends object>({ columns, data }: Props<T>) => {
  const memoizedColumns = useMemo(() => {
    const updatedColumns = [...columns]
    updatedColumns.unshift({
      id: 'select',
      header: ({ table }) => (
        <TableCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler()
          }}
        />
      ),
      cell: ({ row }) => (
        <TableCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler()
          }}
        />
      )
    })
    return updatedColumns
  }, [columns])

  const [rowSelection, setRowSelection] = useState({})
  const table = useReactTable({
    data,
    columns: memoizedColumns,
    state: {
      rowSelection
    },
    enableRowSelection: true, //enable row selection for all rows
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return (
    <>
      <div className='overflow-x-auto'>
        <table className='w-full border border-gray-200 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 border-b border-gray-200 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th scope='col' className='p-3' key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
                <th scope='col' className='p-3'></th>
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr className='border-b dark:border-gray-700' key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td className='p-3' key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}

                <td className='flex justify-center p-3'>
                  <a
                    className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                    // data-drawer-target='drawer-create-product-default'
                    // data-drawer-show='drawer-create-product-default'
                    // aria-controls='drawer-create-product-default'
                  >
                    Edit
                  </a>
                  <a className='font-medium text-red-600 dark:text-red-500 hover:underline ms-3'>Remove</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value))
              }}
            >
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>

            <span className='flex items-center gap-1'>
              <label className='text-sm fl font-medium text-gray-700'>Page</label>
              <strong className='text-sm fl font-medium text-gray-700'>
                {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
              </strong>
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='flex items-center gap-2'>
              <label className='block text-sm fl font-medium text-gray-700 dark:text-white'>Go to page</label>
              <input
                type='number'
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  table.setPageIndex(page)
                }}
                className='bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
            </span>
            <ul className='inline-flex items-stretch -space-x-px'>
              <li>
                <TableButtonArrow
                  page={2}
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                />
              </li>
              <li>
                <TableButtonArrow
                  page={0}
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                />
              </li>
              <li>
                <TableButtonArrow page={1} onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} />
              </li>
              <li>
                <TableButtonArrow
                  page={3}
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Table
