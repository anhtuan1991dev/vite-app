interface Props {
  name?: string
}

function TableHeaderCol({ name }: Props) {
  return (
    <th scope='col' className='p-3'>
      {name}
    </th>
  )
}

export default TableHeaderCol
