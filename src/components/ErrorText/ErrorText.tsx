import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function ErrorText(props: Props) {
  return <p className='mt-2 text-sm text-red-600 dark:text-red-500'>{props.children}</p>
}

export default ErrorText
