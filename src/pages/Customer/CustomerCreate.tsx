import { SvgClose } from '~/components/Svg'
import { Label, Input, Button, FormGroup } from '~/components/Forms'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '~/redux/store'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Drawer from 'react-modern-drawer'
import clsx from 'clsx'
import { toggleAddTableDrawer } from '~/redux/slices/tableDrawerSlice'
import { useForm } from 'react-hook-form'
import ErrorText from '~/components/ErrorText'
import { fetchCreateCustomer } from '~/redux/slices/customerSlice'
import { CustomerType } from './CustomerType'

const CustomerCreate = () => {
  const dispatch = useAppDispatch()
  const { showAddTableDrawer } = useSelector((state: RootState) => state.tableDrawer)
  const loading = useSelector((state: RootState) => state.customer.loading)
  const error = useSelector((state: RootState) => state.customer.error)

  const toggleDrawer = () => {
    dispatch(toggleAddTableDrawer(!showAddTableDrawer))
  }

  const schema = yup
    .object()
    .shape({
      name: yup.string().required('Name is required.'),
      email: yup.string(),
      phone: yup.string(),
      address: yup.string(),
      country: yup.string()
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data: any) => {
    console.log(data)
    // console.log(loading);
    // dispatch(fetchCreateCustomer(data))
    // console.log(loading);
  }

  return (
    <>
      <button
        className={clsx(
          'flex items-center justify-center text-white',
          'bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg',
          'text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
        )}
        type='button'
        onClick={toggleDrawer}
      >
        Create
      </button>

      <Drawer
        open={showAddTableDrawer}
        onClose={toggleDrawer}
        direction='left'
        className={clsx(
          'fixed top-0 left-0 z-40 w-full h-screen p-4',
          'overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800'
        )}
      >
        <h5 className='inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400'>
          New Customer
        </h5>
        <button
          type='button'
          onClick={toggleDrawer}
          className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
        >
          <SvgClose />
          <span className='sr-only'>Close menu</span>
        </button>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-4'>
            <FormGroup>
              <Label name='Name' />
              <Input {...register('name')} />
              {errors?.name?.message && <ErrorText>{errors.name.message}</ErrorText>}
            </FormGroup>
            <FormGroup>
              <Label name='Email' />
              <Input {...register('email')} />
            </FormGroup>
            <FormGroup>
              <Label name='Phone' />
              <Input {...register('phone')} />
            </FormGroup>
            <FormGroup>
              <Label name='Address' />
              <Input {...register('address')} />
            </FormGroup>
            <FormGroup>
              <Label name='Country' />
              <Input {...register('country')} />
            </FormGroup>
            <div className='flex items-center'>
              <Button
                name='Add'
                type='submit'
                className='text-white w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800'
              />
            </div>
          </div>
        </form>
      </Drawer>
    </>
  )
}

export default CustomerCreate
