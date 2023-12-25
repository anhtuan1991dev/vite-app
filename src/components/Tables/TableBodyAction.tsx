import clsx from 'clsx'
import { Dropdown } from 'flowbite-react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '~/redux/store'
import { toggleEditTableDrawer, toggleDeleteTableDrawer } from '~/redux/slices/tableDrawerSlice'
import { dataCustomer } from '~/redux/slices/customerSlice'
import { CustomerType } from '~/pages/CustomerPage/CustomerType'
import { IconEdit, IconTrash, IconEye } from '@tabler/icons-react'
interface Props {
  data: CustomerType
}

const TableBodyAction = ({ data }: Props) => {
  const dispatch = useDispatch()
  const { showEditTableDrawer } = useSelector((state: RootState) => state.tableDrawer)

  const toggleDrawer = () => {
    dispatch(dataCustomer(data))
    dispatch(toggleEditTableDrawer(!showEditTableDrawer))
  }

  const toggleDelete = () => {
    dispatch(dataCustomer(data))
    dispatch(toggleDeleteTableDrawer(true))
  }

  const buttonClsx = clsx(
    'inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800',
    'rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100'
  )

  return (
    <td className='flex items-center justify-end p-3'>
      <Dropdown
        label=''
        dismissOnClick={false}
        renderTrigger={() => (
          <button className={buttonClsx}>
            <SvgAction />
          </button>
        )}
      >
        <Dropdown.Item icon={IconEye}>Show</Dropdown.Item>
        <Dropdown.Item icon={IconEdit} onClick={toggleDrawer}>
          Edit
        </Dropdown.Item>
        <Dropdown.Item icon={IconTrash} onClick={toggleDelete}>
          Delete
        </Dropdown.Item>
      </Dropdown>
    </td>
  )
}

const SvgAction = () => (
  <svg
    className='w-5 h-5'
    aria-hidden='true'
    fill='currentColor'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
  </svg>
)

export default TableBodyAction
