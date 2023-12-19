import FormDrawer from '~/components/FormDrawer'
import { Label, Input, Button, FormGroup } from '~/components/Forms'

const CustomerCreate = () => {
  return (
    <FormDrawer name='Create' title='New Customer'>
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
    </FormDrawer>
  )
}

export default CustomerCreate
