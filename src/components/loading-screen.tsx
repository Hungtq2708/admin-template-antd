import { Spin } from 'antd'

export const LoadingScreen = () => {
  return (
    <div className="fixed h-screen w-screen flex items-center justify-center">
      <Spin size="large" />
    </div>
  )
}
