import React from 'react';
import logoImg from "/logo.png"
import { format } from 'date-fns';
const Header = () => {
    return (
        <div>
           <div className='flex flex-col items-center mt-8'>
            <img src={logoImg} alt="" />
            <p className='text-accent text-lg'>Journalism Without Fear or Favour Go On</p>
            <p className='text-xl font-semibold text-accent'>{format(new Date(),"EEEE,MMMM dd,yyyy")}</p>
           </div>
        </div>
    );
};

export default Header;