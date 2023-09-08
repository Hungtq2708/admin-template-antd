import { Button, Result } from 'antd'
import { useAuth } from 'hooks/use-auth'
import { useNavigate } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()
  const { isAuth } = useAuth()

  const backToHome = () => {
    if (isAuth) {
      navigate('/admin')
    } else {
      navigate('/')
    }
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle={'Sorry, the page you visited does not exist.'}
      extra={
        <Button type="primary" onClick={backToHome}>
          Back Home
        </Button>
      }
    ></Result>
  )
}

export default NotFoundPage
