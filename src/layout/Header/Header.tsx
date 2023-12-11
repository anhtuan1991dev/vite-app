import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

function Header({ children }: Props) {
  return (
    <header className='sticky top-0 border-b border-gray-300'>
      <nav className='flex flex-row items-center'>{children}</nav>
    </header>
  )
}

export default Header
