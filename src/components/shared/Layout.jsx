import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'
import '../../styles/Layout.css'

const Layout = ({theme, setTheme}) => {
  const [sideBarHidden, setSideBarHidden] = useState(false)               
  return (
    <div className='Layout'>
        <SideBar sideBarHidden={sideBarHidden}/>
        <Header theme={theme} setTheme={setTheme} sideBarHidden={sideBarHidden} setSideBarHidden={setSideBarHidden}/>
        <div className="main">
        <Outlet/>
        </div>
    </div>
  )
}

export default Layout