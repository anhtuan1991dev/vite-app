import { SvgClose } from '~/components/Svg'
import { Label, Input, Button, FormGroup } from '~/components/Forms'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '~/redux/store'
import { toggleTableDrawer } from '~/redux/slices/tableDrawerSlice'

const CustomerEdit = () => {
  const dispatch = useDispatch()
  const { showTableDrawer } = useSelector((state: RootState) => state.tableDrawer)

  const toggleDrawer = () => {
    dispatch(toggleTableDrawer(!showTableDrawer))
  }

  return (
    <>
      <h5 className='inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400'>
        Customer Edit
      </h5>
      <button
        type='button'
        onClick={toggleDrawer}
        className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
      >
        <SvgClose />
        <span className='sr-only'>Close menu</span>
      </button>

      <form>
        <div className='space-y-4'>
          <FormGroup>
            <Label name='Name' />
            <Input />
          </FormGroup>
          <FormGroup>
            <Label name='Email' />
            <Input />
          </FormGroup>
          <FormGroup>
            <Label name='Phone' />
            <Input />
          </FormGroup>
          <FormGroup>
            <Label name='Address' />
            <Input />
          </FormGroup>
          <FormGroup>
            <Label name='Country' />
            <Input />
          </FormGroup>
          <div className='flex items-center'>
            <Button
              name='Add Customer'
              type='button'
              className='text-white w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800'
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default CustomerEdit
