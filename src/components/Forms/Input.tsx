import clsx from 'clsx'
import { InputHTMLAttributes, forwardRef } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  value?: string
  className?: string
  placeholder?: string
  required?: boolean
  readOnly?: boolean
  radius?: number
  onChange?: () => void
}

const Input = forwardRef<HTMLInputElement>((props: Props, ref) => {
  const classRadius = clsx('rounded-', props.radius ? '[0px]' : `[${props.radius}px]`)
  const classInput = clsx(
    'bg-gray-50 border border-gray-300 text-gray-700 text-[14px] p-2 leading-5',
    classRadius,
    'focus:ring-blue-500 focus:border-blue-500 block w-full',
    'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
  )
  return (
    <input
      name={props.name}
      className={props.className ? props.className : classInput}
      placeholder={props.placeholder}
      required={props.required}
      value={props.value}
      ref={ref}
      onChange={props.onChange}
      readOnly={props.readOnly}
    />
  )
})

export default Input
