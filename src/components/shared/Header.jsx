import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/Header.css'

const Header = ({theme, setTheme, setSideBarHidden, sideBarHidden}) => {

    

    const handleSwitchTheme = () => {
        setTheme(!theme)
    }

    const handleSideBarSwitch = () => {
        setSideBarHidden(!sideBarHidden)
    }

    return (
        <header className='header'>
            <div className="header__top">
            <i onClick={handleSideBarSwitch} className="fi fi-rr-filter"></i>
            <NavLink className='header__item' to='/'>
                <h2>e-commerce</h2>
            </NavLink>
            </div>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item"><i onClick={handleSwitchTheme} className="fi fi-rr-moon"></i></li>
                    <div className="line" />
                    <li><NavLink className="header__item" to='/login'><i className="fi fi-rr-user"></i></NavLink></li>
                    <div className="line" />
                    <li><NavLink className="header__item" to='/purchase'><i className="fi fi-rr-box"></i></NavLink></li>
                    <div className="line" />
                    <li className="header__item"><i className="fi fi-rr-shopping-cart"></i></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header