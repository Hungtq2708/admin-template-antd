import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { App } from './app'
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'libs/query-client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
)

reportWebVitals()
