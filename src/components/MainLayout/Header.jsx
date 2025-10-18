import React from 'react';
import logoImg from "/logo.png"
import { format } from 'date-fns';
import MyContainer from './MyContainer';
import Marquee from 'react-fast-marquee';
import Navbar from '../Navbar';
const Header = () => {
    return (
        <div>
           <div className='flex flex-col items-center mt-8'>
            <img src={logoImg} alt="" />
            <p className='text-accent text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-semibold text-accent'>{format(new Date(),"EEEE,MMMM,yyyy")}</p>
           </div>
           <MyContainer className="latestNews flex items-center gap-5 bg-base-300 p-3">
            <button className='btn btn-secondary text-xl font-medium'>Latest</button>
            <Marquee className='flex gap-5'>
                <p className='text-lg font-semibold'>Bangladesh's Export Earnings Show Strong Growth in Q1 2025</p>
                <p className='text-lg font-semibold'>Central Bank Announces New Monetary Policy to Control Inflation</p>
                <p className='text-lg font-semibold'>Foreign Investment in Bangladesh Reaches Record High in Fiscal Year 2024-25</p>
            </Marquee>
           </MyContainer>
           <Navbar/>
        </div>
    );
};

export default Header;