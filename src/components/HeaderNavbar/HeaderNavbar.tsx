import AvatarDropdown from '../AvatarDropdown'
import SearchBar from '../SearchBar'
import { IconMenu2, IconMail, IconBell } from '@tabler/icons-react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '~/redux/store'
import { toggleSideBar } from '~/redux/slices/sidebarSlice'

function HeaderNavbar() {
  const dispatch = useDispatch()
  const { showSidebar } = useSelector((state: RootState) => state.sidebar)

  const handleChange = () => {
    dispatch(toggleSideBar(!showSidebar))
  }

  return (
    <div className='flex flex-grow justify-between items-center px-5'>
      <button onClick={handleChange}>
        <IconMenu2 size={24} />
      </button>
      <div className='w-full ml-8 mr-10 max-sm:hidden'>
        <SearchBar />
      </div>
      <ul className='flex flex-row'>
        <li className='flex items-center justify-center w-8 mx-1'>
          <button onClick={handleChange}>
            <IconMail strokeWidth={1} size={24} />
          </button>
        </li>
        <li className='flex items-center justify-center w-8 mx-1'>
          <button onClick={handleChange}>
            <IconBell strokeWidth={1} size={24} />
          </button>
        </li>
        <li className='flex items-center justify-center w-8 mx-1'>
          <AvatarDropdown />
        </li>
      </ul>
    </div>
  )
}

export default HeaderNavbar
