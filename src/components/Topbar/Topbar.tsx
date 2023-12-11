import appRoutes from '~/routes/appRoutes'
import { Sidebar, SidebarItem } from '../Sidebar'

interface Props {
  isOpen: boolean
}

function Topbar({ isOpen }: Props) {
  return (
    <Sidebar isOpen={isOpen}>
      {appRoutes.map((route, index) =>
        route.sidebarProps ? <SidebarItem isOpen={isOpen} item={route} key={index} /> : null
      )}
    </Sidebar>
  )
}

export default Topbar
