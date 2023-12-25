import { Button, Modal } from 'flowbite-react'
import { HiTrash } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { fetchAll, fetchDeleteCustomer } from '~/redux/slices/customerSlice'
import { toggleDeleteTableDrawer } from '~/redux/slices/tableDrawerSlice'
import { RootState, useAppDispatch } from '~/redux/store'
import { CustomerType } from './CustomerType'

export default function CustomerDelete() {
  const dispatch = useAppDispatch()
  const { showDeleteTableDrawer, dataTable } = useSelector((state: RootState) => state.tableDrawer)
  const customer = dataTable as CustomerType

  const handleClose = () => {
    dispatch(toggleDeleteTableDrawer(false))
  }

  const toggleToast = () => {
    toast.success('Xóa Thành Công !', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
      hideProgressBar: true
    })
  }

  const handleDelete = () => {
    dispatch(fetchDeleteCustomer(customer.id))
      .unwrap()
      .then((res) => {
        if (res.status === 204) {
          dispatch(fetchAll())
            .unwrap()
            .then(() => {
              dispatch(toggleDeleteTableDrawer(false))
              toggleToast()
            })
            .catch((error) => {
              console.log(error)
            })
        }
      })
  }

  return (
    <Modal show={showDeleteTableDrawer} size='md' onClose={handleClose} popup>
      <Modal.Header />
      <Modal.Body>
        <div className='text-center'>
          <HiTrash className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
          <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
            Are you sure you want to delete this data?
          </h3>
          <div className='flex justify-center gap-4'>
            <Button color='failure' onClick={handleDelete}>
              {"Yes, I'm sure"}
            </Button>
            <Button color='gray' onClick={handleClose}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
