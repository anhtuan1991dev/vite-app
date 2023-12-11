import { useContext } from 'react'
import { SvgArrowContext } from '.'

function SvgArrow() {
  const { upDown, setUpDown } = useContext(SvgArrowContext)

  const UpDown = () => {
    setUpDown(!upDown)
  }

  return (
    <div
      onClick={UpDown}
      className={`ml-auto ${
        upDown ? 'duration-300 origin-center rotate-180' : 'duration-100 origin-center rotate-0'
      } cursor-pointer`}
    >
      <svg
        className='w-9px h-1.5 text-arrow'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 14 8'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1'
        />
      </svg>
    </div>
  )
}

export default SvgArrow
