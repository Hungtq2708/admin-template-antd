import { useEffect } from 'react'
import { Button, Card, Form, Input } from 'antd'
import Link from 'antd/es/typography/Link'
import { TLoginSchema, TSession } from '../services/auth.type'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'hooks/use-auth'
import { storage } from 'libs/web-storage'
import { AUTH_SESSION_KEY } from 'constants/constants'

export const LoginPage = () => {
  const navigate = useNavigate()
  const { isAuth } = useAuth()

  useEffect(() => {
    if (isAuth) {
      navigate('/admin')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth])

  const onSubmit = async (data: TLoginSchema) => {
    console.log('data', data)
    // mock data
    const session: TSession = {
      accessToken: 'accessToken',
      refreshToken: 'refreshToken',
    }
    storage.save(AUTH_SESSION_KEY, session)
    navigate('/admin')
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card title={<div className="w-full text-center text-2xl">Login</div>} className="w-1/3 mx-auto shadow-2xl">
        <Form className="space-y-3" onFinish={onSubmit} autoComplete="off">
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'This field is required!',
              },
              {
                type: 'email',
                message: 'This email is invalid!',
              },
            ]}
            normalize={value => value.trim()}
          >
            <Input size="large" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'This field is required!' }]}
            normalize={value => value.trim()}
          >
            <Input.Password size="large" placeholder="Enter your password" />
          </Form.Item>
          <Form.Item className={'font-medium'}>
            <Link className={'float-right mb-4'} href={'forgot-password'}>
              Forgot Password?
            </Link>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" size={'large'}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
