import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

function PageLayout({ children }: Props) {
  return <div className='min-h-screen flex flex-col h-screen'>{children}</div>
}

export default PageLayout
