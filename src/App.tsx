import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailsPage from './views/DetailsPage'
import FrontPage from './components/FrontPage/FrontPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;