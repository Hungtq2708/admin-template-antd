import React, { Suspense } from 'react'

import { Layout } from 'antd'
import { Header } from './header'
import { SideBar } from './sidebar'
import { Outlet } from 'react-router-dom'
import { LoadingScreen } from './loading-screen'

const { Sider, Content } = Layout

type LayoutProps = unknown

export const LayoutPage: React.FC<LayoutProps> = () => {
  return (
    <Layout className="layout-page bg-white overflow-hidden h-screen">
      <Header />

      <Layout className="bg-white">
        <Sider
          className="layout-page-sider !bg-white border overflow-auto p-3"
          trigger={null}
          collapsible
          collapsedWidth={80}
          collapsed={false}
          breakpoint="md"
          width={252}
        >
          <SideBar />
        </Sider>

        <Content className="layout-page-content p-5 border overflow-x-hidden overflow-y-auto">
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}
