import { ReactNode, useState } from 'react'
import { SvgClose } from '~/components/Svg'
import clsx from 'clsx'
import Drawer from 'react-modern-drawer'

type Props = {
  children: ReactNode
  name: string
  title: string
}

const FormDrawer = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const btnClsx = clsx(
    'flex items-center justify-center text-white',
    'bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg',
    'text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
  )

  const drawerClsx = clsx(
    'fixed top-0 left-0 z-40 w-full h-screen p-4',
    'overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800'
  )

  return (
    <>
      <button className={btnClsx} type='button' onClick={toggleDrawer}>
        {props.name}
      </button>

      <Drawer open={isOpen} direction='left' size={500} className={drawerClsx}>
        <h5 className='inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400'>
          {props.title}
        </h5>
        <button
          type='button'
          onClick={toggleDrawer}
          className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
        >
          <SvgClose />
          <span className='sr-only'>Close menu</span>
        </button>
        {props.children}
      </Drawer>
    </>
  )
}

export default FormDrawer
