import { useForm } from 'react-hook-form'
import Row from '~/components/Row'
import { Input, Label, Button, FormGroup } from '~/components/Forms'

function DashboardPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  return (
    <Row>
      <div className='basis-full p-5 border border-gray-300'>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <FormGroup>
            <Label name='First name' />
            <Input {...register('firstName', { required: true })} />
            {errors.firstName && <p className='text-red-500'>First name is required.</p>}
          </FormGroup>

          <FormGroup>
            <Label name='Last name' />
            <Input {...register('lastName', { required: true })} />
            {errors.lastName && <p className='text-red-500'>Last name is required.</p>}
          </FormGroup>

          <Button name='Gui' type='submit' />
        </form>
      </div>
    </Row>
  )
}

export default DashboardPage
