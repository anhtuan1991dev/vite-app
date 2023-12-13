import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Row from '~/components/Row'
import { Input, Label, Button, FormGroup } from '~/components/Forms'

function DashboardPage() {
  const schema = yup
    .object()
    .shape({
      firstName: yup.string().required('Vui lòng nhập firstName'),
      lastName: yup.string().required('Vui lòng nhập lastName')
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Row>
      <div className='basis-full p-5 border border-gray-300'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label name='First name' />
            <Input {...register('firstName')} />
            {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
          </FormGroup>

          <FormGroup>
            <Label name='Last name' />
            <Input {...register('lastName')} />
            {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
          </FormGroup>
          <Button name='Gui' type='submit' />
        </form>
      </div>
    </Row>
  )
}

export default DashboardPage
