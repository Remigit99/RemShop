
import './App.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ForgetPassword from './Pages/ForgetPassword'


function App() {


  return (

    <div className="app ">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
