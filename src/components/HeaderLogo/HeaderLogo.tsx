import Logo from '~/assets/logo.svg'
import LogoMini from '~/assets/logo-mini.svg'
import clsx from 'clsx'

import { useMediaQuery } from 'react-responsive'
import { useSelector } from 'react-redux'
import { RootState } from '~/redux/store'

function HeaderLogo() {
  const { showSidebar } = useSelector((state: RootState) => state.sidebar)
  const isSm = useMediaQuery({ query: '(max-width: 640px)' })

  const clsxName = clsx(
    showSidebar ? 'w-60' : 'w-70px',
    'px-5 py-2.5 h-16 flex items-center duration-300 border-r border-gray-300 max-sm:w-70px'
  )
  return (
    <div className={clsxName}>
      <a>
        {isSm ? (
          <img src={LogoMini} className='w-100px h-22px' alt='logo' />
        ) : (
          <img src={showSidebar ? Logo : LogoMini} className='w-100px h-22px' alt='logo' />
        )}
      </a>
    </div>
  )
}

export default HeaderLogo
