import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

function Tables({ children }: Props) {
  return (
    <>
      <div className='overflow-x-auto'>
        <table className='w-full border border-gray-200 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          {children}
        </table>
      </div>
    </>
  )
}

export default Tables
