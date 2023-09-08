import { Alert } from 'antd'
import type { FallbackProps } from 'react-error-boundary'

export const ErrorFallback = (props: FallbackProps) => {
  // return (
  //   <div role="alert">
  //     {props.error && (
  //       <>
  //         <pre>{props.error.message}</pre>
  //       </>
  //     )}
  //     <div>
  //       <button onClick={props.resetErrorBoundary}>Try again</button>
  //     </div>
  //   </div>
  // )

  return <Alert message="Error" description="This is an error message about copywriting." type="error" showIcon />
}
