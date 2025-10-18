import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from '../components/MainLayout/Header';
import LeftAside from '../components/MainLayout/LeftAside';

const categoriesPromiss = fetch('/categories.json').then(res=>res.json())

const MainLayout = () => {
    return (
        <div>
            <Header/>
          <main className='grid grid-cols-12 container mx-auto gap-5'>
            <div className='left col-span-3'>
               <Suspense fallback= <span className="loading loading-spinner loading-xl"></span> >
                <LeftAside categoriesPromiss ={categoriesPromiss} />
               </Suspense>
            </div>
            <div className='col-span-6'> <Outlet/></div>
            <div className='right col-span-3'>right aside</div>
          </main>
        </div>
    );
};

export default MainLayout;