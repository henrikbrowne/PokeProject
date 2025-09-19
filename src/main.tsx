import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import { Provider as ChakraProvider } from "./components/ui/provider"

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <Provider store={store}>
      <ChakraProvider>
          <App />
      </ChakraProvider>
    </Provider>
  </StrictMode>,
)
