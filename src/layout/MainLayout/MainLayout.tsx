import { useState, createContext } from 'react'
import { Outlet } from 'react-router-dom'

import PageLayout from '../PageLayout'
import Header from '../Header'
import MainBody from '../MainBody'
import MainPanel from '../MainPanel'
import Footer from '../Footer'

import HeaderLogo from '~/components/HeaderLogo'
import HeaderNavbar from '~/components/HeaderNavbar'
import Topbar from '~/components/Topbar'

import { useMediaQuery } from 'react-responsive'

type OpenContextType = {
  isOpen: true | false
  setIsOpen: (isOpen: boolean) => void
}

export const IsOpenContext = createContext<OpenContextType>({
  isOpen: true,
  setIsOpen: () => {}
})

function MainLayout() {
  const isSm = useMediaQuery({
    query: '(max-width: 640px)'
  })

  const [isOpen, setIsOpen] = useState(!isSm)
  return (
    <PageLayout>
      <IsOpenContext.Provider value={{ isOpen, setIsOpen }}>
        <Header>
          <HeaderLogo isOpen={isOpen} />
          <HeaderNavbar />
        </Header>
        <MainBody>
          <Topbar isOpen={isOpen} />
          <MainPanel isOpen={isOpen}>
            <Outlet />
            <Footer />
          </MainPanel>
        </MainBody>
      </IsOpenContext.Provider>
    </PageLayout>
  )
}

export default MainLayout
