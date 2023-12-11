import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

function MainBody({ children }: Props) {
  return <div className='flex-1 flex flex-row overflow-y-hidden'>{children}</div>
}

export default MainBody
