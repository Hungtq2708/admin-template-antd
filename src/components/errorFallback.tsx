import { Alert, Button } from 'antd'
import type { FallbackProps } from 'react-error-boundary'

export const ErrorFallback = (props: FallbackProps) => {
  return (
    <Alert
      message="Error"
      description={props.error?.message || ''}
      type="error"
      showIcon
      action={
        <Button size="large" type="primary" onClick={props.resetErrorBoundary}>
          Try again
        </Button>
      }
    />
  )
}
