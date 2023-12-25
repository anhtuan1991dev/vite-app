import { RouteType } from './config'
import HomePage from '~/pages/HomePage'
import DashboardPage from '~/pages/DashboardPage'
import Customer from '~/pages/CustomerPage'
import WidgetsPage from '~/pages/WidgetsPage'

import { IconClipboardText, IconUserDollar } from '@tabler/icons-react'

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: 'home'
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    state: 'dashboard',
    sidebarProps: {
      displayText: 'Dashboard',
      icon: <IconClipboardText size={20} style={{ cursor: 'pointer' }} />
    }
  },
  {
    path: '/customer',
    element: <Customer />,
    state: 'customer',
    sidebarProps: {
      displayText: 'Customer',
      icon: <IconUserDollar size={20} style={{ cursor: 'pointer' }} />
    }
  },
  {
    path: '/widgets',
    element: <WidgetsPage />,
    state: 'widgets',
    sidebarProps: {
      displayText: 'Widgets',
      icon: <IconClipboardText size={20} />
    }
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    state: 'dashboard',
    sidebarProps: {
      displayText: 'UI Elements',
      icon: <IconClipboardText size={20} />
    },
    child: [
      {
        path: '/dashboard/default',
        element: <DashboardPage />,
        state: 'dashboard.default',
        sidebarProps: {
          displayText: 'Accordions'
        }
      },
      {
        path: '/dashboard/analytics',
        element: <DashboardPage />,
        state: 'dashboard.analytics',
        sidebarProps: {
          displayText: 'Buttons'
        }
      },
      {
        path: '/dashboard/saas',
        element: <DashboardPage />,
        state: 'dashboard.saas',
        sidebarProps: {
          displayText: 'Badges'
        }
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    state: 'dashboard',
    sidebarProps: {
      displayText: 'Advanced UI',
      icon: <IconClipboardText size={20} />
    }
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    state: 'dashboard',
    sidebarProps: {
      displayText: 'Form elements',
      icon: <IconClipboardText size={20} />
    }
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    state: 'dashboard',
    sidebarProps: {
      displayText: 'Charts',
      icon: <IconClipboardText size={20} />
    }
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    state: 'dashboard',
    sidebarProps: {
      displayText: 'Tables',
      icon: <IconClipboardText size={20} />
    }
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    state: 'dashboard',
    sidebarProps: {
      displayText: 'Icons',
      icon: <IconClipboardText size={20} />
    }
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    state: 'dashboard',
    sidebarProps: {
      displayText: 'Maps',
      icon: <IconClipboardText size={20} />
    }
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    state: 'dashboard',
    sidebarProps: {
      displayText: 'General Pages',
      icon: <IconClipboardText size={20} />
    }
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    state: 'dashboard',
    sidebarProps: {
      displayText: 'Apps',
      icon: <IconClipboardText size={20} />
    }
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    state: 'dashboard',
    sidebarProps: {
      displayText: 'Documentation',
      icon: <IconClipboardText size={20} />
    }
  }
]

export default appRoutes
