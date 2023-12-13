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
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ name, className, placeholder, required, value, readOnly, radius, ...props }, ref) => {
    const classRadius = radius ? `rounded-[${radius}px]` : ''
    const classInput = clsx(
      'bg-gray-50 border border-gray-300 text-gray-700 text-[14px] p-2 leading-5',
      classRadius,
      'focus:ring-blue-500 focus:border-blue-500 block w-full',
      'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
    )

    const finalClassName = className || classInput

    return (
      <input
        name={name}
        className={finalClassName}
        placeholder={placeholder}
        required={required}
        value={value}
        ref={ref}
        readOnly={readOnly}
        {...props}
      />
    )
  }
)

Input.defaultProps = {
  radius: 0
}

export default Input
