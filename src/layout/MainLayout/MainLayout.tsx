import { Outlet } from 'react-router-dom'

import PageLayout from '../PageLayout'
import Header from '../Header'
import MainBody from '../MainBody'
import MainPanel from '../MainPanel'
import Footer from '../Footer'

import HeaderLogo from '~/components/HeaderLogo'
import HeaderNavbar from '~/components/HeaderNavbar'
import Topbar from '~/components/Topbar'

function MainLayout() {
  return (
    <PageLayout>
      <Header>
        <HeaderLogo />
        <HeaderNavbar />
      </Header>
      <MainBody>
        <Topbar />
        <MainPanel>
          <Outlet />
          <Footer />
        </MainPanel>
      </MainBody>
    </PageLayout>
  )
}

export default MainLayout
