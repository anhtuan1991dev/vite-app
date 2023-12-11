import Logo from '~/assets/logo.svg'
import LogoMini from '~/assets/logo-mini.svg'

import { useMediaQuery } from 'react-responsive'

interface Props {
  isOpen: boolean
}

function HeaderLogo({ isOpen }: Props) {
  const isSm = useMediaQuery({
    query: '(max-width: 640px)'
  })

  return (
    <div
      className={`${
        isOpen ? 'w-60' : 'w-70px'
      } px-5 py-2.5 h-16 flex items-center duration-300 border-r border-gray-300 max-sm:w-70px`}
    >
      <a>
        {isSm ? (
          <img src={LogoMini} className='w-100px h-22px' alt='logo' />
        ) : (
          <img src={isOpen ? Logo : LogoMini} className='w-100px h-22px' alt='logo' />
        )}
      </a>
    </div>
  )
}

export default HeaderLogo
