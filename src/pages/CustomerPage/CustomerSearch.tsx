import { useRef, KeyboardEvent } from 'react'
import { useSelector } from 'react-redux'
import { fetchAllCustomer } from '~/redux/slices/customerSlice'
import { AppDispatch, RootState, useAppDispatch } from '~/redux/store'

const CustomerSearch = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const { pageSize, pageNumber } = useSelector((state: RootState) => state.tableDrawer)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.code === 'Enter') {
      dispatch(fetchAllCustomer({ pageSize: pageSize, pageNumber: pageNumber, valueFilter: inputRef.current?.value }))
    }
  }

  return (
    <div className='w-full md:w-1/2'>
      <div className='flex items-center'>
        <LabelSearch />
        <div className='relative w-full'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <SvgSearch />
          </div>
          <input
            type='search'
            onKeyDown={handleKeyDown}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
            placeholder='Search'
            ref={inputRef}
          />
        </div>
      </div>
    </div>
  )
}

export default CustomerSearch

const LabelSearch = () => (
  <label htmlFor='simple-search' className='sr-only'>
    Search
  </label>
)

const SvgSearch = () => (
  <svg
    aria-hidden='true'
    className='w-5 h-5 text-gray-500 dark:text-gray-400'
    fill='currentColor'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
      clipRule='evenodd'
    />
  </svg>
)
