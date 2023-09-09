import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { RenderRouter } from './routes'
import { ErrorFallback } from './components/errorFallback'
import { HistoryRouter, history } from 'routes/history'
import { LoadingScreen } from 'components/loading-screen'

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HistoryRouter history={history}>
        <Suspense fallback={<LoadingScreen />}>
          <RenderRouter />
        </Suspense>
      </HistoryRouter>
    </ErrorBoundary>
  )
}
