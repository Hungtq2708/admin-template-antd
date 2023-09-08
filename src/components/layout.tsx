import React, { Suspense } from 'react'

import { Layout } from 'antd'
import { Header } from './header'
import { SideBar } from './sidebar'
import { Outlet } from 'react-router-dom'

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
        >
          <SideBar />
        </Sider>

        <Content className="layout-page-content p-3 border overflow-x-hidden overflow-y-auto">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}
