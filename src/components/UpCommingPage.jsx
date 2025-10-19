import React from 'react';
import { Link } from 'react-router';

const UpCommingPage = () => {
    return (
          <div className='min-h-screen flex flex-col justify-center items-center'>
           <h1 className='text-5xl text-accent'>Page is Comming Soon...</h1>
           <Link to={-1} className=" btn btn-secondary mt-5"> ←Go Back</Link>
        </div>
    );
};

export default UpCommingPage;