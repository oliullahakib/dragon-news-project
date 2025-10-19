import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import MyContainer from '../components/MainLayout/MyContainer';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='bg-base-200'>
                <Navbar/>
            </header>
            <main>
               <MyContainer>
                 <Outlet/>
               </MyContainer>
            </main>
        </div>
    );
};

export default AuthLayout;