import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input, Label, Button, FormGroup } from '~/components/Forms'
import * as yup from 'yup'
import Row from '~/components/Row'
import { Table, TableSearch } from '~/components/Table'
import { BtnCreate } from './BtnCreate'

import { makeData, Student, studentColumns } from './fetchData'

function DashboardPage() {
  const [data, setData] = useState(makeData(1000))

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
      <div className='pb-2 w-full'>
        <h2 className='text-2xl'>Default form</h2>
      </div>

      <div className='basis-full p-5 border border-gray-300 hidden'>
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
          <Button name='Gui132131' type='submit' />
        </form>
      </div>

      <div className='basis-full p-5 bg-white border border-gray-300'>
        <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 pb-4'>
          <TableSearch />
          <div className='w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0'>
            <BtnCreate />
          </div>
        </div>

        <Table<Student> columns={studentColumns} data={data} />
      </div>
    </Row>
  )
}

export default DashboardPage
