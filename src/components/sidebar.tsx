import { Menu } from 'antd'
import { TMenuList } from 'models/types'

import { ReactComponent as OrderSvg } from 'assets/images/orders.svg'
import { ReactComponent as UserSvg } from 'assets/images/users.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const SideBar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [selectedKey, setSelectedKey] = useState<string>(location.pathname)

  const menus: TMenuList = [
    {
      icon: <OrderSvg />,
      path: '/admin/orders',
      label: 'Order',
      accessWith: true,
    },
    {
      icon: <UserSvg />,
      path: '/admin/users',
      label: 'Users',
      accessWith: true,
    },
  ]

  useEffect(() => {
    setSelectedKey(location.pathname)
  }, [location.pathname])

  const onMenuClick = (path: string) => {
    setSelectedKey(path)
    navigate(path)
  }

  return (
    <Menu
      mode="inline"
      selectedKeys={[selectedKey]}
      onSelect={event => onMenuClick(event.key)}
      className="layout-page-sider-menu"
      items={menus
        .filter(item => item.accessWith)
        .map(menu => ({
          key: menu.path,
          label: menu.label,
          icon: menu.icon,
        }))}
    />
  )
}
