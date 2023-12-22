import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

function TableHeader({ children }: Props) {
  return (
    <thead className='text-xs text-gray-700 border-b border-gray-200 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
      <tr>{children}</tr>
    </thead>
  )
}

export default TableHeader
