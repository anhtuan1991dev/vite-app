import clsx from 'clsx'
import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '~/redux/store'

interface Props {
  children?: ReactNode
}

function Sidebar({ children }: Props) {
  const { showSidebar } = useSelector((state: RootState) => state.sidebar)

  const clsxName = clsx(
    showSidebar ? 'w-60 px-5 py-2.5' : 'w-70px py-5',
    'flex flex-col',
    'transition-width duration-300 ease-in-out',
    'border-r border-gray-300 relative hover:overflow-y-auto'
  )
  return (
    <aside className={clsxName}>
      <ul className='flex flex-col flex-nowrap'>{children}</ul>
    </aside>
  )
}

export default Sidebar
