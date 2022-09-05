import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Login from './routes/Login'
import Purchase from './routes/Purchase'
import ProductDetails from './routes/ProductDetails'
import ProtectedRoutes from './components/shared/ProtectedRoutes'
import Layout from './components/shared/Layout'
import { useState } from 'react'
import Checkout from './routes/Checkout'

function App() {

  const [theme, setTheme] = useState(false)
  const [search, setSearch] = useState()
  const [filter, setFilter] = useState()

  return (
    <div className={`App ${theme ? 'dark' : ''}`}>
      <Routes>
        <Route element={<Layout
          theme={theme}
          setTheme={setTheme}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter} />}>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home search={search} setSearch={setSearch} />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route element={<Layout />}>
            <Route path='/purchase' element={<Purchase />} />
            <Route path='/checkout' element={<Checkout />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
