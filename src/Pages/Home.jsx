import React from 'react';
import { Navigate } from 'react-router';

const Home = () => {
    return (
        <div>
           <Navigate to={"category/0"}/>
        </div>
    );
};

export default Home;