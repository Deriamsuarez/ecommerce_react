import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Header from './Header';

const ProtectedRoutes = () => {

    let test = true;
        return (

                <Outlet/>

        )
    
}

export default ProtectedRoutes