import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WelcomePage from './views/WelcomePage'
import DetailsPage from './views/DetailsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;