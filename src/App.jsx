import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Login from './routes/Login'
import Purchase from './routes/Purchase'
import ProductDetails from './routes/ProductDetails'
import ProtectedRoutes from './components/shared/ProtectedRoutes'
import Layout from './components/shared/Layout'
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState(false)
console.log(theme)
  return (
    <div className={`App ${theme ? 'dark' : ''}`}>
      <Routes>
        <Route element={<Layout theme={theme} setTheme={setTheme}  />}>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route element={<Layout/>}>
          <Route path='/purchase' element={<Purchase />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
