import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import Productos from './Components/Productos/Productos'
import Contacto from './Components/Contacto/Contacto'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav />}>
            <Route index element={<Home/>}/>
            <Route path='productos' element={<Productos />}/>
            <Route path='contacto' element={<Contacto />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
