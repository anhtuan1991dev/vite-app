import clsx from 'clsx'
import { RouteType } from '~/routes/config'

type Props = {
  item: RouteType[]
  upDown: boolean
}

function SidebarItemCollapse({ item, upDown }: Props) {
  const upDownCss = clsx('relative overflow-hidden transition-all duration-300', upDown ? 'max-h-[600px]' : 'max-h-0')

  const liCss = clsx(
    'p-0 flex flex-row items-center leading-8',
    'before:absolute before:h-10 before:w-0.5 before:left-2 before:bg-gray-200'
  )

  return (
    <div className={upDownCss}>
      <ul className='flex flex-col my-0 pt-1 pb-2 pl-1.9rem'>
        {item.map((route, index) =>
          route.sidebarProps ? (
            <li key={index} className={liCss}>
              <a className='text-13px'>{route.sidebarProps.displayText}</a>
            </li>
          ) : null
        )}
      </ul>
    </div>
  )
}

export default SidebarItemCollapse
