import React, { use } from 'react';
import MyContainer from './MainLayout/MyContainer';
import { Link, NavLink } from 'react-router';
import userLogo from "../assets/user.png"
import { AuthContext } from '../Context/AuthContex';
import { toast } from 'react-toastify';
const Navbar = () => {
    const { logOutUser } = use(AuthContext)
    const links = <>
        <li> <NavLink to={"/"}>Home</NavLink></li>
        <li> <NavLink to={"/about"}>About</NavLink></li>
        <li> <NavLink to={"/career"}>Career</NavLink></li>
    </>
    const handleLogout = () => {
        logOutUser()
        .then(()=> toast.success("Logout Successfuly"))
    }
    return (
        <MyContainer>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-accent text-lg">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <img src={userLogo} alt="" />
                    <Link to={"/auth/login"} className="btn btn-primary px-8">Login</Link>
                    <button onClick={handleLogout} className='btn btn-secondary'>Logout</button>
                </div>
            </div>
        </MyContainer>
    );
};

export default Navbar;