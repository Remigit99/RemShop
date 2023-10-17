
import './App.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'


function App() {


  return (

    <div className="app ">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
