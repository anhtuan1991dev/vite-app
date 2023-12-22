interface Props {
  name: string | number
}

const TableBodyCell = ({ name }: Props) => {
  return <td className='p-3'>{name}</td>
}

export default TableBodyCell
