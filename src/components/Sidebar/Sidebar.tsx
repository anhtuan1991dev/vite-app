import clsx from 'clsx'
import { ReactNode } from 'react'

interface Props {
  isOpen: boolean
  children?: ReactNode
}

function Sidebar({ isOpen, children }: Props) {
  return (
    <aside
      className={clsx(
        isOpen ? 'w-60 px-5 py-2.5' : 'w-70px py-5',
        'flex flex-col',
        'transition-width duration-300 ease-in-out',
        'border-r border-gray-300 relative hover:overflow-y-auto'
      )}
    >
      <ul className={`flex flex-col flex-nowrap`}>{children}</ul>
    </aside>
  )
}

export default Sidebar
