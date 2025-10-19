import React from 'react';
import MyContainer from './MyContainer';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <MyContainer className="latestNews flex items-center gap-5 bg-base-300 p-3">
            <button className='btn btn-secondary text-xl font-medium'>Latest</button>
            <Marquee className='flex gap-5'>
                <p className='text-lg font-semibold'>Bangladesh's Export Earnings Show Strong Growth in Q1 2025</p>
                <p className='text-lg font-semibold'>Central Bank Announces New Monetary Policy to Control Inflation</p>
                <p className='text-lg font-semibold'>Foreign Investment in Bangladesh Reaches Record High in Fiscal Year 2024-25</p>
            </Marquee>
        </MyContainer>
    );
};

export default LatestNews;