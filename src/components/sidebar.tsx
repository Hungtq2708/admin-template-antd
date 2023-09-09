import { Menu } from 'antd'
import { TMenuList } from 'models/types'

import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { DashboardOutlined, LockOutlined } from '@ant-design/icons'

const menus: TMenuList = [
  {
    icon: <DashboardOutlined />,
    path: '/admin/dashboard',
    label: 'Dashboard',
    accessWith: true, // check by role to display
  },
  {
    icon: <LockOutlined />,
    path: '/admin/roles-permissions',
    label: 'Roles and Permissions',
    accessWith: true,
    children: [
      {
        icon: <DashboardOutlined />,
        path: '/admin/roles-permissions/roles',
        label: 'Role management',
        accessWith: true,
      },
    ],
  },
]

export const SideBar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [selectedKey, setSelectedKey] = useState<string>(location.pathname)

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
        .map(menu => {
          return menu.children
            ? {
                icon: menu.icon,
                key: menu.path,
                label: menu.label,
                children: menu.children.map(child => ({
                  key: child.path,
                  label: child.label,
                  icon: menu.icon,
                })),
              }
            : {
                icon: menu.icon,
                key: menu.path,
                label: menu.label,
              }
        })}
    />
  )
}
