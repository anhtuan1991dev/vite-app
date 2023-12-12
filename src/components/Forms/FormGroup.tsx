import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const FormGroup = (props: Props) => {
  return <div className='mb-5'>{props.children}</div>
}

export default FormGroup
