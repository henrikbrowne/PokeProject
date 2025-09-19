import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WelcomePage from './views/WelcomePage'
import DetailsPage from './views/DetailsPage'
import OverviewPage from './views/OverviewPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/overview" element={<OverviewPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;