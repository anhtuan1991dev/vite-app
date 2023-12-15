import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

enum Direction {
  Next,
  Previous,
  FirstPage,
  LastPage
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  page?: Direction
}

const ArrowNext = () => (
  <svg className='w-[10px] h-[10px] text-gray-500 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 6 10'>
    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 1 1 5l4 4' />
  </svg>
)

const ArrowPrevious = () => (
  <svg className='w-[10px] h-[10px] text-gray-500 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 6 10'>
    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 9 4-4-4-4' />
  </svg>
)

const ArrowFirstPage = () => (
  <svg className='w-[10px] h-[10px] text-gray-500 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 12 10'>
  <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 1 1 5l4 4m6-8L7 5l4 4' />
</svg>
)

const ArrowLastPage = () => (
  <svg className='w-[10px] h-[10px] text-gray-500 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 12 10'>
  <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m7 9 4-4-4-4M1 9l4-4-4-4' />
</svg>
)

export const TableButtonArrow = ({ page, ...rest }: Props) => {
  const cbx = clsx(
    'flex items-center justify-center h-full p-[13px] ml-0 text-gray-500 bg-white',
    `${page === Direction.FirstPage ? 'rounded-l-lg' : ''}`,
    `${page === Direction.LastPage ? 'rounded-r-lg' : ''}`,
    'border border-gray-300 hover:bg-gray-100 hover:text-gray-700',
    'dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
  )

  return (
    <button className={cbx} {...rest}>
      {page === Direction.Next ? <ArrowNext /> : null}
      {page === Direction.Previous ? <ArrowPrevious /> : null}
      {page === Direction.FirstPage ? <ArrowFirstPage /> : null}
      {page === Direction.LastPage ? <ArrowLastPage /> : null}
    </button>
  )
}
