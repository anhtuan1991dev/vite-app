import clsx from 'clsx'
import { HTMLProps, useEffect, useRef } from 'react'

export const TableCheckbox = ({
  indeterminate,
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
  const ref = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate])

  return (
    <div className='flex items-center'>
      <input
        type='checkbox'
        ref={ref}
        {...rest}
        className={clsx(
          'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer',
          'focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800',
          'dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        )}
      />
    </div>
  )
}
