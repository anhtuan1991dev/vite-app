import { createContext, useState } from 'react'
import { Link } from "react-router-dom";
import { RouteType } from '~/routes/config'
import SvgArrow from './SvgArrow'

import SidebarItemCollapse from './SidebarItemCollapse'

type Props = {
  item: RouteType
  isOpen: boolean
}

type SvgArrowType = {
  upDown: true | false
  setUpDown: (upDown: boolean) => void
}

export const SvgArrowContext = createContext<SvgArrowType>({
  upDown: true,
  setUpDown: () => {}
})

function SidebarItemDev({ item, isOpen }: Props) {
  const [upDown, setUpDown] = useState(false)

  const liCss = 'before:absolute before:right-0 before:top-0 before:left-[30px] before:border-t before:border-dashed before:border-gray-300'

  const aCssOpen = isOpen ? 'items-center' : 'justify-center items-center'
  const aCss = `flex flex-grow flex-row flex-nowrap ${aCssOpen} h-10 duration-300`

  const spanCssOpen = isOpen ? 'ml-2.5 hover:text-blue-600' : 'hidden'
  const spanCss = `${spanCssOpen} font-medium text-sm text-gray-sidebar cursor-pointer`

  return item.sidebarProps && item.path ? (
    <li className={`relative ${isOpen && item.sidebarProps.displayText !== 'Dashboard' ? liCss : ''}`}>
      <SvgArrowContext.Provider value={{ upDown, setUpDown }}>
        <Link to={item.path} className={aCss}>
          {item.sidebarProps.icon}
          <span className={spanCss}>{item.sidebarProps.displayText}</span>
          {item.child && isOpen ? <SvgArrow /> : null}
        </Link>
        {isOpen ? item.child ? <SidebarItemCollapse upDown={upDown} item={item.child} /> : null : <></>}
      </SvgArrowContext.Provider>
    </li>
  ) : null
}

export default SidebarItemDev
