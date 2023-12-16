import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '~/redux/store'
import clsx from 'clsx'

interface Props {
  children?: ReactNode
}

function MainPanel({ children }: Props) {
  const { showSidebar } = useSelector((state: RootState) => state.sidebar)
  const clsxName = clsx(
    showSidebar ? 'w-[calc(100%-240px)]' : 'w-[calc(100%-70px)]',
    'min-h-[calc(100vh-64px)] flex flex-grow flex-col'
  )
  return <main className={clsxName}>{children}</main>
}

export default MainPanel
