import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const TableBodyRow = ({ children }: Props) => {
  return <tr className='border-b dark:border-gray-700'>{children}</tr>
}

export default TableBodyRow
