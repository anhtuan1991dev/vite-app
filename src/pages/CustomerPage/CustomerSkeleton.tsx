import { TableHeader, TableHeaderCol, Tables } from '~/components/Tables'

export default function CustomerSkeleton() {
  return (
    <>
      <div className='animate-pulse pb-2 w-full'>
        <div className='h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
      </div>
      <div className='animate-pulse basis-full p-5 bg-white border border-gray-300'>
        <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 pb-4'>
          <div className='w-full md:w-1/2 h-8 bg-gray-200 rounded-full dark:bg-gray-700 mb-4'></div>
          <div className='w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0'>
            <div className='h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4'></div>
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
        </Tables>
      </div>
    </>
  )
}
