import { ReactNode } from 'react'

interface Props {
  children?: ReactNode,
  isOpen: boolean
}

function MainPanel({ children, isOpen }: Props) {
  return (
    <main className={`${isOpen ? 'w-[calc(100%-240px)]' : 'w-[calc(100%-70px)]'} min-h-[calc(100vh-64px)] flex flex-grow flex-col`}>
      {children}
    </main>
  )
}

export default MainPanel
