import appRoutes from '~/routes/appRoutes'
import { Sidebar, SidebarItem } from '../Sidebar'


function Topbar() {
  return (
    <Sidebar>
      {appRoutes.map((route, index) =>
        route.sidebarProps ? <SidebarItem item={route} key={index} /> : null
      )}
    </Sidebar>
  )
}

export default Topbar
