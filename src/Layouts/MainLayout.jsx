import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/MainLayout/Header';

const MainLayout = () => {
    return (
        <div>
            <Header/>
          <main>
            <div className='left'></div>
            <div> <Outlet/></div>
            <div className='right'></div>
          </main>
        </div>
    );
};

export default MainLayout;