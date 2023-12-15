import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function Row(props: Props) {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-wrap pb-5 flex-shrink'>{props.children}</div>
    </div>
  )
}

export default Row
