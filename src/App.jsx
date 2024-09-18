
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'

function App() {

  return (
    <>
    <Navbar />
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/*' element={<h2>page not found</h2>}/>

    </Routes>
    </>
  )
}

export default App
