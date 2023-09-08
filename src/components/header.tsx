// import { AUTH_TSession_KEY } from 'constants/constants'
// import { storage } from 'libs/web-storage'
// import { useNavigate } from 'react-router-dom'
import { DownOutlined, LockOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import defaultAvatar from 'assets/images/default-avatar.svg'
import type { MenuProps } from 'antd'
import { Avatar, Dropdown, Space } from 'antd'

export const Header = () => {
  // const navigate = useNavigate()

  const onClick: MenuProps['onClick'] = ({ key }) => {
    console.log('key', key)
  }

  // const onLogout = () => {
  //   storage.clear(AUTH_TSession_KEY)
  //   navigate('/login')
  // }

  const items: MenuProps['items'] = [
    {
      label: 'My profile',
      key: 'my-profile',
      icon: <UserOutlined />,
    },
    {
      label: 'Change password',
      key: 'change-password',
      icon: <LockOutlined />,
    },
    {
      label: 'Logout',
      key: 'logout',
      icon: <LogoutOutlined />,
      danger: true,
    },
  ]

  return (
    <div className="px-4 py-3.5 flex justify-between">
      <h1 className="text-3xl mb-0">LOGO</h1>

      <div className="flex space-x-4 items-end pr-3">
        <Dropdown menu={{ items, onClick }} trigger={['click']}>
          <a onClick={e => e.preventDefault()}>
            <Space>
              <Space size={10}>
                <Avatar src={defaultAvatar} icon={<UserOutlined />} size={40} />
                <Space direction="vertical" size={0}>
                  <span className="text-base text-neutral-8 font-semibold">Username</span>
                  <span className="text-sm text-neutral-6">youremail@vmogroup.com</span>
                </Space>
              </Space>

              <DownOutlined size={24} />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  )
}
