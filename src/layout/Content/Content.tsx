import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function Content(props: Props) {
  return (
    <div className='p-5 w-full flex flex-grow bg-gray-50 overflow-y-auto'>
      <>{props.children}</>
    </div>
  )
}

export default Content
